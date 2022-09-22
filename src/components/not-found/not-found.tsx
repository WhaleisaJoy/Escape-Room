import { MainLayout } from '../common/common';
import { Main } from '../home/home.styled';
import * as S from './not-found.styled';

const NotFound = (): JSX.Element => {
  return (
    <MainLayout>
      <Main forwardedAs="main">
        <S.PageTitle>
          Страница не найдена
        </S.PageTitle>

        <S.Link to="/">
          Вернуться на главную
        </S.Link>
      </Main>
    </MainLayout>
  );
};

export default NotFound;
