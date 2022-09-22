import { useAppSelector } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import {
  Routes,
  Route,
} from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from '../../const';
import { getDataLoadedStatus } from '../../store/data-reducer/selectors';
import LoadingWrapper from '../loading-wrapper/loading-wrapper';
import NotFound from '../not-found/not-found';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

const App = (): JSX.Element => {
  const isDataLoaded = useAppSelector(getDataLoadedStatus);

  return (
    <LoadingWrapper isLoad={isDataLoaded}>
      <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
        <HistoryRouter history={browserHistory}>
          <Routes>
            <Route path={AppRoute.DetailedQuest} element={<DetailedQuest />} />
            <Route path={AppRoute.Contacts} element={<Contacts />} />
            <Route path={AppRoute.Root} element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HistoryRouter>
      </ThemeProvider>
    </LoadingWrapper>
  );
};

export default App;
