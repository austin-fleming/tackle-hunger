import React from 'react';
import { ContentContainer, SectionContainer } from '@components/layouts';
import { SectionTitle } from '@components/ui';
import styled from '@emotion/styled';
import MuiAccordion, { AccordionProps } from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import { simplePortableText } from 'lib/sanity';
import type { AccordionList as AccordionListProps } from 'lib/sanity/types';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters square elevation={3} {...props} />
))(({ theme }) => ({
  '&.Mui-expanded': {
    border: `2px solid ${theme.palette.brandPurple.main}`,
    boxShadow: theme.shadows[5],
  },
  '&:before': {
    display: 'none',
  },
  border: `2px solid transparent`,
  borderRadius: theme.spacing(1.5),
  boxSizing: 'border-box',
  marginBottom: theme.spacing(2),
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.brandPurple.main,
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '&.Mui-expanded': {
    color: 'gray',
  },
  flexDirection: 'row-reverse',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: `0 ${theme.spacing(2)}`,
}));

export const AccordionList = ({ sectionTitle, items }: AccordionListProps) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel0');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <SectionContainer>
      <ContentContainer>
        <SectionTitle {...sectionTitle} />
        <div>
          {items.map((item, index) => (
            <Accordion
              key={item.previewText}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}>
              <AccordionSummary
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}>
                <Typography variant='body1'>{item.previewText}</Typography>
              </AccordionSummary>
              <AccordionDetails>{simplePortableText(item.content)}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};
