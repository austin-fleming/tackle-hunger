import React from 'react';
import { ContentContainer } from '@components/layouts';
import styled from '@emotion/styled';
import { Paper } from '@material-ui/core';

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
  display: flex;
  flex-direction: 'column';
  padding-bottom: ${({ theme, spacingBottom }) => theme.spacing(spacingBottom)};
  padding-top: ${({ theme, spacingTop }) => theme.spacing(spacingTop)};
  height: 100%;
`;

const styles = {
  height: '100%',
  overflow: 'hidden',
};

export const CarouselCard = ({
  spacingTop = 0,
  spacingBottom = 0,
  children,
  el = 'section',
  hasBackground = false,
}: SectionContainerProps) => (
  <SectionComponent
    as={el}
    hasBackground={hasBackground}
    spacingBottom={spacingBottom}
    spacingTop={spacingTop}>
    <ContentContainer>
      <Paper component='div' elevation={0} style={styles}>
        {children}
      </Paper>
    </ContentContainer>
  </SectionComponent>
);
