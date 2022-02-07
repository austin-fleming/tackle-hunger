import { AspectImage, AspectImageProps, InfoCard, InfoCardProps } from '@components/ui';

type ImageCardProps = {
  aspectRatio?: AspectImageProps['aspectRatio'];
  elevation?: InfoCardProps['elevation'];
  imageData: AspectImageProps['imageData'];
  overlay?: AspectImageProps['overlay'];
  paddingSize?: InfoCardProps['paddingSize'];
  sizes: AspectImageProps['sizes'];
};
export const ImageCard = ({
  imageData,
  overlay = 'none',
  sizes,
  elevation = 'low',
  aspectRatio = 'inherit',
  paddingSize,
}: ImageCardProps) => (
  <InfoCard
    cover={aspectRatio === 'inherit'}
    elevation={elevation}
    outline='none'
    paddingSize={paddingSize || 'none'}>
    <AspectImage aspectRatio={aspectRatio} imageData={imageData} overlay={overlay} sizes={sizes} />
  </InfoCard>
);
