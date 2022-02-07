import React from 'react';
import { ChunkyUnderline, CtaButton, Rule } from '@components/ui';
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@material-ui/core';
import { simplePortableText } from 'lib/sanity/portableText';
import type { InfoText as InfoTextProps } from 'lib/sanity/types';

const ContentContainer = styled.div<{ padHorizontal: boolean; padVertical: boolean }>`
  height: auto;
  ${({ padVertical, theme }) =>
    padVertical &&
    `
    padding-top: ${theme.spacing(4)};
    padding-bottom: ${theme.spacing(4)};
  `}
  ${({ padHorizontal, theme }) =>
    padHorizontal &&
    `
    padding-left: ${theme.spacing(4)};
    padding-right: ${theme.spacing(4)};
  `}
`;

type InfoTextExtendedProps = {
  asSection?: boolean;
  padHorizontal?: boolean;
  padVertical?: boolean;
} & InfoTextProps;

export const InfoText = ({
  headline,
  subHeadline,
  body,
  ctaList,
  padVertical = false,
  padHorizontal = false,
  asSection = false,
}: InfoTextExtendedProps) => (
  <ContentContainer padHorizontal={padHorizontal} padVertical={padVertical}>
    {headline &&
      (asSection ? (
        <Typography component='h1' variant='h4'>
          <ChunkyUnderline>{headline}</ChunkyUnderline>
        </Typography>
      ) : (
        <React.Fragment>
          <Typography component='h1' paddingBottom={1} variant='h4'>
            {headline}
          </Typography>
          <Rule align='left' topSpacing={1} />
        </React.Fragment>
      ))}
    {subHeadline && (
      <Typography component='p' paddingTop={4} variant='h6'>
        {subHeadline}
      </Typography>
    )}
    {body && <Box paddingTop={3}>{simplePortableText(body)}</Box>}
    {ctaList && (
      <Grid container paddingTop={3} spacing={2}>
        {ctaList.map((cta) => (
          <Grid key={cta.label} item>
            <CtaButton {...cta} />
          </Grid>
        ))}
      </Grid>
    )}
  </ContentContainer>
);
