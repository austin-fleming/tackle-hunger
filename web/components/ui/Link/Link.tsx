/* eslint-disable react/no-multi-comp, jsx-a11y/anchor-has-content */
import * as React from 'react';
import {
  // eslint-disable-next-line no-restricted-imports
  Link as MuiLink,
  LinkProps as MuiLinkProps,
} from '@material-ui/core';
// eslint-disable-next-line no-restricted-imports
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

// Inspired by: https://github.com/mui-org/material-ui/blob/next/examples/nextjs-with-typescript/src/Link.tsx

type NextComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  NextLinkProps;

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>(
  ({ as, href, replace, scroll, passHref, shallow, prefetch, ...rest }, ref) => (
    <NextLink
      as={as}
      href={href}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}>
      <a {...rest} ref={ref} />
    </NextLink>
  )
);

NextComposed.displayName = 'NextComposed';

export type LinkProps = Omit<MuiLinkProps, 'href'> &
  NextComposedProps & {
    innerRef?: React.Ref<HTMLAnchorElement>;
    naked?: boolean;
  };

// A version of the Next.js Link component using MUI Link component:
// https://nextjs.org/docs/#with-link
const MuiNextLink: React.FC<LinkProps> = ({
  href,
  className: classNameProps,
  innerRef,
  naked,
  ...rest
}) => {
  // Set active className
  const { asPath } = useRouter();
  const pathname = typeof href === 'string' ? href : href?.pathname;
  const isHome = asPath === '/';
  const isHomeLink = pathname === '/';

  const classNames = [classNameProps];

  if (isHome && asPath === pathname) {
    classNames.push('TkhLink--active');
  } else if (!isHomeLink && pathname && asPath.includes(pathname)) {
    classNames.push('TkhLink--active');
  }
  const className = classNames.filter((cn) => !!cn).join(' ') || undefined;

  // Allow use of a non-MUI styled link
  if (naked) {
    return <NextComposed className={className} href={href} {...rest} ref={innerRef} />;
  }

  return (
    <MuiLink
      className={className}
      component={NextComposed}
      href={href as string}
      {...rest}
      ref={innerRef}
    />
  );
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <MuiNextLink {...props} innerRef={ref} />
));
