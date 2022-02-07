import React from 'react';
import { Container } from '@material-ui/core';

type ContentContainerProps = {
  children: any;
  maxWidth?: 'xl' | 'lg' | 'md' | 'sm';
};

export const ContentContainer: React.FC<ContentContainerProps> = ({ children, maxWidth }) => (
  <Container maxWidth={maxWidth || 'lg'}>{children}</Container>
);
