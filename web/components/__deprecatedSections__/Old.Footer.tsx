import React from 'react';
import { useTheme } from '@emotion/react';
import { Button, Typography } from '@material-ui/core';
import { urlForSized } from 'config/sanity';
import { getImageDimensions } from 'lib/sanity/assets';
import { newDimensionsByHeight } from 'lib/utils/images';
import Link from 'next/link';
import {
  NavigationItem as NavigationItemProps,
  Page as PageProps,
  SiteConfigSingleton as SiteConfigSingletonProps,
} from 'types/generated/schema';
import { SanitySponsorship } from 'components/common';
import { ContentContainer } from 'components/layouts';
import {
  BrandWrapper,
  CompanyContactInfo,
  ContactBlock,
  CopyrightWrapper,
  FooterContainer,
  FooterGrid,
  LinkItem,
  LinkList,
  NavBlock,
  PagesBlock,
} from './Footer.styled';

type ExpandedNavigationItemProps = {
  page: PageProps;
} & NavigationItemProps;
// TODO: merge this component and it's sister in header into a button component
const FooterNavigationItem = ({ text, isButton, page, link }: ExpandedNavigationItemProps) => {
  const { palette } = useTheme();

  const styleText = {
    color: palette.text.secondary,
    height: 'auto',
    margin: `0 0 0 0`,
    padding: '0 0 0 0',
    width: 'auto',
  };
  const styleButton = { height: 'auto', margin: `0 0 0 0`, width: 'auto' };

  return page && page.slug?.current ? (
    <Link
      passHref
      as={`/${page?.slug?.current}`}
      href={{
        pathname: '/LandingPage',
        query: { slug: page?.slug?.current },
      }}>
      <Button
        key={text}
        size='small'
        style={isButton ? styleButton : styleText}
        variant={isButton ? 'outlined' : 'text'}>
        {text}
      </Button>
    </Link>
  ) : (
    <Link passHref href={link}>
      <Button
        key={text}
        size='small'
        style={isButton ? styleButton : styleText}
        variant={isButton ? 'outlined' : 'text'}>
        {text}
      </Button>
    </Link>
  );
};

// TODO: code split
// eslint-disable-next-line react/no-multi-comp
export const Footer: React.FC<SiteConfigSingletonProps> = ({
  footerNavigation,
  logo,
  contactDetails,
  locations,
}) => {
  const brandHeight = 80;
  const { isTablet } = useTheme();

  // const { width: logoWidth, height: logoHeight } = getImageDimensions(logo?.asset);
  // const { width, height } = newDimensionsByHeight(logoWidth, logoHeight, brandHeight);

  const numSiteNavSquares = isTablet ? 2 : 3;

  const maxItemsPerSquare = Math.ceil((footerNavigation?.length || 0) / numSiteNavSquares);

  const SiteNavSquares = () => {
    const NavSquares = [];

    if (!footerNavigation?.length) return NavSquares;

    for (let i = 0; i < numSiteNavSquares; i += 1) {
      const sectionEnd = (i + 1) * maxItemsPerSquare;
      NavSquares[i] = (
        <PagesBlock key={`mainpages-${i}`}>
          <LinkList>
            {footerNavigation
              .slice(
                i * maxItemsPerSquare,
                sectionEnd > footerNavigation.length ? footerNavigation.length : sectionEnd
              )
              .map((navItem) => (
                <LinkItem key={navItem._key}>
                  <FooterNavigationItem {...navItem} />
                </LinkItem>
              ))}
          </LinkList>
        </PagesBlock>
      );
    }

    return NavSquares;
  };

  return (
    <FooterContainer>
      <ContentContainer key='footercontainer'>
        <FooterGrid>
          {/* logo */}
          {/* <BrandWrapper height={height} href='/' width={width}>

             <img alt={logo?.alt} src={urlForSized(logo?.asset || '', width, height)} />
          </BrandWrapper> */}
          <NavBlock>
            <SiteNavSquares />
          </NavBlock>
          <ContactBlock>
            <Typography gutterBottom variant='h6'>
              Contact
            </Typography>
            {contactDetails?.map(({ _key, detail }) => (
              <Typography key={_key} gutterBottom>
                {detail}
              </Typography>
            ))}
          </ContactBlock>
          <CompanyContactInfo>
            {locations?.map((location) => (
              <div key={location._key}>
                <Typography variant='h6'>{location.locationName}</Typography>
                {location.addressLine1 && <Typography>{location.addressLine1}</Typography>}
                {location.addressLine2 && <Typography>{location.addressLine2}</Typography>}
                {location.cityStateZip && <Typography>{location.cityStateZip}</Typography>}
              </div>
            ))}
          </CompanyContactInfo>
          <CopyrightWrapper>
            <SanitySponsorship />
            <Typography variant='body2'>Copyright 1990-2021 Souper Bowl of Caring</Typography>
          </CopyrightWrapper>
        </FooterGrid>
      </ContentContainer>
    </FooterContainer>
  );
};
