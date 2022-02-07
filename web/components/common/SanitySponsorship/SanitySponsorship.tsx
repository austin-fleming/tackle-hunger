import React from 'react';
import styled from '@emotion/styled';

const LinkWrapper = styled.a`
  display: block;
  margin: ${({ theme }) => `${theme.spacing(2)} 0`};
  text-decoration: none;
  color: black;
`;
const SponsorshipWrapper = styled.figure`
  width: auto;
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    align-items: flex-start;
  }
`;

const CaptionText = styled.figcaption`
  font-size: 0.75rem;
  padding-bottom: 0.5em;
`;

export const SanitySponsorship = () => (
  <LinkWrapper href='https://www.sanity.io/'>
    <SponsorshipWrapper>
      <CaptionText>Structured content powered by</CaptionText>
      <img alt='Sanity.io logo' height='39px' src='/sanity-sponsorship-353x71.svg' />
    </SponsorshipWrapper>
  </LinkWrapper>
);
