import { ThemeOptions } from '@material-ui/core';
import { textlinkStyles } from './typography';

export const componentsLinks: ThemeOptions['components'] = {
  MuiLink: {
    styleOverrides: {
      button: {
        // By default this was set to 'middle' which is not right for typography
        verticalAlign: 'inherit',
      },
      root: {
        ...textlinkStyles,
      },
    },
  },
};
