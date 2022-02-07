import React from 'react';
import { ContentContainer, SectionContainer } from '@components/layouts';
import { useTheme } from '@emotion/react';
import { Grid, Paper } from '@material-ui/core';

type SectionCardProps = {
  children?: any;
};

export const SectionCard: React.FC<SectionCardProps> = ({ children }) => {
  const { spacing, isMobile, palette, shape } = useTheme();

  const borderColor = palette.brandPurple.main;
  const borderThickness = spacing(0.5);

  const borderStyle = `${borderColor} solid ${borderThickness}`;

  const styles = {
    border: borderStyle,
    borderRadius: spacing(2),
    overflow: 'hidden',
  };

  return (
    <SectionContainer>
      <ContentContainer>
        <Paper component='div' elevation={4} style={styles}>
          {children}
        </Paper>
      </ContentContainer>
    </SectionContainer>
  );
};
