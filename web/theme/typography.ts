import { ThemeOptions } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export const typographyTextConstants = {
  fontFamily: "'Red Hat Text', sans-serif",
  lineHeight: 1.3
}
// TODO: join with typographyTextConstants or rename more clearly to typographyDisplay and typographyCopy, etc.
export const typographyConstants = {
  fontFamily: "'Red Hat Display', sans-serif",
  letterSpacing: {
    lg: 0.05,
    md: 0.015,
  },
  lineHeight: 1.5,
};

// TODO: Deprecate in favor of per style specificity
const trackMdTypography: CSSProperties = {
  letterSpacing: `${typographyConstants.letterSpacing.md}em`,
  lineHeight: typographyConstants.lineHeight,
};

const trackLgTypography: CSSProperties = {
  letterSpacing: `${typographyConstants.letterSpacing.lg}em`,
  lineHeight: typographyConstants.lineHeight,
};

/**
 * Body-derived styles
 */

export const bodyTypography: CSSProperties = {
  ...trackMdTypography,
  fontWeight: 400,
};

export const alertTypography: CSSProperties = {
  ...bodyTypography,
  fontSize: '1.0625rem',
};

export const toolTipTypography: CSSProperties = {
  ...bodyTypography,
  fontSize: '0.825rem',
};

/**
 * Menu & Link Styles
 */

export const menuTypography: CSSProperties = {
  ...trackLgTypography,
  fontSize: '1rem',
  fontWeight: 400,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
};

// Used in Links and Buttons that look like Links
// TODO: Cleaner extension of button
export const textlinkStyles: CSSProperties = {
  // Include cursor to ensure we always show a pointer on things that look clickable
  cursor: 'pointer',
  fontWeight: 700,
  // Include the textTransform because a TextButton has uppercase because of having button styles
  textTransform: 'inherit',
};

/**
 * Heading styles
 */
// TODO: deprecate
export const headingTypography = (fontSize: number): CSSProperties => ({
  ...trackLgTypography,
  fontSize: `${fontSize}rem`,
  fontWeight: 700,
  letterSpacing: `${typographyConstants.letterSpacing.md}em`,
});

export const typography: ThemeOptions['typography'] = {
  // CS: TODO: the body size on the orginal was set to 18px - investigate setting this to 18 too - I think it will require a lot of rework though
  // fontSize: 18, // MUI default is 14
  body1: {
    // ...bodyTypography,
    fontFamily: typographyTextConstants.fontFamily,
    fontSize: '1.0625rem',
    fontWeight: 400,
    letterSpacing: '0.03em',
    lineHeight: 1.3
  },
  body2: {
    fontFamily: typographyTextConstants.fontFamily,
    fontSize: '0.9375rem',
    fontWeight: 400,
    letterSpacing: '0.017em',
    lineHeight: 1.3
  },
  button: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: 1,
    textTransform: 'uppercase'
  },
  caption: {
    fontSize: '0.8125rem',
    fontWeight: 400,
    letterSpacing: '0.03em',
    // textTransform: 'uppercase'
  },
  fontFamily: typographyTextConstants.fontFamily,
  /* Decouple style from semantics. i.e. <Typography component="h3" variant="h1"> */
  h1: {
    fontFamily: typographyConstants.fontFamily,
    fontSize: '6.375rem',
    fontWeight: 700,
    letterSpacing: '-0.01em'
  },
  // Make h2s visually the same as a h1
  h2: {
    fontFamily: typographyConstants.fontFamily,
    fontSize: '4rem',
    fontWeight: 700,
    letterSpacing: '-0.01em'
  },
  h3: {
    fontFamily: typographyConstants.fontFamily,
    fontSize: '3.1875rem',
    fontWeight: 700,
    letterSpacing: 'normal'
  },
  h4: {
    fontFamily: typographyConstants.fontFamily,
    fontSize: '2.25rem',
    fontWeight: 700,
    letterSpacing: '0.01em'
  },
  h5: {
    fontFamily: typographyConstants.fontFamily,
    fontSize: '1.5625rem',
    fontWeight: 700,
    letterSpacing: 'normal'
  },
  h6: {
    fontFamily: typographyConstants.fontFamily,
    fontSize: '1.3125rem',
    fontWeight: 700,
    letterSpacing: '0.01em'
  },
  menu: {
    ...menuTypography,
  },
  overline: {
    fontFamily: typographyTextConstants.fontFamily,
    fontSize: '0.6875rem',
    fontWeight: 400,
    letterSpacing: '0.13em',
    textTransform: 'uppercase'
  },
  subtitle1: {
    fontFamily: typographyConstants.fontFamily,
    fontSize: '1.0625rem',
    fontWeight: 400,
    letterSpacing: '0.01em'
  },
  subtitle2: {
    fontFamily: typographyConstants.fontFamily,
    fontSize: '0.9375rem',
    fontWeight: 400,
    letterSpacing: '0.01em'
  },
};
