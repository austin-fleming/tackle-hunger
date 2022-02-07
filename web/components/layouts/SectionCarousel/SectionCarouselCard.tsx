import React from 'react';
import { SectionCarouselContainer } from '@components/layouts';
import { Paper } from '@material-ui/core';

type SectionCardProps = {
  children?: any;
};

export const SectionCarouselCard: React.FC<SectionCardProps> = ({ children }) => (
  <SectionCarouselContainer spacingTop={0}>
    <Paper component='div' elevation={4}>
      {children}
    </Paper>
  </SectionCarouselContainer>
);
