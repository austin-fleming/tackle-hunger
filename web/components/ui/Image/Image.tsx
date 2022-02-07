import React from 'react';
import { urlForSized } from 'config/sanity';

type ImageSimpleProps = {
  alt: string;
  height?: number;
  key: any;
  layout: string;
  objectFit?: string;
  src: string;
  width?: number;
};

export const ImageSimple = ({
  src,
  alt,
  height,
  width,
  objectFit,
  key,
  layout,
}: ImageSimpleProps): React.ReactNode => {
  const sizedSrc = urlForSized(src, width, height);

  return (
    <div>
      <img alt={alt} src={src} />
    </div>
  );
};
