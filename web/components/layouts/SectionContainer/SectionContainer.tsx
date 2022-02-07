import React from 'react';
import styled from '@emotion/styled';

type SectionContainerProps = {
  children?: any;
  el?: 'section' | 'header' | 'footer' | 'div';
  hasBackground?: boolean;
  spacingBottom?: number;
  spacingTop?: number;
};

const SectionComponent = styled.div<{
  hasBackground: boolean;
  spacingBottom: number;
  spacingTop: number;
}>`
  align-items: 'center';
  display: 'flex';
  flex-direction: 'column';
  padding-bottom: ${({ theme, spacingBottom }) => theme.spacing(spacingBottom)};
  padding-top: ${({ theme, spacingTop }) => theme.spacing(spacingTop)};
  width: '100%';

  ${({ hasBackground, theme }) =>
    hasBackground &&
    `
      background-color: ${theme.palette.brandPurple.light};
      border-top: ${theme.borders.primary.md};
      border-bottom: ${theme.borders.primary.md};
    `}
`;

export const SectionContainer = ({
  spacingTop = 8,
  spacingBottom = 8,
  children,
  el = 'section',
  hasBackground = false,
}: SectionContainerProps) => (
  <SectionComponent
    as={el}
    hasBackground={hasBackground}
    spacingBottom={spacingBottom}
    spacingTop={spacingTop}>
    {children}
  </SectionComponent>
);
