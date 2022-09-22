import { useEffect, useState } from 'react';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchCurrentQuestAction } from '../../store/api-actions';
import { getCurrentOfferDataLoadedStatus, getCurrentQuest } from '../../store/data-reducer/selectors';
import { QuestLevel, QuestTab } from '../../database';
import { dropCurrentQuest } from '../../store/data-reducer/data-reducer';
import LoadingWrapper from '../loading-wrapper/loading-wrapper';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened((prevState) => !prevState);
  };

  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    id && dispatch(fetchCurrentQuestAction(+id));

    return () => {
      dispatch(dropCurrentQuest());
    };
  }, [dispatch, id]);

  const currentQuest = useAppSelector(getCurrentQuest);
  const isCurrentOfferDataLoaded = useAppSelector(getCurrentOfferDataLoadedStatus);

  const { title, type, duration, peopleCount, coverImg, level, description } = currentQuest;

  return (
    <LoadingWrapper isLoad={isCurrentOfferDataLoaded}>
      <MainLayout>
        <S.Main>
          <S.PageImage
            src={`../${coverImg}`}
            alt={`Квест ${title}`}
            width="1366"
            height="768"
          />
          <S.PageContentWrapper>
            <S.PageHeading>
              <S.PageTitle>{title}</S.PageTitle>
              <S.PageSubtitle>{QuestTab[type as keyof typeof QuestTab]?.toLowerCase()}</S.PageSubtitle>
            </S.PageHeading>

            <S.PageDescription>
              <S.Features>
                <S.FeaturesItem>
                  <IconClock width="20" height="20" />
                  <S.FeatureTitle>
                    {`${duration} мин`}
                  </S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPerson width="19" height="24" />
                  <S.FeatureTitle>
                    {`${peopleCount?.join('-')} чел`}
                  </S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPuzzle width="24" height="24" />
                  <S.FeatureTitle>
                    {QuestLevel[level as keyof typeof QuestLevel]}
                  </S.FeatureTitle>
                </S.FeaturesItem>
              </S.Features>

              <S.QuestDescription>
                {description}
              </S.QuestDescription>

              <S.QuestBookingBtn onClick={onBookingBtnClick}>
                Забронировать
              </S.QuestBookingBtn>
            </S.PageDescription>
          </S.PageContentWrapper>

          {isBookingModalOpened && <BookingModal onCloseBtnClick={onBookingBtnClick} />}
        </S.Main>
      </MainLayout>
    </LoadingWrapper>
  );
};

export default DetailedQuest;
