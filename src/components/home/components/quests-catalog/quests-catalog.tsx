import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { QuestLevel, QuestTab } from '../../../../database';
import { filterQuestsByTab } from '../../../../utils';
import { getCurrentQuestTab } from '../../../../store/interface-reducer/selectors';
import { getQuests } from '../../../../store/data-reducer/selectors';
import { changeQuestTab } from '../../../../store/interface-reducer/interface-reducer';

const Icons = {
  [QuestTab.all]: <IconAllQuests />,
  [QuestTab.adventures]: <IconAdventures />,
  [QuestTab.horror]: <IconHorrors />,
  [QuestTab.mystic]: <IconMystic />,
  [QuestTab.detective]: <IconDetective />,
  [QuestTab['sci-fi']]: <IconScifi />,
};

const QuestsCatalog = () => {
  const currentQuestTab = useAppSelector(getCurrentQuestTab);
  const quests = useAppSelector(getQuests);
  const questsByTab = filterQuestsByTab(quests, currentQuestTab);

  const dispatch = useAppDispatch();
  const handleChangeQuestTab = (questTab: string) => dispatch(changeQuestTab(questTab));

  return (
    <>
    <S.Tabs>
        {
          Object.values(QuestTab).map((questTab) => (
            <S.TabItem
              key = {questTab}
              onClick = {() => handleChangeQuestTab(questTab)}
            >
              <S.TabBtn isActive = {questTab === currentQuestTab}>
                {Icons[questTab]}
                <S.TabTitle>
                  {questTab}
                </S.TabTitle>
              </S.TabBtn>
            </S.TabItem>
          ))
        }
      </S.Tabs>

      <S.QuestsList>
        {
          questsByTab.map(({id, title, previewImg, level, peopleCount}) => (
            <S.QuestItem key={id}>
              <S.QuestItemLink to={`/detailed-quest/${id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={previewImg}
                    width="344"
                    height="232"
                    alt={`квест ${title}`}
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {`${peopleCount.join('-')} чел`}
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {QuestLevel[level as keyof typeof QuestLevel]}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          ))
        }
      </S.QuestsList>
    </>
  )
};

export default QuestsCatalog;
