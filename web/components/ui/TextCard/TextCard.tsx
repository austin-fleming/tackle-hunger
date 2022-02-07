import { CtaButton, InfoCard } from '@components/ui';
import styled from '@emotion/styled';
import { CardActions, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import type { CardText as CardTextProps } from 'lib/sanity/types';

/* const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
}); */

const Card = styled.article`
  border-radius: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(3)};
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme.shadows[3]};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  row-wrap: wrap;
  width: 100%;
  align-items: space-between;
  justify-content: space-between;

  padding-top: ${({ theme }) => theme.spacing(3)};
`;

const StyledTitle = styled.div`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(3)};
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CardBody = styled.div`
  width: 100%;
`;

const StyledRule = styled.hr`
  width: 2em;
  border: 2px solid ${({ theme }) => theme.palette.brandPurple.main};
  margin-left: 0;
`;

export const TextCard = ({ title, summary, cta }: CardTextProps) => (
  <Card>
    <CardBody>
      {title && (
        <StyledTitle key='title'>
          <Typography component='h2' variant='h6'>
            {title}
          </Typography>
        </StyledTitle>
      )}
      <StyledContent key='content'>
        <StyledRule />
        <Typography variant='body1'>{summary}</Typography>
      </StyledContent>
    </CardBody>
    {cta && (
      <StyledActions>
        <CtaButton {...cta} />
      </StyledActions>
    )}
  </Card>
);
