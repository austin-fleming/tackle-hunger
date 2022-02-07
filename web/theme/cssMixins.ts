import { css, SerializedStyles } from '@emotion/react';
import { defaultMuiTheme } from './default';

type TwisterProps = {
  angle?: number;
};

export const cssMixins = {
  colCentered: css`
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
  `,
  colHCentered: css`
    flex-direction: column;
    display: flex;
    justify-content: center;
  `,
  colStretch: css`
    display: flex;
    flex-direction: column;
  `,
  colVCentered: css`
    flex-direction: column;
    align-items: center;
    display: flex;
  `,
  menuItem: css`
    padding: ${defaultMuiTheme.spacing(2, 3)};
    width: 100%;
  `,
  rowCentered: css`
    align-items: center;
    display: flex;
    justify-content: center;
  `,
  rowHCentered: css`
    display: flex;
    justify-content: center;
  `,
  rowStretch: css`
    display: flex;
  `,
  rowVCentered: css`
    align-items: center;
    display: flex;
  `,
  twister: ({ angle = -180 }: TwisterProps): SerializedStyles => css`
    transform: rotate(${angle}deg);
    transition: ${defaultMuiTheme.transitions.create('transform')};
  `,
};
