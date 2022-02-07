import React, { useState } from 'react';
import { SanitySponsorship } from '@components/common';
import { ContentContainer } from '@components/layouts';
import { AspectImage, CtaButton } from '@components/ui';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Grid, Typography } from '@material-ui/core';
import { urlForSized } from 'config/sanity';
import {
  CtaButton as CtaButtonProps,
  SiteConfigSingleton as SiteConfigProps,
} from 'lib/sanity/types';
import { CopyrightWrapper, FooterContainer } from './Footer.styled';

const StyledBrandWrapper = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;

const StyledSocialLink = styled.a<{ isMdUp: boolean }>`
  ${({ isMdUp }) => isMdUp || `margin-bottom: 30px;`}
  &:hover, &:active {
    margin-top: -10px;
    transition: margin-top 0.25s ease;
  }
`;

// eslint-disable-next-line react/no-multi-comp
export const Footer = ({ logo, defaultFooter }: SiteConfigProps) => {
  const { footerNavigation, locations, socialMediaLinks } = defaultFooter;
  const { breakpoints } = useTheme();

  const [isMdUp, setIsMdUp] = useState(false);
  React.useEffect(() => {
    const resizeMenu = () => {
      setIsMdUp(breakpoints.values.md < window.innerWidth);
    };

    resizeMenu();
    window.addEventListener('resize', resizeMenu);
  }, []);

  const navItemColumns = 3;
  const navItemsPerColumn = Math.ceil(footerNavigation.length / navItemColumns);

  const navItemGroups: Array<CtaButtonProps[]> = footerNavigation.reduce<CtaButtonProps[][]>(
    (acc, _, curIndex) =>
      curIndex % navItemsPerColumn
        ? acc
        : [...acc, footerNavigation.slice(curIndex, curIndex + navItemsPerColumn)],
    []
  );

  return (
    <FooterContainer>
      <ContentContainer key='footercontainer'>
        <Grid
          container
          alignItems={isMdUp ? 'start' : 'center'}
          direction={isMdUp ? 'row' : 'column'}
          justifyContent={isMdUp ? 'start' : 'center'}
          spacing={0}>
          {/* Brand */}
          <Grid item md={3} xs='auto'>
            <StyledBrandWrapper>
              <AspectImage
                imageData={logo}
                objectFit='contain'
                sizes={{ lg: 100, md: 100, sm: 100, xl: 100, xs: 100 }}
              />
            </StyledBrandWrapper>
          </Grid>

          {/* Pages */}
          {navItemGroups && (
            <Grid
              container
              item
              alignItems={isMdUp ? 'start' : 'center'}
              direction={isMdUp ? 'row' : 'column'}
              justifyContent={isMdUp ? 'start' : 'center'}
              md={9}
              xs='auto'>
              {navItemGroups.map((navGroup) => (
                <Grid
                  key={navGroup[0].label}
                  container
                  item
                  alignItems={isMdUp ? 'start' : 'center'}
                  direction='column'
                  justifyContent={isMdUp ? 'start' : 'center'}
                  md={4}
                  spacing={0}
                  xs={12}>
                  {navGroup.map((navItem) => (
                    <Grid key={navItem.label} item xs='auto'>
                      <CtaButton {...navItem} />
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Grid>
          )}

          {/* Locations */}
          {locations && (
            <Grid
              container
              item
              alignItems={isMdUp ? 'start' : 'center'}
              direction={isMdUp ? 'row' : 'column'}
              justifyContent={isMdUp ? 'start' : 'center'}
              marginTop={4}
              spacing={4}
              xs='auto'>
              {locations.map((location) => (
                <Grid key={location.locationName} item md={3} xs='auto'>
                  <Typography textAlign={isMdUp ? 'left' : 'center'} variant='h6'>
                    {location.locationName}
                  </Typography>
                  {location.addressLine1 && (
                    <Typography textAlign={isMdUp ? 'left' : 'center'}>
                      {location.addressLine1}
                    </Typography>
                  )}
                  {location.addressLine2 && (
                    <Typography textAlign={isMdUp ? 'left' : 'center'}>
                      {location.addressLine2}
                    </Typography>
                  )}
                  {location.cityStateZip && (
                    <Typography textAlign={isMdUp ? 'left' : 'center'}>
                      {location.cityStateZip}
                    </Typography>
                  )}
                </Grid>
              ))}
            </Grid>
          )}

          {socialMediaLinks && (
            <Grid
              container
              item
              alignItems='center'
              direction='row'
              justifyContent={isMdUp ? 'start' : 'center'}
              marginTop={6}
              xs={12}>
              {socialMediaLinks.map((socialLink) => (
                <Grid
                  key={socialLink.platformTitle}
                  container
                  item
                  justifyContent='center'
                  lg={1}
                  md={2}
                  xs={4}>
                  <StyledSocialLink href={socialLink.linkUrl} isMdUp={isMdUp}>
                    <img alt={socialLink.icon.alt} src={urlForSized(socialLink.icon.asset, 40)} />
                  </StyledSocialLink>
                </Grid>
              ))}
            </Grid>
          )}

          <Grid item marginTop={4} xs={12}>
            <CopyrightWrapper>
              <SanitySponsorship />
              <Typography variant='body2'>Copyright 1990-2021 Souper Bowl of Caring</Typography>
            </CopyrightWrapper>
          </Grid>
        </Grid>
      </ContentContainer>
    </FooterContainer>
  );
};
