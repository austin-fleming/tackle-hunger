import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { ThinUnderline } from '@components/ui';
import { activateDonationWidget } from 'lib/domActions';

const EmbedHTML = ({ node }) =>
  // eslint-disable-next-line react/no-danger
  node?.html ? <div dangerouslySetInnerHTML={{ __html: node.html }} /> : null;

const Bold = ({ children }) => <span style={{ fontWeight: 700 }}>{children}</span>;

const Color = ({ mark, children }) => <span style={{ color: mark.hex }}>{children}</span>;

const FontWeight500 = ({ children }) => <span style={{ fontWeight: 500 }}>{children}</span>;

const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;
  pointer-events: all;
  &:hover {
    color: ${({ theme }) => theme.palette.brandPurple.main};
  }
`;

const serializers = {
  marks: {
    bold: Bold,
    color: Color,
    wt500: FontWeight500,
    link: ({ mark, children }) => {
      if (mark?.donationWidget) {
        return (
          <ThinUnderline role='button' onClickAction={activateDonationWidget}>
            {children}
          </ThinUnderline>
        );
      }

      if (mark?.download?.url) {
        return (
          <ThinUnderline>
            <NextLink href={mark.download.url} passHref>
              <StyledAnchor target='_blank'>{children}</StyledAnchor>
            </NextLink>
          </ThinUnderline>
        );
      }

      if (mark?.internalLink?.slug?.current) {
        return (
          <ThinUnderline>
            <NextLink href={`/${mark.internalLink.slug.current}`} passHref>
              <StyledAnchor>{children}</StyledAnchor>
            </NextLink>
          </ThinUnderline>
        );
      }

      if (mark?.urlLink?.href) {
        return (
          <ThinUnderline>
            <NextLink href={mark?.urlLink?.href} passHref>
              <StyledAnchor target='_blank'>{children}</StyledAnchor>
            </NextLink>
          </ThinUnderline>
        );
      }

      return <ThinUnderline disable>{children}</ThinUnderline>;
    },
  },
  types: {
    embedHTML: EmbedHTML,
  },
};

export const simplePortableText = (blocks) => (
  <BlockContent blocks={blocks} serializers={serializers} />
);
