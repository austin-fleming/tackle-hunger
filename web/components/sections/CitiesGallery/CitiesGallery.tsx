import { ContentContainer, SectionContainer } from '@components/layouts';
import { CardText, ImageCard, SectionTitle } from '@components/ui';
import { Grid } from '@material-ui/core';
import type { CitiesGallery as CitiesGalleryProps } from 'lib/sanity/types';

export const CitiesGallery = ({ cities, sectionTitle }: CitiesGalleryProps) =>
  cities ? (
    <SectionContainer>
      <ContentContainer>
        <SectionTitle {...sectionTitle} />
        <Grid container spacing={3}>
          {cities.map((city) => (
            <Grid key={city.title} item lg={4} sm={6} xs={12}>
              <ImageCard
                aspectRatio={2 / 1}
                elevation='low'
                imageData={city.image}
                overlay='none'
                sizes={{ lg: 33, md: 50, sm: 50, xl: 33, xs: 100 }}
              />
              <CardText blockDescription={city.description} title={city.title} />
            </Grid>
          ))}
        </Grid>
      </ContentContainer>
    </SectionContainer>
  ) : null;
