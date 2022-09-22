import logo from '../../../assets/img/logo.svg';
import { AppRoute } from '../../../const';
import { HeaderLink } from '../../../database';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeHeaderLink } from '../../../store/interface-reducer/interface-reducer';
import { getCurrentHeaderLink } from '../../../store/interface-reducer/selectors';
import * as S from './header.styled';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentHeaderLink = useAppSelector(getCurrentHeaderLink);

  const handleHeaderLinkClick = (currentHeaderLink: string) => {
    dispatch(changeHeaderLink(currentHeaderLink));
  };

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link
                $isActiveLink={currentHeaderLink === HeaderLink.quests}
                to={AppRoute.Root}
                onClick={(evt) => handleHeaderLinkClick(evt.currentTarget.text)}
              >
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={currentHeaderLink === HeaderLink.contacts}
                to={AppRoute.Contacts}
                onClick={(evt) => handleHeaderLinkClick(evt.currentTarget.text)}
              >
                Контакты
              </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  )
};

export default Header;
