import { darken, lighten, ThemeOptions } from '@material-ui/core';

// Palette Colors
export const colors = {
  alert: '#f21d69', // pinkish red
  attention: '#fecf83', // yellowish - app banner
  black: {
    light: '#333f48',
    main: '#262626',
  },
  brandBlue: {
    light: '#0093d7', // light blue
    main: '#024172', // dark blue (header etc.)
  },
  brandOrange: {
    light: '#dcc242', // TH pin yellow
    main: '#eb602a', // 100%
  },
  brandPurple: {
    // light purple - login background
    // pale purple payment type bg
    light: '#ebdcf8', // 20%
    // main logo purple
    main: '#9B51E0', // 100%
    // mid purple - avatar border
    mid: '##c396ec', // 60%
    pale: '#faf6fd', // 5%
  },
  brandYellow: {
    light: '#fcf4db', // 20%
    main: '#F2C94C', // 100%
    mid: '#f7de93', // 60%
    pale: '#fefcf6', // 5%
  },
  error: '#e23834', // red
  grey: '#f8fcff', // light bluish grey
  success: '#43a048', // green
  warn: '#f57c01', // orange
  warnLess: '#fcaf17', // yellow
  white: '#ffffff', // white (seems obvious but sometimes sites need an offset white)
};

// MUI Theme does provide an augment color function but the coefficients used here are different
const customAugmentColor = (color: string) => ({
  dark: darken(color, 0.1),
  light: lighten(color, 0.1),
  main: color,
});

export const palette: ThemeOptions['palette'] = {
  alert: {
    ...customAugmentColor(colors.alert),
    contrastText: colors.white,
  },
  attention: {
    ...customAugmentColor(colors.attention),
    contrastText: colors.black.main,
  },
  background: {
    default: colors.white,
    paper: colors.white,
  },
  brandBlue: colors.brandBlue,
  brandOrange: colors.brandOrange,
  brandPurple: colors.brandPurple,
  brandYellow: colors.brandYellow,
  error: {
    ...customAugmentColor(colors.error),
    contrastText: colors.white,
  },
  pale: {
    ...customAugmentColor(colors.grey),
    contrastText: colors.black.main,
  },
  primary: {
    main: colors.brandPurple.main,
  },
  secondary: {
    main: colors.brandYellow.main,
  },
  success: {
    ...customAugmentColor(colors.success),
    contrastText: colors.white,
  },
  text: {
    primary: colors.black.main, // main text color
    // secondary: colors.black, // labels
    tertiary: colors.black.light, // text color in some tooltips and modals
  },
  warning: {
    ...customAugmentColor(colors.warn),
    contrastText: colors.white,
  },
  warningLight: {
    ...customAugmentColor(colors.warnLess),
    contrastText: colors.white,
  },
};
