import React from 'react';
import { ContentContainer, SectionContainer, Twin } from '@components/layouts';
import { InfoText } from '@components/ui';
import type { TwinCardWithCollage as TwinCardWithCollageProps } from 'lib/sanity/types';
import { Bento } from './Bento';
import { Single } from './Single';
import { Triptych } from './Triptych';

export const TwinCardWithCollage = ({
  isFlipped,
  textBlock,
  collage,
  asHero,
}: TwinCardWithCollageProps) => {
  const { collageStyle } = collage;

  const Gallery = (
    <React.Fragment>
      {collageStyle === 'bento' && <Bento {...collage} />}
      {collageStyle === 'triptych' && <Triptych {...collage} />}
      {collageStyle === 'single' && <Single {...collage} />}
    </React.Fragment>
  );

  return (
    <SectionContainer>
      <ContentContainer>
        <Twin
          isFlipped={isFlipped}
          isHero={asHero}
          leftPane={<InfoText {...textBlock} />}
          rightPane={Gallery}
        />
      </ContentContainer>
    </SectionContainer>
  );
};
