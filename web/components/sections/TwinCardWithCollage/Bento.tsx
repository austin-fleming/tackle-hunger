import { ImageCard } from '@components/ui';
import Grid from '@material-ui/core/Grid';
import type { TwinCardWithCollage as TwinCardWithCollageProps } from 'lib/sanity/types';

export const Bento = ({ images }: TwinCardWithCollageProps['collage']) => (
  <Grid container spacing={2}>
    {images.map((image) => (
      <Grid key={image.asset._ref} item xs={4}>
        <ImageCard
          aspectRatio={1}
          imageData={image}
          overlay='primary'
          sizes={{ lg: 100, md: 100, sm: 100, xl: 100, xs: 100 }}
        />
      </Grid>
    ))}
  </Grid>
);
