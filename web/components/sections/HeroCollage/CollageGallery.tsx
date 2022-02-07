import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { urlForSized } from 'config/sanity';
import { SimpleImage as SimpleImageProps } from 'types/generated/schema';

type SimpleImageList = SimpleImageProps[];

const flatArrayTo2D =
  (array: any[]) =>
  (columns: number) =>
  (rows: number): Array<any[]> =>
    [...Array(columns)].map((_, index) => array.slice(index * rows, index * rows + rows));

const getSmallGalleryImages = (imageList: any[]): Array<any[]> => flatArrayTo2D(imageList)(3)(2);

const getLargeGalleryImages = (imageList: any[]): Array<any[]> => flatArrayTo2D(imageList)(3)(3);

const CollageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const CollageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

// TODO: merge with same chunk in `components/sections/HeroCollage/CollageGallery.tsx`
const CollageImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 160%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 16px;
  box-shadow: ${({ theme }) => theme.shadows[4]};
  -webkit-filter: contrast(1.1) saturate(1.25);
  filter: contrast(1.1) saturate(1.25);
  background: radial-gradient(
    circle,
    rgba(247, 222, 147, 0) 0%,
    rgba(247, 222, 147, 0) 45%,
    RGBA(235, 96, 42, 1) 100%
  );
`;

const CollageImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;

type SimpleImageListProps = {
  galleryImages: SimpleImageList;
};

export const CollageGallery = ({ galleryImages }: SimpleImageListProps) => {
  const [shouldUseLargeGallery, setShouldUseLargeGallery] = React.useState(true);

  const imageList = shouldUseLargeGallery
    ? getLargeGalleryImages(galleryImages)
    : getSmallGalleryImages(galleryImages);

  const { breakpoints } = useTheme();
  const fullGalleryBreakpoint = breakpoints.values.md;

  React.useEffect(() => {
    const resizeGallery = () => {
      setShouldUseLargeGallery(fullGalleryBreakpoint < window.innerWidth);
    };

    resizeGallery();

    window.addEventListener('resize', resizeGallery);
  }, []);

  return (
    <CollageWrapper>
      {galleryImages &&
        imageList.map((images, index) => (
          <CollageColumn key={images[0].asset._ref} style={{ paddingTop: `${index * 48}px` }}>
            {images.map((image) => (
              <CollageImageWrapper key={image._key}>
                <CollageImage alt={image.alt} src={urlForSized(image.asset, 300)} />
              </CollageImageWrapper>
            ))}
          </CollageColumn>
        ))}
    </CollageWrapper>
  );
};
