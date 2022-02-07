import { ContentContainer, SectionContainer } from '@components/layouts';
import { ImageCard, SectionTitle, SimpleCardText } from '@components/ui';
import { useTheme } from '@emotion/react';
import { Grid } from '@material-ui/core';
import type { CardsWideList as CardsWideListProps } from 'lib/sanity/types';

export const CardsWideList = ({ textBlock, hasBackground, contentCards }: CardsWideListProps) => {
  const { isTablet, isMobile } = useTheme();
  const tabletDown = isTablet || isMobile;

  return contentCards ? (
    <SectionContainer hasBackground={hasBackground}>
      <ContentContainer>
        <SectionTitle {...textBlock} />
        <Grid container spacing={0}>
          {contentCards.map((contentCard) => (
            <Grid
              key={contentCard.cardText.title}
              container
              marginBottom={tabletDown ? 8 : 4}
              spacing={4}
              xs={12}>
              <Grid key='image' item md={4} sm={6} xs={12}>
                <ImageCard
                  aspectRatio={1}
                  imageData={contentCard.image}
                  sizes={{ lg: 50, md: 50, sm: 100, xl: 40, xs: 100 }}
                />
              </Grid>
              <Grid key='text' item md={8} xs={12}>
                <SimpleCardText {...contentCard.cardText} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </ContentContainer>
    </SectionContainer>
  ) : null;
};
