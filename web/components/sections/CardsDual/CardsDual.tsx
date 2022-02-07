import React from 'react';
import { ContentContainer, SectionContainer } from '@components/layouts';
import { AspectImage, InfoCard, Rule, SectionTitle } from '@components/ui';
import styled from '@emotion/styled';
import { Grid, Typography } from '@material-ui/core';
import { simplePortableText } from 'lib/sanity';
import type { CardsDual as CardsDualProps } from 'lib/sanity/types';

const StyledImageWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const CardsDual = ({ sectionTitle, cards }: CardsDualProps) => (
  <SectionContainer>
    <ContentContainer>
      <SectionTitle {...sectionTitle} />
      {cards && (
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid key={card._key} item md={6} xs={12}>
              <InfoCard cover outline='thin'>
                {card?.simpleImage?.asset && (
                  <StyledImageWrapper>
                    <AspectImage
                      aspectRatio={1.75}
                      imageData={card.simpleImage}
                      sizes={{ lg: 50, md: 50, sm: 100, xl: 40, xs: 100 }}
                    />
                  </StyledImageWrapper>
                )}
                {card?.simpleCardText?.title && (
                  <React.Fragment>
                    <Typography key='title' component='h2' variant='h5'>
                      {card?.simpleCardText?.title}
                    </Typography>
                    <Rule align='left' color='secondary' topSpacing={3} />
                  </React.Fragment>
                )}
                {card?.simpleCardText?.summary && (
                  <div key='body'>{simplePortableText(card?.simpleCardText?.summary)}</div>
                )}
              </InfoCard>
            </Grid>
          ))}
        </Grid>
      )}
    </ContentContainer>
  </SectionContainer>
);
