import { ChunkyUnderline, Rule } from '@components/ui';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { simplePortableText } from 'lib/sanity';
import type { SectionTitle as SectionTitleProps } from 'lib/sanity/types';

const RuledTitleWrapper = styled.div<{ isCentered: boolean }>`
  ${({ isCentered }) =>
    isCentered &&
    `
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
  `}
`;

const StyledSectionTitle = styled.div<{ isCentered: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 70ch;
  padding-bottom: ${({ theme }) => theme.spacing(8)};
  align-items: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};

  ${({ isCentered }) =>
    isCentered &&
    `
    margin: auto;
    & * {
      text-align: center;
      }
  `}
`;

type SectionTitleExtendedProps = {
  chunkyUnderline?: boolean;
} & SectionTitleProps;

export const SectionTitle = ({
  title,
  subtitle,
  description,
  isCentered = false,
  chunkyUnderline = true,
}: SectionTitleExtendedProps) => {
  const alignment = isCentered ? 'center' : 'left';

  return (
    <StyledSectionTitle isCentered={isCentered}>
      {chunkyUnderline ? (
        <Typography align={alignment} component='h1' variant='h4'>
          <ChunkyUnderline>{title}</ChunkyUnderline>
        </Typography>
      ) : (
        <RuledTitleWrapper isCentered={isCentered}>
          <Typography align={alignment} component='h1' variant='h4'>
            {title}
          </Typography>
          <Rule />
        </RuledTitleWrapper>
      )}

      {subtitle && (
        <Typography align={alignment} component='h1' marginTop={3} variant='h6'>
          {subtitle}
        </Typography>
      )}
      {description && simplePortableText(description)}
    </StyledSectionTitle>
  );
};
