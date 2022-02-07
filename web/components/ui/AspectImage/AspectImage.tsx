import styled from '@emotion/styled';
import { urlFor } from 'lib/sanity/images';
import type {
  Figure as FigureProps,
  SimpleImage as SimpleImageProps,
} from 'types/generated/schema';

type SizeMap = {
  lg: number;
  md: number;
  sm: number;
  xl: number;
  xs: number;
};

type ImageDataProps = SimpleImageProps | FigureProps;
type AspectRatioProps = number | 'inherit';
type ObjectFitProps = 'cover' | 'contain';
type ColorOverlayProps = 'primary' | 'secondary' | 'none';
export type AspectImageProps = {
  aspectRatio?: AspectRatioProps;
  imageData?: ImageDataProps;
  objectFit?: ObjectFitProps;
  overlay?: ColorOverlayProps;
  sizes: SizeMap;
};

const breakpoints = {
  lg: 1280,
  md: 960,
  sm: 600,
  xl: 1920,
  xs: 1,
};

// TODO: merge with same chunk in `components/ui/AspectImage/AspectImage.tsx`
const StyledOverlay = styled.div<{ overlay: ColorOverlayProps }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, overlay }) =>
    (overlay === 'primary' && theme.palette.brandOrange.main) ||
    (overlay === 'secondary' && theme.palette.brandYellow.main) ||
    'none'};
  opacity: 0.2;
  filter: contrast(1.1) saturate(1.25);
  background: radial-gradient(
    circle,
    rgba(247, 222, 147, 0) 0%,
    rgba(247, 222, 147, 0) 45%,
    RGBA(235, 96, 42, 1) 100%
  );
`;

const StyledImage = styled.img<{ objectFit: ObjectFitProps }>`
  position: absolute;
  object-fit: ${({ objectFit }) => objectFit};
  width: 100%;
  height: 100%;
`;

const StyledWrapper = styled.div<{ aspectRatio: AspectRatioProps }>`
  overflow: hidden;
  width: 100%;

  ${({ aspectRatio }) =>
    aspectRatio === 'inherit'
      ? `position: absolute; height: 100%;`
      : `position: relative; padding-bottom: ${(1 / aspectRatio) * 100}%;`}
`;

const getImageWidth = (imageSize: number, breakpointWidth: number): number =>
  (imageSize / 100) * breakpointWidth;

const buildImageSrcSetFragment = (
  imageData: ImageDataProps,
  imageSize: number,
  breakpointWidth: number
): string | null => {
  const imageWidth = getImageWidth(imageSize, breakpointWidth);
  const imageUrl = urlFor(imageData).width(imageWidth).url();
  return `${imageUrl} ${imageWidth}w`;
};

const buildSrcSet = (imageData: ImageDataProps, sizes: SizeMap, breakpointMap: SizeMap) => {
  const srcSet = `
    ${buildImageSrcSetFragment(imageData, sizes.sm, breakpointMap.sm)},
    ${buildImageSrcSetFragment(imageData, sizes.md, breakpointMap.md)},
    ${buildImageSrcSetFragment(imageData, sizes.lg, breakpointMap.lg)},
    ${buildImageSrcSetFragment(imageData, sizes.xl, breakpointMap.xl)},
  `;

  const fallback = urlFor(imageData).width(800).url();

  const sizeSet = `
    (max-width: ${breakpointMap.sm}) ${sizes.xs}vw,
    (max-width: ${breakpointMap.md}) ${sizes.sm}vw,
    (max-width: ${breakpointMap.lg}) ${sizes.md}vw,
    (max-width: ${breakpointMap.xl}) ${sizes.lg}vw,
    ${sizes.xl}vw
  `;

  return Object.freeze({
    fallback,
    sizeSet,
    srcSet,
  });
};

export const AspectImage = ({
  imageData,
  sizes,
  objectFit,
  aspectRatio = 'inherit',
  overlay = 'none',
}: AspectImageProps) => {
  if (!imageData) return null;

  const { fallback, sizeSet, srcSet } = buildSrcSet(imageData, sizes, breakpoints);

  const setObjectFit = objectFit || (imageData?.isContained && 'contain') || 'cover';

  return fallback ? (
    <StyledWrapper aspectRatio={aspectRatio}>
      <StyledImage
        alt={imageData.alt}
        objectFit={setObjectFit}
        sizes={sizeSet}
        src={fallback}
        srcSet={srcSet}
      />
      {overlay !== 'none' && <StyledOverlay overlay={overlay} />}
    </StyledWrapper>
  ) : null;
};
