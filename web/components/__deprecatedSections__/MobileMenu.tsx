
import React from 'react'
import styled from '@emotion/styled'
import { css, useTheme } from '@emotion/react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image'
import { getImageDimensions } from 'lib/sanity/assets'
import { Logo } from './Logo'

import { SimpleImage, NavigationItem } from 'types/generated/schema'
import { newDimensionsByHeight } from 'lib/utils/images'
import { urlFor } from '@config/sanity';

import { ContentContainer } from 'components/layouts'
import { TextButton, SecondaryButton } from 'components/ui'
import { NavGroup } from './NavGroup'

//
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// styled components

// props
type NavigationItemSet = {
  primaryNavigationItem: NavigationItem,
  secondaryNavigationItems?: NavigationItem[]
}

type DesktopMenuProps = {
  textNavItems: NavigationItemSet[],
  buttonNavItems?: NavigationItemSet[]
}

export const MobileMenu: React.FC<DesktopMenuProps> = ({ textNavItems, buttonNavItems }) => {
  return (
    <div>
      {/* {textNavItems && textNavItems.map(navGroup => <NavGroup {...navGroup} />)}
    {buttonNavItems && buttonNavItems.map(navGroup => <NavGroup {...navGroup} />)} */}
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {List(anchor)}
      </Drawer>
    </div>
  )
}
