import styled from 'styled-components';
import { Link as RouterLink } from '../common/common';

const PageTitle = styled.h1`
  margin: 0;
  margin-bottom: 29px;
  padding: 0;

  font-size: ${({ theme }) => theme.font.semilarge};
  line-height: 95%;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  overflow-wrap: anywhere;
`;

const Link = styled(RouterLink)`
  display: block;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.whiteSmoke};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export {
  PageTitle,
  Link,
};
