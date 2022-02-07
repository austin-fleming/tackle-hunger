import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  border-top: ${({ theme }) => `4px solid ${theme.palette.brandYellow.main}`};
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const NavBlock = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;

  & > * {
    margin-bottom: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    width: 75%;
    flex-direction: row;
    text-align: left;
    justify-content: space-around;

    & > div {
      padding-right: 32px;
    }

    & > * {
      margin-bottom: 0;
    }
  }
`;

export const LinkList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const LinkItem = styled.li`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.brandPurple.main};
    text-decoration: underline;
  }
`;

export const FooterGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const BrandWrapper = styled.a<{ height: number; width: number }>`
  display: block;
  height: ${({ height }) => `${height}px`};
  margin: 0px auto 32px;

  @media (max-width: 768px) {
    /* iPad */
    text-align: center;
    width: 100%;
  }
`;

export const PagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    width: max-content;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const CompanyContactInfo = styled.div`
  display: flex;
  text-align: left;
  width: 75%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;

  & > * {
    margin-bottom: inherit;
  }

  ${({ theme: { isMobile } }) =>
    isMobile &&
    css`
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      text-align: center;
      margin-bottom: 2rem;

      & > * {
        margin-bottom: 1rem;
      }
    `}

  ${({ theme: { isTablet } }) =>
    isTablet &&
    css`
      width: 100%;
    `}
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-self: auto;
  justify-items: center;
  text-align: center;
  margin-bottom: 2rem;
  width: ${({ theme }) => (theme.isMobile ? '100%' : '25%')};
  min-width: max-content;
`;

export const CopyrightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 50%;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
