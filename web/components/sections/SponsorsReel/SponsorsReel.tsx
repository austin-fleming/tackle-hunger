import React, { useEffect, useState } from 'react';
import { SectionCard } from '@components/layouts';
import { AspectImage, CtaButton, SectionHeading } from '@components/ui';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { SponsorsReel as SponsorsReelProps } from 'lib/sanity/types';
import Marquee from 'react-marquee-slider';

/* const TextContainer = styled.div<{
  gapSpacing: number;
  maxChWidth?: number;
  paddingSpacing: number;
}>`
  padding: ${({ theme, paddingSpacing }) => theme.spacing(paddingSpacing)};
  display: grid;
  gap: ${({ theme, gapSpacing }) => theme.spacing(gapSpacing)};
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 0;

  & * {
    ${({ maxChWidth }) => maxChWidth && `max-width: ${maxChWidth}ch;`}
    margin-left: auto;
    margin-right: auto;
  }
`; */

const MarqueeImageWrapper = styled.figure<{ imageSize: number; marginSpacing: number }>`
  position: relative;
  width: ${({ imageSize }) => `${imageSize}px`};
  height: ${({ imageSize }) => `${imageSize}px`};
  margin-right: ${({ theme, marginSpacing }) => theme.spacing(marginSpacing)};
`;

/* const MarqueeImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
`; */

const ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    justify-content: center;
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: row;
    flex-wrap: nowrap;

    & > * + * {
      margin-top: 0;
      margin-left: ${({ theme }) => theme.spacing(4)};
    }
  }
`;

const TextWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  width: 100%;
`;

export const SponsorsReel = ({
  title,
  sponsorGroup,
  primaryCta,
  secondaryCta,
}: SponsorsReelProps) => {
  const { isMobile } = useTheme();
  const [tickerImages, setTickerImages] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const sponsorSample = sponsorGroup.sponsors.slice(0, 10);
    const sponsorImages = sponsorSample.map((sponsor) => (
      <AspectImage
        key={sponsor.title}
        aspectRatio={1}
        imageData={sponsor.image}
        objectFit='contain'
        overlay='none'
        sizes={{ lg: 16, md: 25, sm: 33, xl: 14, xs: 33 }}
      />
    ));
    setTickerImages(sponsorImages);
  }, []);

  return (
    <SectionCard>
      {title && (
        <TextWrapper key='title'>
          <SectionHeading mobileAlign='left' title='Our Sponsors' />
        </TextWrapper>
      )}
      {tickerImages && tickerImages[0] && (
        <Marquee
          direction='rtl'
          resetAfterTries={100}
          scatterRandomly={false}
          velocity={40}
          onFinish={() => {}}
          onInit={() => {}}>
          {tickerImages.map(
            (Image) =>
              Image && (
                <MarqueeImageWrapper imageSize={isMobile ? 120 : 200} marginSpacing={2}>
                  {Image}
                </MarqueeImageWrapper>
              )
          )}
        </Marquee>
      )}
      {(primaryCta || secondaryCta) && (
        <TextWrapper key='ctas'>
          <ButtonLayout>
            {primaryCta && <CtaButton key={primaryCta.label} {...primaryCta} />}
            {secondaryCta && <CtaButton key={secondaryCta.label} {...secondaryCta} />}
          </ButtonLayout>
        </TextWrapper>
      )}
    </SectionCard>
  );
};
