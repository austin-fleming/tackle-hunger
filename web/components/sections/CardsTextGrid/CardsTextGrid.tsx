import { ContentContainer, SectionContainer } from '@components/layouts';
import { InfoCard, SectionTitle, SimpleCardText, TextCard } from '@components/ui';
import { Grid } from '@material-ui/core';
import { CardsTextGrid as CardsTextGridProps } from 'lib/sanity/types';

/* export const CardsTextGrid = ({ sectionTitle, cards }: CardsTextGridProps) => (
  <SectionContainer>
    <ContentContainer>
      <SectionTitle {...sectionTitle} />
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid key={card.title} item md={4} sm={6} xs={12}>
            <InfoCard cover outline='none'>
              <SimpleCardText {...card} />
            </InfoCard>
          </Grid>
        ))}
      </Grid>
    </ContentContainer>
  </SectionContainer>
); */

export const CardsTextGrid = ({ sectionTitle, cards }: CardsTextGridProps) => (
  <SectionContainer>
    <ContentContainer>
      <SectionTitle {...sectionTitle} />
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid key={card.title} item md={4} sm={6} xs={12}>
            <TextCard {...card} />
          </Grid>
        ))}
      </Grid>
    </ContentContainer>
  </SectionContainer>
);
