import React from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { PortableText, urlFor } from '../../config/sanity';
import { CtaButton, Page, Section as SectionProps } from '../../types/generated/schema';
import { BlockHeading } from '../BlockHeading';
import { Cta } from './Cta';
import { serializers } from '../serializers';

const SectionWrapper = styled.div<{ shouldZoomBg: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SectionContents = styled.div<{ backgroundImageExists: boolean }>`
  ${({ backgroundImageExists }) => backgroundImageExists && 'position: absolute;'}
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
  padding: 50px;
  justify-content: space-evenly;

  ${({ theme }) =>
    theme.isMobile &&
    css`
      padding: 100px 25px;
    `}
`;

const CenterRow = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => (theme.isMobile ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  max-width: 780px;
`;

const BackgroundImage = styled.img<{ shouldZoomBg: boolean }>`
  ${({ theme }) =>
    css`
      width: ${theme.breakpoints.values.lg}px;
    `}

  ${({ theme }) =>
    theme.isMobile &&
    css`
      width: 100%;
    `}


  ${({ shouldZoomBg }) =>
    shouldZoomBg &&
    css`
      width: 400%;
      margin-left: -100%;
    `}
`;

export const Section: React.FC<SectionProps> = ({
  backgroundImage,
  ctaButtons,
  headingAbove,
  headingBelow,
  headingLeft,
  headingRight,
  image,
  label,
  mobileBackgroundImage,
  text,
}) => {
  const { isMobile } = useTheme();

  const centerComponentWidth = `${100 / [headingLeft, image, headingRight].filter((el) => !!el).length
    }%`;

  const mobileHeadingStyle = isMobile
    ? { fontSize: '22px', lineHeight: 1.2, textAlign: 'left', width: '100%' }
    : { fontSize: '2.1rem', width: centerComponentWidth };

  return (
    <SectionWrapper shouldZoomBg={isMobile && !mobileBackgroundImage}>
      {backgroundImage && (
        <BackgroundImage
          alt={`${label}-background-image`}
          shouldZoomBg={isMobile && !mobileBackgroundImage}
          src={urlFor(isMobile && mobileBackgroundImage ? mobileBackgroundImage : backgroundImage)}
        />
      )}
      <SectionContents backgroundImageExists={!!backgroundImage}>
        {headingAbove && (
          <BlockHeading
            blocks={headingAbove}
            style={{ ...mobileHeadingStyle, textAlign: 'center' }}
          />
        )}
        <CenterRow>
          {headingLeft && (
            <BlockHeading
              blocks={headingLeft}
              style={{ ...mobileHeadingStyle, textAlign: isMobile ? 'center' : 'left' }}
            />
          )}
          {image && (
            <div style={{ width: isMobile ? '100%' : centerComponentWidth }}>
              <img alt={image.alt} src={urlFor(image)} style={{ maxWidth: '100%' }} />
              {image.caption && <div>{image.caption}</div>}
            </div>
          )}
          {headingRight && (
            <BlockHeading
              blocks={headingRight}
              style={{ ...mobileHeadingStyle, textAlign: isMobile ? 'left' : 'right' }}
            />
          )}
        </CenterRow>
        {headingBelow && (
          <BlockHeading
            blocks={headingBelow}
            style={{ ...mobileHeadingStyle, maxWidth: '780px', textAlign: 'center' }}
          />
        )}
        {text && (
          <div style={{ maxWidth: '820px' }}>
            <PortableText blocks={text} serializers={serializers} />
          </div>
        )}
        {ctaButtons && (
          <div style={isMobile ? { width: '100%' } : {}}>
            {ctaButtons.map((cta) => (
              <Cta
                {...((cta as unknown) as CtaButton & { page: Omit<Page, '_type'> })}
                key={cta._key}
              />
            ))}
          </div>
        )}
      </SectionContents>
    </SectionWrapper>
  );
};
