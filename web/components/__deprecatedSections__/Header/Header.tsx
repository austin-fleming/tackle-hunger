import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image';
import { getImageDimensions } from 'lib/sanity/assets';

import { SimpleImage, NavigationItem } from 'types/generated/schema';
import { newDimensionsByHeight } from 'lib/utils/images';
import { urlForSized } from '@config/sanity';

import { ContentContainer } from 'components/layouts';
import { TextButton, SecondaryButton } from 'components/ui';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { NotificationRail } from 'components/common';

import useMediaQuery from '@material-ui/core/useMediaQuery';

// styled components
const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0;
  margin: 0;
  height: auto;
`;

const HeaderContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-end;
`;

const BrandWrapper = styled.a<{ height: number; width: number }>`
  display: block;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
`;

const MenuWrapper = styled.nav`
  height: auto;
  padding: ${({ theme }) => `0 0 ${theme.spacing(0.5)} 0`};
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

// props
// TODO: Define in single location
type NavigationItemSetProps = {
  primaryNavigationItem: NavigationItem;
  secondaryNavigationItems?: NavigationItem[];
};

type NotificationBarProps = {
  isActive?: boolean;
  destinationUrl?: string;
  message?: string;
  headline?: string;
};

type HeaderProps = {
  logo: SimpleImage;
  navItems: NavigationItemSetProps[];
  notificationRail: NotificationBarProps;
};

export const Header: React.FC<HeaderProps> = ({ logo, navItems, notificationRail }) => {
  const theme = useTheme();
  const { breakpoints } = useTheme();
  const [isMdUp, setIsMdUp] = useState(false);

  React.useEffect(() => {
    const resizeMenu = () => {
      setIsMdUp(breakpoints.values.md < window.innerWidth);
    };

    // TODO: Handle resize trigger more elegantly
    window.addEventListener('resize', resizeMenu);
  });

  const brandHeight = 60;

  const { width: logoWidth, height: logoHeight } = getImageDimensions(logo.asset);
  const { width, height } = newDimensionsByHeight(logoWidth, logoHeight, brandHeight);

  const headerNavItems =
    navItems &&
    navItems.filter(
      (navSet) => navSet.primaryNavigationItem && navSet.primaryNavigationItem.showInHeader
    );

  const textNavItems =
    headerNavItems && headerNavItems.filter((navGroup) => !navGroup.primaryNavigationItem.isButton);
  const buttonNavItems =
    headerNavItems && headerNavItems.filter((navGroup) => navGroup.primaryNavigationItem.isButton);

  return (
    <div>
      <NotificationRail {...notificationRail} />
      <AppBar style={{ paddingTop: theme.spacing(1.5), paddingBottom: theme.spacing(1.5) }}>
        <ContentContainer>
          <HeaderContent>
            <BrandWrapper width={width} height={height}>
              {logo?.asset && (
                <LogoImage src={urlForSized(logo.asset, width, height)} alt={logo.alt} />
              )}
            </BrandWrapper>

            <MenuWrapper>
              {isMdUp ? (
                <DesktopMenu textNavItems={textNavItems} buttonNavItems={buttonNavItems} />
              ) : (
                <MobileMenu textNavItems={textNavItems} buttonNavItems={buttonNavItems} />
              )}
            </MenuWrapper>
          </HeaderContent>
        </ContentContainer>
      </AppBar>
    </div>
  );
};
