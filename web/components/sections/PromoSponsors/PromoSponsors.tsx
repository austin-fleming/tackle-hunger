import { ContentContainer, SectionContainer } from '@components/layouts';
import { AspectImage, InfoCard, SectionTitle } from '@components/ui';
import { Grid } from '@material-ui/core';
import type { PromoSponsors as PromoSponsorsProps } from 'lib/sanity/types';

export const PromoSponsors = ({ textBlock, sponsorGroup }: PromoSponsorsProps) =>
  sponsorGroup.sponsors ? (
    <SectionContainer>
      <ContentContainer>
        <SectionTitle {...textBlock} />
        <InfoCard>
          <Grid container spacing={3}>
            {sponsorGroup.sponsors.map((sponsor) => (
              <Grid key={sponsor.title} item lg={2} md={3} sm={4} xs={6}>
                <AspectImage
                  aspectRatio={1}
                  imageData={sponsor.image}
                  objectFit='contain'
                  sizes={{ lg: 16, md: 25, sm: 33, xl: 10, xs: 50 }}
                />
              </Grid>
            ))}
          </Grid>
        </InfoCard>
      </ContentContainer>
    </SectionContainer>
  ) : null;
