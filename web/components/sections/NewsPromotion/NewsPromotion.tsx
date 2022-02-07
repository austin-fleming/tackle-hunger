import React from 'react';
import { ContentContainer, SectionContainer } from '@components/layouts';
import { SectionHeading } from '@components/ui';
import styled from '@emotion/styled';
import { NewsPromotion as NewsPromotionProps } from 'lib/sanity/types';
import { NewsCard } from './NewsCard';

const TextContainer = styled.div<{
  gapSpacing: number;
  maxChWidth?: number;
  paddingSpacing: number;
}>`
  padding: ${({ theme, paddingSpacing }) => theme.spacing(paddingSpacing)};
  display: grid;
  gap: ${({ theme, gapSpacing }) => theme.spacing(gapSpacing)};
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: flex-start;

  & * {
    ${({ maxChWidth }) => maxChWidth && `max-width: ${maxChWidth}ch;`}
    margin-left: auto;
    margin-right: auto;
  }
`;

const ArticleGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: auto;

  /* @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    grid-template-columns: auto auto auto;
  } */
`;

export const NewsPromotion = ({ title, content }: NewsPromotionProps) => {
  /* const {title, summary, linkButton, cardImage} = content */

  const paddingSpacing = 4;
  const gapSpacing = 4;

  return (
    <SectionContainer>
      <ContentContainer>
        {title && (
          <TextContainer key='sectionTitle' gapSpacing={gapSpacing} paddingSpacing={paddingSpacing}>
            <SectionHeading mobileAlign='center' title={title} />
          </TextContainer>
        )}
        <ArticleGrid>
          {content &&
            content.map((contentCard) => <NewsCard key={contentCard.title} {...contentCard} />)}
        </ArticleGrid>
      </ContentContainer>
    </SectionContainer>
  );
};
