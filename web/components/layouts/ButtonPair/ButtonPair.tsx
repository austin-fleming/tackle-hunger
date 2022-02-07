import React from 'react';
import styled from '@emotion/styled'

const ButtonPairCenter = styled.div<{ spacing: number }>`
  width: auto;
  height: auto;

  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: center;

  gap: ${({ theme, spacing }) => theme.spacing(spacing)};

  @media (min-width: ${({ theme }) => (theme.breakpoints.values.md)}px) {
      display: flex;
      flex-direction: row;
      justify-content: center;

      & > * {
        margin-left: ${({ theme, spacing }) => theme.spacing(spacing / 2)};
        margin-right: ${({ theme, spacing }) => theme.spacing(spacing / 2)};
      }
    }
`

const ButtonPairLeft = styled.div<{ spacing: number }>`
  width: auto;
  height: auto;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: start;

  gap: ${({ theme, spacing }) => theme.spacing(spacing)};

  @media (min-width: ${({ theme }) => (theme.breakpoints.values.md)}px) {
      grid-template-columns: auto auto 1fr;
    }
`

type ButtonPairProps = {
  center?: boolean,
  centerMobile?: boolean,
  children: any | any[],
  spacing?: number
}

export const ButtonPair: React.FC<ButtonPairProps> = ({ children, center = false, centerMobile = false, spacing = 4 }) => children && children[0]
  && center
  ? (<ButtonPairCenter spacing={spacing}>{children}</ButtonPairCenter>)
  : (<ButtonPairLeft spacing={spacing}>{children}</ButtonPairLeft>)
