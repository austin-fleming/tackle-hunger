import React from 'react'
import Link from 'next/link'
import { NavigationItem } from 'types/generated/schema'
import { TextButton, SecondaryButton } from 'components/ui'
import { Button } from '@material-ui/core'
import { useTheme } from '@emotion/react'
import { makeStyles } from '@material-ui/core/styles';


type NavGroupProps = {
  primaryNavigationItem: NavigationItem,
  secondaryNavigationItems?: NavigationItem[]
}


// TODO: tie-in with Buttons component
export const NavGroup: React.FC<NavGroupProps> = ({ primaryNavigationItem: mainItem, secondaryNavigationItems }) => {

  const ButtonComponent = mainItem?.isButton ? SecondaryButton : TextButton

  const { isMobile, palette } = useTheme();

  // TODO: color change on current and hover
  const styleText = { padding: '0 0 0 0', margin: '0 0 0 1em', height: 'auto', width: 'auto', color: palette.text.secondary }

  const styleButton = { margin: '0 0 0 1em', height: 'auto', width: 'auto' }

  return mainItem?.page?.slug?.current ? (
    <Link
      as={`/${mainItem.page.slug.current}`}
      href={{
        pathname: '/LandingPage',
        query: { slug: mainItem.page.slug.current },
      }}
      passHref
    >
      <Button key={mainItem.text} style={mainItem?.isButton ? styleButton : styleText} size='small' variant={mainItem?.isButton ? 'outlined' : 'text'}>{mainItem.text}</Button>
    </Link>
  ) : (
    <Link href={mainItem.link} passHref>
      <Button key={mainItem.text} style={mainItem?.isButton ? styleButton : styleText} size='small' variant={mainItem?.isButton ? 'outlined' : 'text'} >
        {mainItem.text}
      </Button>
    </Link>
  )
}
