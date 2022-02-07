import { ThemeOptions } from '@material-ui/core';
import { colors } from './palette';
import { typographyConstants } from './typography';

const spacing = {
  paddingBottom: 11,
  paddingTop: 11,
};

export const componentsInputs: ThemeOptions['components'] = {
  // The AutoComplete does something funky to the input which seems like it requires padding on the
  // root component and the actual input. Use these properties to re-correct the size
  MuiAutocomplete: {
    styleOverrides: {
      inputRoot: {
        '&[class*="MuiOutlinedInput-root"]': {
          '& .MuiAutocomplete-input': {
            paddingBottom: spacing.paddingTop / 2,
            paddingTop: spacing.paddingTop / 2,
          },
          paddingBottom: spacing.paddingTop / 2,
          paddingTop: spacing.paddingTop / 2,
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        backgroundColor: colors.white,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      // Need to adjust this translation because of reduced padding on inputs
      outlined: {
        transform: 'translate(14px, 15px) scale(1)',
      },
      root: {
        letterSpacing: `${typographyConstants.letterSpacing.lg}em`,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: spacing,
      // Needs to match the label properties so that a correct sized notch is created
      // Multiply by 0.75 because label is shrunk by 0.75 when in position
      notchedOutline: {
        letterSpacing: `${typographyConstants.letterSpacing.lg * 0.75}em`,
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
    },
  },
};
