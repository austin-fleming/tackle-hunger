import { ImageCard } from '@components/ui';
import type { TwinCardWithCollage as TwinCardWithCollageProps } from 'lib/sanity/types';

export const Single = ({ images }: TwinCardWithCollageProps['collage']) => {
  const image = images[0];

  return (
    <ImageCard
      aspectRatio={1}
      imageData={image}
      overlay='none'
      sizes={{ lg: 50, md: 50, sm: 100, xl: 50, xs: 100 }}
    />
  );
};
