import { ContentContainer, SectionContainer } from '@components/layouts';
import { ImageCard } from '@components/ui';
import { useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import type { CollageDivider as CollageDividerProps } from 'types/generated/schema';
import { appTheme } from 'theme';

export const CollageDivider = ({ imageGallery }: CollageDividerProps) => {
  const images = useMediaQuery(appTheme.breakpoints.down('sm'))
    ? imageGallery!.slice(0, 4)
    : imageGallery?.slice(0, 6);

  return (
    <SectionContainer el='div'>
      <ContentContainer>
        <Grid container spacing={3}>
          {images?.map((image) => (
            <Grid key={image.asset._ref} item sm={2} xs={3}>
              <ImageCard
                aspectRatio={1}
                elevation='low'
                imageData={image}
                overlay='primary'
                sizes={{ lg: 16, md: 16, sm: 25, xl: 10, xs: 25 }}
              />
            </Grid>
          ))}
        </Grid>
      </ContentContainer>
    </SectionContainer>
  );
};
