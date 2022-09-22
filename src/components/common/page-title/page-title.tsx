import * as S from './page-title.styled';

type PageTitleProps = {
  children: string,
};

const PageTitle = ({ children, ...props }: PageTitleProps): JSX.Element => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
