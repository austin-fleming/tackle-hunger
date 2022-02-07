/* eslint-disable react/no-multi-comp */
import React from 'react';
import { css, useTheme } from '@emotion/react';
import {
  CircularProgress,
  // eslint-disable-next-line no-restricted-imports
  Link as MuiLink,
  LinkProps as MuiLinkProps,
} from '@material-ui/core';
import { LoadingButton, LoadingButtonProps } from '@material-ui/lab';
// eslint-disable-next-line no-restricted-imports
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

/**
 * ButtonOrLinkProps allows the use of an object for the href (as in the NextLink api)
 */
type ButtonOrLinkProps = Omit<LoadingButtonProps, 'href'> & {
  href?: NextLinkProps['href'];
};
const ButtonOrLink: React.FC<ButtonOrLinkProps> = ({ href, ...rest }) => {
  const pendingIndicator = <CircularProgress color='inherit' size='1.375em' />;
  return href ? (
    <NextLink passHref href={href}>
      <LoadingButton pendingIndicator={pendingIndicator} {...rest} />
    </NextLink>
  ) : (
    <LoadingButton pendingIndicator={pendingIndicator} {...rest} />
  );
};

// The api for our Buttons - prevent variant overrides
export type ButtonProps = Omit<ButtonOrLinkProps, 'variant'>;

export const PrimaryButton: React.FC<ButtonProps> = (props) => (
  <ButtonOrLink {...props} fullWidth={false} variant='contained' />
);

export const SecondaryButton: React.FC<ButtonProps> = (props) => (
  <ButtonOrLink {...props} variant='outlined' />
);

/**
 * TextButton is a button that doesn't have a background (but still has padding and hover backgrounds)
 */
export const TextButton: React.FC<ButtonProps> = (props) => (
  <ButtonOrLink {...props} variant='text' />
);

/**
 * LinkButton is a button that is styled like a link. onClick is required, href not allowed
 */
type LinkButtonProps = Omit<RequireOne<MuiLinkProps<'button'>, 'onClick'>, 'href' | 'variant'>;

export const LinkButton: React.FC<LinkButtonProps> = (props) => (
  <MuiLink {...props} component='button' />
);

/**
 * ChoiceButton is a purple styled button, used on the Donate pages for example
 */
type ChoiceButtonProps = Omit<ButtonOrLinkProps, 'color' | 'variant'> & {
  $selected: boolean;
  component?: 'div';
};
export const ChoiceButton: React.FC<ChoiceButtonProps> = ({ $selected, ...rest }) => {
  const theme = useTheme();

  const selectedStyles = css`
    /* Fake a border width change with an inset box shadow, so we don't produce layout changes */
    box-shadow: 0 0 0 1px currentColor inset;
    background-color: ${theme.palette.brandPurple.light};
    color: ${theme.palette.brandPurple.main};
    border-color: ${theme.palette.brandPurple.main};
  `;

  const baseStyles = css`
    border-radius: ${theme.shape.borderRadius}px;
    background-color: ${theme.palette.grey[50]};
    padding: ${theme.spacing(2)};
    height: 100%;

    /* Apply styles when used as a tab */
    &.Mui-selected {
      ${selectedStyles};
    }
  `;

  return (
    <ButtonOrLink
      css={[baseStyles, $selected && selectedStyles]}
      disableElevation={false}
      // Outlined buttons don't get elevation anyway - but we don't want MUI to apply the disableElevation styles which disables box-shadow
      fullWidth={false}
      size='small'
      {...rest}
      color='inherit'
      variant='outlined'
    />
  );
};
