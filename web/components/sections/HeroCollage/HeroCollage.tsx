import React from 'react';
import { ContentContainer } from '@components/layouts';
import { CtaButton } from '@components/ui';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { urlForSized } from 'config/sanity';
import { HeroCollage as HeroCollageProps } from 'lib/sanity/types';
import { CollageGallery } from './CollageGallery';

const HeroGrid = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  & > * {
    padding-bottom: ${({ theme }) => theme.spacing(8)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const TextPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;
  width: 100%;

  padding-top: ${({ theme }) => theme.spacing(12)};
  padding-right: ${({ theme }) => theme.spacing(4)};

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 50%;
    padding-right: ${({ theme }) => theme.spacing(4)};
  }
`;

const ImagePanel = styled.div`
  height: 100%;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 50%;
    height: auto;
  }
`;

const HeroText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }

  & > * {
    width: 100%;
    max-width: 60ch;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      max-width: 100%;
    }
  }
`;

const SponsorsFeature = styled.div`
  width: 100%;
  height: auto;
`;

const SponsorsGrid = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: ${({ theme }) => theme.spacing(2)};
  & > * + * {
    margin-right: ${({ theme }) => theme.spacing(4)};
  }
`;

const SponsorImage = styled.img`
  width: 80px;
  height: 100%;
  object-fit: contain;
`;

const ButtonLayout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > * {
    margin-top: ${({ theme }) => theme.spacing(2)} !important;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: row;
    flex-wrap: nowrap;

    & * + * {
      margin-left: ${({ theme }) => theme.spacing(4)} !important;
    }
  }
`;

export const HeroCollage = ({
  heroStatement,
  valueStatement,
  primaryCta,
  secondaryCta,
  imageGallery,
  sponsors,
}: HeroCollageProps) => {
  const { isMobile } = useTheme();

  return (
    <ContentContainer>
      <HeroGrid>
        <TextPanel>
          <HeroText>
            {heroStatement && (
              <Typography
                color='textPrimary'
                component='h1'
                display='block'
                variant={isMobile ? 'h3' : 'h2'}>
                {heroStatement}
              </Typography>
            )}

            {valueStatement && (
              <Typography
                color='textSecondary'
                component='h2'
                display='block'
                paddingTop={4}
                variant='h6'>
                {valueStatement}
              </Typography>
            )}
          </HeroText>

          <ButtonLayout>
            {primaryCta && <CtaButton key={primaryCta.label} {...primaryCta} />}
            {secondaryCta && <CtaButton key={secondaryCta.label} {...secondaryCta} />}
          </ButtonLayout>

          {sponsors && (
            <SponsorsFeature>
              {sponsors.title && (
                <Typography color='textSecondary' component='h3' variant='caption'>
                  {sponsors.title}
                </Typography>
              )}
              <SponsorsGrid>
                {sponsors.sponsorLogos?.[0] &&
                  sponsors.sponsorLogos.map((sponsorLogo) => (
                    <SponsorImage
                      key={sponsorLogo._key}
                      alt={sponsorLogo.alt}
                      src={urlForSized(sponsorLogo.asset, 80)}
                    />
                  ))}
              </SponsorsGrid>
            </SponsorsFeature>
          )}
        </TextPanel>
        <ImagePanel>
          {imageGallery && imageGallery.length && <CollageGallery galleryImages={imageGallery} />}
        </ImagePanel>
      </HeroGrid>
    </ContentContainer>
  );
};
