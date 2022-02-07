import { ContentContainer, SectionContainer } from '@components/layouts';
import { ImageCard, SectionTitle } from '@components/ui';
import styled from '@emotion/styled';
import Grid from '@material-ui/core/Grid';
import type { TeamGallery as TeamGalleryProps } from 'lib/sanity/types';
import { TeamMemberCard } from './TeamMemberCard';

const StyledContainer = styled.div<{ displayBackground: boolean }>`
  ${({ theme, displayBackground }) =>
    displayBackground &&
    `
    background-color: ${theme.palette.brandPurple.light};
    border-top: ${theme.borders.primary.md};
    border-bottom: ${theme.borders.primary.md};
  `}

  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const TeamGallery = ({ textBlock, teamImage, team, displayDense }: TeamGalleryProps) => (
  <SectionContainer>
    <StyledContainer displayBackground={!!teamImage?.asset}>
      <ContentContainer>
        {teamImage?.asset ? (
          <Grid key='title grid' container paddingBottom={6} spacing={3}>
            <Grid key='image' item md={6} sm={12}>
              <ImageCard
                imageData={teamImage}
                overlay='none'
                sizes={{ lg: 50, md: 50, sm: 100, xl: 40, xs: 100 }}
              />
            </Grid>
            <Grid key='headline' item md={6} sm={12}>
              <SectionTitle {...textBlock} chunkyUnderline={false} />
            </Grid>
          </Grid>
        ) : (
          <SectionTitle {...textBlock} />
        )}
        <Grid container spacing={3}>
          {team.members.map((member) => (
            <Grid
              key={member.name}
              item
              lg={displayDense ? 2 : 3}
              md={displayDense ? 3 : 6}
              sm={displayDense ? 4 : 6}
              xs={12}>
              <TeamMemberCard {...member} displayDense={displayDense} />
            </Grid>
          ))}
        </Grid>
      </ContentContainer>
    </StyledContainer>
  </SectionContainer>
);
