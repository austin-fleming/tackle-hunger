import React from 'react'
import styled from '@emotion/styled'
import { css, } from '@emotion/react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image'
import { getImageDimensions } from 'lib/sanity/assets'
import { Logo } from './Logo'

import { SimpleImage, } from 'types/generated/schema'
import { newDimensionsByHeight } from 'lib/utils/images'
import { urlFor } from '@config/sanity';

import { ContentContainer } from 'components/layouts'
import { NavGroup } from './NavGroup'

import Link from 'next/link'
import { NavigationItem } from 'types/generated/schema'
import { TextButton, SecondaryButton } from 'components/ui'
import { Button } from '@material-ui/core'
import { useTheme } from '@emotion/react'
import { makeStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// styled components
const Hider = styled.div`
  width: inherit;
  @media (max-width: ${({ theme }) => (theme.breakpoints.values.md)}px) {
    display: none;
    visibility: hidden;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  position: relative
`

const ItemWrapper = styled.div`
  height: 100%;
  width: auto;
  position: relative;

  z-index: 1300;
`

/* const DropDownList = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding-left: 0;
  padding-right: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};

  transition: all 0.3s ease-out;

  background-color: white;
  z-index: 1200;

  & * {
    padding-top: ${({ theme }) => theme.spacing(2)};
  }

  &:hover {
    height: auto;
  }
` */

// props
type NavigationItemSet = {
  primaryNavigationItem: NavigationItem,
  secondaryNavigationItems?: NavigationItem[]
}

type DesktopMenuProps = {
  textNavItems: NavigationItemSet[],
  buttonNavItems?: NavigationItemSet[]
}

type ItemProps = {
  mainItem: NavigationItem
}

type MenuSectionProps = {
  navGroup: any
}

const MenuSection: React.FC<MenuSectionProps> = ({ navGroup }) => {
  const { isMobile, palette } = useTheme();

  //const ButtonComponent = mainItem?.isButton ? SecondaryButton : TextButton

  const styleText = { padding: '0 0 0 0', margin: '0 0 0 1em', height: 'auto', width: 'auto', color: palette.text.secondary }

  const styleButton = { margin: '0 0 0 1em', height: 'auto', width: 'auto' }

  // TODO: color change on current and hover

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ItemWrapper>
      {
        !navGroup?.secondaryNavigationItems
          ? (
            navGroup.primaryNavigationItem?.page?.slug?.current ? (
              <Link
                as={`/${navGroup.primaryNavigationItem?.page?.slug?.current}`}
                href={{
                  pathname: '/LandingPage',
                  query: { slug: navGroup.primaryNavigationItem?.page?.slug?.current },
                }}
                passHref
              >
                <Button key={navGroup.primaryNavigationItem.text} style={navGroup.primaryNavigationItem?.isButton ? styleButton : styleText} size='small' variant={navGroup.primaryNavigationItem?.isButton ? 'outlined' : 'text'}>{navGroup.primaryNavigationItem.text}</Button>
              </Link>
            )

              : (
                <Link href={navGroup.primaryNavigationItem.link} passHref>
                  <Button key={navGroup.primaryNavigationItem.text} style={navGroup.primaryNavigationItem?.isButton ? styleButton : styleText} size='small' variant={navGroup.primaryNavigationItem?.isButton ? 'outlined' : 'text'} >
                    {navGroup.primaryNavigationItem.text}
                  </Button>
                </Link>
              )
          )
          : (
            <Button onClick={handleClick} key={navGroup.primaryNavigationItem.text} style={navGroup.primaryNavigationItem?.isButton ? styleButton : styleText} size='small' variant={navGroup.primaryNavigationItem?.isButton ? 'outlined' : 'text'}>{navGroup.primaryNavigationItem.text}</Button>
          )
      }
      {navGroup.secondaryNavigationItems && (
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{ maxWidth: '100%', width: '100%' }}
        >
          {
            navGroup.secondaryNavigationItems.map((navItem: any) => (
              <MenuItem onClick={handleClose}>
                {
                  navItem?.page?.slug?.current ? (
                    <Link
                      as={`/${navItem?.page?.slug?.current}`}
                      href={{
                        pathname: '/LandingPage',
                        query: { slug: navItem?.page?.slug?.current },
                      }}
                      passHref
                    >
                      <Button key={navItem.text} style={navItem?.isButton ? styleButton : styleText} size='small' variant={navItem?.isButton ? 'outlined' : 'text'}>{navItem.text}</Button>
                    </Link>
                  ) : (
                    <Link href={navGroup.primaryNavigationItem.link} passHref>
                      <Button key={navItem.text} style={navItem?.isButton ? styleButton : styleText} size='small' variant={navItem?.isButton ? 'outlined' : 'text'} >
                        {navItem.text}
                      </Button>
                    </Link>
                  )
                }
              </MenuItem>
            ))
          }
        </Menu>
      )
      }

      {/* </Menu>


            <DropDownList className={"dropdownList"}>
              {
                navGroup.secondaryNavigationItems && navGroup.secondaryNavigationItems.map((item) => (
                  <Item mainItem={item} />
                ))
              }
            </DropDownList> */}
    </ItemWrapper>
  )
}

export const MobileMenu: React.FC<DesktopMenuProps> = ({ textNavItems, buttonNavItems }) => {


  return (
    <Wrapper>
      {
        textNavItems && textNavItems.map((navGroup) => (
          <MenuSection navGroup={navGroup} />
        ))
      }
    </Wrapper >
  )
}
