/* eslint react/no-multi-comp: 0 */
import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Divider, Menu, MenuItem } from '@material-ui/core';
import { SiteConfigSingleton as SiteConfigSingletonProps } from 'lib/sanity/types';
import { MenuButton } from './MenuButton';

const StyledMenuSection = styled.div`
  height: 100%;
  width: auto;
  position: relative;
  z-index: 1300;
`;

export const MenuSection = ({
  navGroup,
}: {
  navGroup: SiteConfigSingletonProps['mainNavigation'][number];
}) => {
  const { spacing } = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const hasSubmenu = !!(
    navGroup.secondaryNavigationItems && navGroup.secondaryNavigationItems.length > 0
  );

  return (
    <StyledMenuSection key={navGroup.primaryNavigationItem.label}>
      <MenuButton buttonAction={hasSubmenu && handleClick} {...navGroup.primaryNavigationItem} />
      {hasSubmenu && (
        <Menu
          key={`${navGroup.primaryNavigationItem.label}menu`}
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          style={{
            left: spacing(0),
            maxWidth: '100%',
            top: spacing(7),
            width: '100%',
          }}
          onClose={handleClose}>
          <MenuItem key={navGroup.primaryNavigationItem.label} style={{ paddingLeft: spacing(0) }}>
            <MenuButton {...navGroup.primaryNavigationItem} />
          </MenuItem>
          <Divider />
          {navGroup.secondaryNavigationItems!.map((navItem) => (
            <MenuItem
              key={navItem.label}
              style={{ padding: `${spacing(1)} ${spacing(3)} ${spacing(1)} ${spacing(0)}` }}
              onClick={handleClose}>
              <MenuButton {...navItem} />
            </MenuItem>
          ))}
        </Menu>
      )}
    </StyledMenuSection>
  );
};

const StyledNavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const DesktopNavbar = ({
  navGroups,
}: {
  navGroups: SiteConfigSingletonProps['mainNavigation'];
}) => (
  <StyledNavbarWrapper>
    {navGroups.map((navGroup) => (
      <MenuSection key={navGroup.primaryNavigationItem.label} navGroup={navGroup} />
    ))}
  </StyledNavbarWrapper>
);
