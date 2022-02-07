import { ThemeOptions } from '@material-ui/core';
import { defaultMuiTheme } from './default';
import { textlinkStyles } from './typography';

const padding = defaultMuiTheme.spacing(1.5, 3);

export const componentsButtons: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      disableElevation: false,
      fullWidth: false,
      type: 'button',
    },
    styleOverrides: {
      colorInherit: {
        // When using the inherit variant, we still want to keep the bordercolor as set by MUI (mid-grey)
        borderColor: undefined,
      },
      contained: {
        borderRadius: '100px',
        lineHeight: 1,
        padding,
        textAlign: 'center',
      },
      outlined: {
        backgroundColor: 'white',
        borderRadius: '100px',
        padding,
      },
      root: {
        // Remove browser spinnes
        '& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
        // Firefox
        "& input[type='number']": {
          '-moz-appearance': 'textfield',
        },

        fontSize: '0.9375rem',
      },
      sizeSmall: {
        fontSize: '0.875rem',
        minWidth: 'auto',
        padding: defaultMuiTheme.spacing(1.25, 3),
      },
      // Use the textLinkStyles for buttons with variant='text'
      text: {
        ...textlinkStyles,
        padding,
      },
    },
  },
};
