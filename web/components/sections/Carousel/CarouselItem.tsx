import React from 'react';
import { CarouselCard, CarouselHeading } from '@components/sections/Carousel';
import { CtaButton } from '@components/ui';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { urlFor } from 'config/sanity';
import { simplePortableText } from 'lib/sanity/portableText';
import { CarouselItem as CarouselItemProps } from 'lib/sanity/types';

const LayoutGrid = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SlideLayoutGrid = styled.div`
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
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;

  padding: ${({ theme }) => theme.spacing(4)};

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(1)};
  }

  padding-bottom: 10rem;
`;

const EmptyPane = styled.div`
  width: 100%;
`;

const ImageBackground = styled.div<{
  img: string;
}>`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
`;

const ForegroundImage = styled.div<{
  img: string;
}>`
  width: 55%;
  height: 40%;
  padding: 0;
  margin-bottom: 1.5rem;
  background-image: url(${(props) => props.img});
  background-position: left bottom;
  background-size: contain;
  background-repeat: no-repeat;
  top: 0;
`;

const CtaWrapper = styled.div`
  width: auto;
  height: auto;
  margin-top: 2.5rem;
  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(0)};
    width: 30ch;
  }

  & p {
    font-size: 0.8em;
    line-height: 1.3;
  }
`;

const CtaTypography = styled(Typography)`
  margin: 0;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.235;
  letter-spacing: 0.01em;
  text-align: left;
  color: white;
  text-shadow: -2px 4px 4px #000000;
  margin-bottom: 1rem;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(45deg, rgba(235, 96, 42, 1) 0%, rgba(235, 96, 42, 0) 70%);
`;

export const CarouselItem = ({
  title,
  mapDescription,
  cta,
  ctaSubtext,
  backgroundImage,
  foregroundImage,
}: CarouselItemProps) => (
  <LayoutGrid>
    {backgroundImage && backgroundImage.asset && <ImageBackground img={urlFor(backgroundImage)} />}

    <BackgroundOverlay />

    <CarouselCard>
      <SlideLayoutGrid>
        <TextPane>
          {foregroundImage && foregroundImage.asset && (
            <ForegroundImage img={urlFor(foregroundImage)} />
          )}

          {title && <CarouselHeading align='left' mobileAlign='left' rule={false} title={title} />}

          {mapDescription && <CtaTypography variant='body1'>{mapDescription}</CtaTypography>}
          <CtaWrapper>
            {cta && <CtaButton {...cta} />}
            {ctaSubtext && simplePortableText(ctaSubtext)}
          </CtaWrapper>
        </TextPane>
        <EmptyPane />
      </SlideLayoutGrid>
    </CarouselCard>
  </LayoutGrid>
);
