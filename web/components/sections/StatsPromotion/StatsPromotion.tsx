import React from 'react';
import { ContentContainer, SectionContainer, TextContent } from '@components/layouts';
import { CtaButton, SectionHeading } from '@components/ui';
import styled from '@emotion/styled';
import { useMediaQuery } from '@material-ui/core';
import { simplePortableText } from 'lib/sanity/portableText';
import { StatsPromotion as StatsPromotionProps } from 'lib/sanity/types';
import { appTheme } from 'theme';
import { StatsCard } from './StatsCard';

const ArticleGrid = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;

  gap: ${({ theme }) => theme.spacing(4)};

  justify-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StatsPromotion = ({ title, content, cta, backstory }: StatsPromotionProps) => {
  /* const {title, summary, linkButton, cardImage} = content */
  const isMd = useMediaQuery(appTheme.breakpoints.up('md'));

  return (
    <SectionContainer>
      <ContentContainer maxWidth={isMd ? 'lg' : 'sm'}>
        {title && (
          <TextContent key='sectionTitle'>
            <SectionHeading mobileAlign='center' title={title} />
          </TextContent>
        )}
        <ArticleGrid>
          {content[0].stat && content.map((stat) => <StatsCard key={stat.stat} {...stat} />)}
        </ArticleGrid>

        {backstory && (
          <TextContent key='backstory' centered maxChWidth={60}>
            {simplePortableText(backstory)}
            {cta && <CtaButton {...cta} />}
          </TextContent>
        )}
      </ContentContainer>
    </SectionContainer>
  );
};
