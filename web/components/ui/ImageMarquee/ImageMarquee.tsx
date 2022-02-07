import React from 'react';
import Marquee from 'react-fast-marquee';

type ImageProps = {
  alt: string;
  url: string;
};

type ImageMarqueeProps = {
  imageSet: ImageProps[];
};

export const ImageMarquee = ({ imageSet }: ImageMarqueeProps): React.ReactNode => (
  <Marquee>
    {imageSet.map((image) => (
      <div key={image.url}>
        <h1>{image.url}</h1>
        <p>{image.alt}</p>
      </div>
    ))}
  </Marquee>
);
