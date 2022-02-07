import React from 'react';
import { NextComponentType, NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';

declare global {
  /**
   * OmitBetterStrict is a utility type for omitting fields from types with discriminated unions
   * Useful for omitting props from MUI components
   * See:
   * - https://github.com/microsoft/TypeScript/issues/31501
   * - https://github.com/mui-org/material-ui/issues/19579
   */
  type OmitBetterStrict<T, K extends keyof T> = T extends any
    ? Pick<T, Exclude<keyof T, K>>
    : never;

  /**
   * RequireOne is a utility type for making one or more fields of an existing type required
   * See: https://medium.com/@KevinBGreene/typescript-modeling-required-fields-with-mapped-types-f7bf17688786
   * -
   */
  type RequireOne<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
  } &
    {
      [P in K]-?: T[P];
    };

  type PageType<P> = NextPage<P> & {
    Container: React.ReactNode;
  };

  type AppPropsType<P = Record<string, any>> = AppProps<P> & {
    Component: NextComponentType<NextPageContext, any, P> & {
      Container: React.FC;
    };
  };
}
