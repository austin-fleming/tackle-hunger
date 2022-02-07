import { ContentContainer, SectionContainer } from '@components/layouts';
import { AspectImage, ImageCard, InfoCard, InfoText, SectionTitle } from '@components/ui';
import { Grid } from '@material-ui/core';
import { HeroLargeCard as HeroLargeCardProps } from 'lib/sanity/types';

export const HeroLargeCard = ({ imageGrid, titleBlock }: HeroLargeCardProps) => (
  <SectionContainer spacingTop={0}>
    <ContentContainer>
      <Grid container spacing={8}>
        {imageGrid && imageGrid.length > 0 && (
          <Grid key='heroCard' item xs={12}>
            <InfoCard hasTopRadius={false} outline='none'>
              <Grid container spacing={4}>
                {imageGrid.length === 1 ? (
                  <Grid item xs={12}>
                    <ImageCard
                      aspectRatio={2}
                      elevation='none'
                      imageData={imageGrid[0]}
                      overlay='none'
                      sizes={{ lg: 100, md: 100, sm: 100, xl: 100, xs: 100 }}
                    />
                  </Grid>
                ) : (
                  imageGrid.map((image) => (
                    <Grid key={image.asset._ref} item sm={6} xs={12}>
                      <ImageCard
                        aspectRatio={1}
                        elevation='none'
                        imageData={image}
                        sizes={{ lg: 50, md: 50, sm: 50, xl: 50, xs: 100 }}
                      />
                    </Grid>
                  ))
                )}
              </Grid>
            </InfoCard>
          </Grid>
        )}
        {titleBlock && (
          <Grid key='heroTitle' item xs={12}>
            <SectionTitle {...titleBlock} />
          </Grid>
        )}
      </Grid>
    </ContentContainer>
  </SectionContainer>
);
