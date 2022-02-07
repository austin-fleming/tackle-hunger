import React from 'react';
import { SectionCard } from '@components/layouts';
import { CtaButton, SectionHeading } from '@components/ui';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { urlForSized } from 'config/sanity';
import { simplePortableText } from 'lib/sanity/portableText';
import { MapPromotion as MapPromotionProps } from 'lib/sanity/types';

const LayoutGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: stretch;
  align-items: stretch;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: row;
  }
`;

const TextPane = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: ${({ theme }) => theme.spacing(4)};

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(6)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 50%;
  }
`;

const ImagePane = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 50%;
  }
`;

const BackgroundImageWrapper = styled.div`
  position: relative;
  content: ' ';
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  padding-bottom: 56%;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ForegroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
`;

const ForegroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: ${({ theme }) => theme.spacing(4)};
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 80%);

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    grid-template-columns: 1fr 1fr;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 80%);
  }
`;

const CtaWrapper = styled.div`
  width: auto;
  height: auto;

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)};
    width: 30ch;
  }

  & p {
    font-size: 0.8em;
    line-height: 1.3;
  }
`;

export const MapPromotion = ({
  title,
  mapDescription,
  cta,
  ctaSubtext,
  backgroundImage,
  foregroundImage,
}: MapPromotionProps) => (
  <SectionCard>
    <LayoutGrid>
      <ImagePane>
        <BackgroundImageWrapper>
          {backgroundImage && backgroundImage.asset && (
            <BackgroundImage
              alt={backgroundImage.alt}
              src={urlForSized(backgroundImage.asset, 800)}
            />
          )}
        </BackgroundImageWrapper>
        <BackgroundOverlay />

        <ForegroundImageWrapper>
          {foregroundImage && foregroundImage.asset && (
            <ForegroundImage
              alt={foregroundImage.alt}
              src={urlForSized(foregroundImage.asset, 600)}
            />
          )}
        </ForegroundImageWrapper>
      </ImagePane>

      <TextPane>
        {title && <SectionHeading align='left' mobileAlign='left' title={title} />}

        {mapDescription && (
          <Typography component='p' variant='body1'>
            {mapDescription}
          </Typography>
        )}
        <CtaWrapper>
          {cta && <CtaButton {...cta} />}

          {ctaSubtext && simplePortableText(ctaSubtext)}
        </CtaWrapper>
      </TextPane>
    </LayoutGrid>
  </SectionCard>
);
