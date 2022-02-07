import React from 'react';
import { Rule } from '@components/ui';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { urlFor } from 'config/sanity';
import { StatsPromotion as StatsPromotionProps } from 'lib/sanity/types';

const CardImage = styled.img`
  width: 60%;
  height: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImageWrapper = styled.div`
  margin: 0;
  position: relative;
  width: 100%;
  padding-bottom: 80%;
`;

const CardCaption = styled.div`
  width: 100%;

  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Card = styled.figure`
  position: relative;

  width: 100%;
  max-width: 200px;
  height: auto;
  padding: ${({ theme }) => theme.spacing(2)};
  margin: 0;

  overflow: hidden;

  border-radius: ${({ theme }) => theme.spacing(2)};
  box-shadow: ${({ theme }) => theme.shadows[4]};

  background-color: white;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    max-width: 300px;
  }
`;

export const StatsCard = ({ stat, description, icon }: StatsPromotionProps['content'][number]) => {
  const { isMobile } = useTheme();

  return (
    <Card>
      {icon && (
        <ImageWrapper>
          <CardImage alt={icon.alt} src={urlFor(icon.asset)} />
        </ImageWrapper>
      )}
      <CardCaption>
        {stat && (
          <Typography align='center' component='h1' variant={isMobile ? 'h6' : 'h5'}>
            {stat}
          </Typography>
        )}
        {!isMobile && <Rule bottomSpacing={2} topSpacing={2} />}

        {description && (
          <Typography
            align='center'
            color='textSecondary'
            component='h2'
            variant={isMobile ? 'subtitle1' : 'h6'}>
            {description}
          </Typography>
        )}
      </CardCaption>
    </Card>
  );
};
