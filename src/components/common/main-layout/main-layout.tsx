import { Header, Footer } from '../../common/common';

type MainLayoutProps = {
  children: JSX.Element,
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
