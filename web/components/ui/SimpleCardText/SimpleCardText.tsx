import { CtaButton } from '@components/ui';
import styled from '@emotion/styled';
import { Grid, Typography } from '@material-ui/core';
import type { CardText as CardTextProps } from 'lib/sanity/types';

const StyledRule = styled.hr`
  width: 2em;
  border: 2px solid ${({ theme }) => theme.palette.brandPurple.main};
  margin-left: 0;
`;

export const SimpleCardText = ({ title, summary, cta }: CardTextProps) => (
  <Grid container spacing={4}>
    <Grid item xs={12}>
      <Typography component='h2' variant='h6'>
        {title}
      </Typography>
    </Grid>
    {summary && (
      <Grid item xs={12}>
        <StyledRule />
        <Typography variant='body1'>{summary}</Typography>
      </Grid>
    )}
    {cta && (
      <Grid item xs={12}>
        <CtaButton {...cta} />
      </Grid>
    )}
  </Grid>
);
