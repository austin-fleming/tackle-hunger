import { colors } from './palette';

export const borders = Object({
  primary: {
    md: `4px solid ${colors.brandPurple.main}`,
    thick: `8px solid ${colors.brandPurple.main}`,
    thin: `2px solid ${colors.brandPurple.main}`,
  },
  secondary: {
    md: `4px solid ${colors.brandYellow.main}`,
    thick: `8px solid ${colors.brandYellow.main}`,
    thin: `2px solid ${colors.brandYellow.main}`,
  },
});

export type Borders = typeof borders;
