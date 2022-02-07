import React from 'react';
import { TextContent } from '@components/layouts';
import { AspectImage, CtaButton } from '@components/ui';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import type { ContentCard as ContentCardProps } from 'lib/sanity/types';

const ArticleCard = styled.article`
  position: relative;
  width: 100%;
  max-width: 375px;
  height: auto;

  margin: ${({ theme }) => theme.spacing(2)};

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  overflow: hidden;

  border-radius: ${({ theme }) => theme.spacing(2)};
  box-shadow: ${({ theme }) => theme.shadows[4]};

  background-color: white;
`;

export const NewsCard = ({ title, summary, linkButton, cardImage }: ContentCardProps) => (
  <ArticleCard>
    <AspectImage
      aspectRatio={4 / 3}
      imageData={cardImage}
      sizes={{ lg: 33, md: 50, sm: 100, xl: 33, xs: 100 }}
    />
    <TextContent gapSpacing={2}>
      {title && (
        <Typography component='h1' variant='h6'>
          {title}
        </Typography>
      )}

      {summary && (
        <Typography color='textSecondary' component='h2' variant='body1'>
          {summary}
        </Typography>
      )}

      {linkButton && <CtaButton {...linkButton} />}
    </TextContent>
  </ArticleCard>
);
