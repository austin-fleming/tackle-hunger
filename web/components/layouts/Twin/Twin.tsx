import Grid from '@material-ui/core/Grid';

export const Twin = ({
  leftPane,
  rightPane,
  isFlipped = false,
  isHero = false,
}: {
  isFlipped?: boolean;
  isHero?: boolean;
  leftPane: any;
  rightPane: any;
}) => (
  <Grid container spacing={4}>
    <Grid key='leftPane' item md={6} xs={12}>
      {isFlipped ? rightPane : leftPane}
    </Grid>
    <Grid key='rightPane' item md={6} xs={12}>
      {isFlipped ? leftPane : rightPane}
    </Grid>
  </Grid>
);
