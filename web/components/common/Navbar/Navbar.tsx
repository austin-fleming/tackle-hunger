// https://www.creative-tim.com/learning-lab/material-ui/navbar/argon-dashboard#
import React, { useState } from 'react';
import { BackToTop, NotificationRail } from '@components/common';
import { ContentContainer } from '@components/layouts';
import { urlForSized } from '@config/sanity';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  AppBar,
  Divider,
  Drawer,
  Fab,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
} from '@material-ui/core';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Close as CloseIcon, KeyboardArrowUp, Menu as MenuIcon } from '@material-ui/icons';
import { getImageDimensions } from 'lib/sanity/assets';
import { SiteConfigSingleton as SiteConfigSingletonProps } from 'lib/sanity/types';
import { newDimensionsByHeight } from 'lib/utils/images';
import NextLink from 'next/link';
import { DesktopNavbar } from './DesktopNavbar';
import { MenuButton } from './MenuButton';

const StyledHeaderWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  z-index: 1200;
`;

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: '100%',
  },
  drawerButtonWrapper: {
    height: `${theme.appBarHeight}px`,
  },
  fullList: {
    paddingBottom: '80px',
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
    position: 'static',
    width: '100%',
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledMobileMenuList = withStyles({
  root: {
    paddingBottom: '80px',
  },
})(MenuList);

const StyledPrimaryMenuItem = styled(MenuItem)`
  && {
    background-color: ${({ theme }) => theme.palette.brandPurple.pale};
  }
`;

const StyledNavGroupWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const StyledSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  padding-bottom: ${({ theme }) => theme.spacing(2)};

  * {
    word-wrap: normal;
  }
`;

const StyledLogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledBrandWrapper = styled.a<{ height: number; width: number }>`
  display: block;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
`;

const StyledToolbarContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;

  padding-top: ${({ theme }) => theme.spacing(1)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const Navbar = ({ mainNavigation, logo, notificationBanner }: SiteConfigSingletonProps) => {
  const { breakpoints } = useTheme();
  const [isMdUp, setIsMdUp] = useState(false);
  const classes = useStyles();
  const brandHeight = 60;
  const origLogoDims = logo && getImageDimensions(logo.asset);
  const newLogoDims =
    origLogoDims && newDimensionsByHeight(origLogoDims.width, origLogoDims.height, brandHeight);

  React.useEffect(() => {
    const resizeMenu = () => {
      setIsMdUp(breakpoints.values.md < window.innerWidth);
    };

    resizeMenu();
    window.addEventListener('resize', resizeMenu);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <StyledHeaderWrapper>
      <NotificationRail {...notificationBanner} />

      <div>
        <AppBar position='static'>
          <ContentContainer>
            <Toolbar disableGutters id='back-to-top-anchor'>
              <StyledToolbarContent>
                <NextLink passHref href='/'>
                  <StyledBrandWrapper
                    height={newLogoDims?.height || brandHeight}
                    width={newLogoDims?.width || brandHeight}>
                    {logo?.asset && (
                      <StyledLogoImage
                        alt={logo.alt}
                        src={urlForSized(logo.asset, newLogoDims?.width, newLogoDims?.height)}
                      />
                    )}
                  </StyledBrandWrapper>
                </NextLink>

                {isMdUp ? (
                  <DesktopNavbar navGroups={mainNavigation} />
                ) : (
                  <IconButton
                    aria-label='menu'
                    className={classes.menuButton}
                    color='inherit'
                    edge='start'
                    onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                )}
              </StyledToolbarContent>
            </Toolbar>
          </ContentContainer>
        </AppBar>
      </div>

      {!isMdUp && (
        <Drawer
          anchor='right'
          classes={{ paper: classes.drawer }}
          open={isOpen}
          onClose={toggleDrawer(false)}>
          <div
            className={classes.fullList}
            role='presentation'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}>
            <Toolbar className={classes.drawerButtonWrapper}>
              <IconButton
                aria-label='menu'
                className={classes.menuButton}
                color='inherit'
                edge='start'
                onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Toolbar>

            <StyledMobileMenuList>
              {mainNavigation &&
                mainNavigation.map((navGroup) => (
                  <StyledNavGroupWrapper key={navGroup.primaryNavigationItem.label}>
                    <Divider />
                    <StyledPrimaryMenuItem key='primary'>
                      <MenuButton {...navGroup.primaryNavigationItem} />
                    </StyledPrimaryMenuItem>
                    <Divider />
                    {navGroup.secondaryNavigationItems && (
                      <StyledSubMenu>
                        {navGroup.secondaryNavigationItems.map((item) => (
                          <MenuItem key={item.label}>
                            <MenuButton noWrap {...item} />
                          </MenuItem>
                        ))}
                      </StyledSubMenu>
                    )}
                  </StyledNavGroupWrapper>
                ))}
            </StyledMobileMenuList>
          </div>
        </Drawer>
      )}

      <BackToTop>
        <Fab aria-label='scroll back to top' color='primary' size='large'>
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </StyledHeaderWrapper>
  );
};
