import { ContentContainer, SectionContainer } from '@components/layouts';
import { ImageCard, InfoCard, InfoText } from '@components/ui';
import styled from '@emotion/styled';
import type { TwinOverlappedCards as TwinOverlappedCardsProps } from 'lib/sanity/types';

const TextPane = styled.div<{ isFlipped: boolean }>`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(-6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
  grid-column: 1/-1;

  padding-left: ${({ theme }) => theme.spacing(6)};

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    grid-row-start: 1;
    margin-top: 0;
    padding-top: ${({ theme }) => theme.spacing(6)};
    grid-column: ${({ isFlipped }) => (isFlipped ? `15/-1` : `1/18`)};
    padding-left: 0;
  }
`;

const ImagePane = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  grid-column: 1/-1;
  padding-right: ${({ theme }) => theme.spacing(6)};

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    grid-row-start: 1;
    grid-column: ${({ isFlipped }) => (isFlipped ? `1/18` : `15/-1`)};
    padding-right: 0;
  }
`;

const Content = styled.div<{ asHero: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: auto;
  ${({ asHero }) => asHero && `min-height: 600px;`};
`;

export const TwinOverlappedCards = ({
  isFlipped,
  textBlock,
  image,
  asHero = false,
}: TwinOverlappedCardsProps) => (
  <SectionContainer>
    <ContentContainer>
      <Content asHero={asHero}>
        <ImagePane isFlipped={!!isFlipped}>
          <ImageCard
            aspectRatio={1}
            imageData={image}
            sizes={{
              lg: 50,
              md: 50,
              sm: 100,
              xl: 40,
              xs: 100,
            }}
          />
        </ImagePane>
        <TextPane isFlipped={!!isFlipped}>
          <InfoCard elevation='high'>
            <InfoText {...textBlock} />
          </InfoCard>
        </TextPane>
      </Content>
    </ContentContainer>
  </SectionContainer>
);
