import { ContentContainer, SectionContainer } from '@components/layouts';
import { ImageCard, InfoText } from '@components/ui';
import styled from '@emotion/styled';
import type { TwinBackgroundBand as TwinBackgroundBandProps } from 'lib/sanity/types';

const BackgroundBand = styled.div`
  width: 100%;
  height: 100%;
  border-top: ${({ theme }) => theme.borders.primary.md};
  border-bottom: ${({ theme }) => theme.borders.primary.md};
  background-color: ${({ theme }) => theme.palette.brandPurple.light};
`;

const BackgroundBandWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
  z-index: -1;
`;

const ImagePane = styled.div`
  width: 100%;
  height: 300px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    width: 100%;
    height: 100%;
    min-height: 500px;
  }
`;

const TextPane = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(6)};

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;

const StyledContent = styled.div<{ isFlipped: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    grid-template-columns: 1fr 1fr;

    div${TextPane} {
      ${({ isFlipped }) => (isFlipped ? `grid-column: 2;` : `grid-column: 1;`)}
      grid-row: 1;
    }
    div${ImagePane} {
      ${({ isFlipped }) => (isFlipped ? `grid-column: 1;` : `grid-column: 2;`)}
      grid-row: 1
    }
  }
`;

export const TwinBackgroundBand = ({
  isFlipped = false,
  textBlock,
  image,
}: TwinBackgroundBandProps) => (
  <SectionContainer>
    <ContentContainer>
      <StyledContent isFlipped={isFlipped}>
        <TextPane>
          <InfoText {...textBlock} padVertical />
        </TextPane>
        <ImagePane>
          <ImageCard
            elevation='low'
            imageData={image}
            overlay='primary'
            sizes={{
              lg: 50,
              md: 50,
              sm: 100,
              xl: 40,
              xs: 100,
            }}
          />
        </ImagePane>
        <BackgroundBandWrapper>
          <BackgroundBand />
        </BackgroundBandWrapper>
      </StyledContent>
    </ContentContainer>
  </SectionContainer>
);
