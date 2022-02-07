import { ThemeOptions } from '@material-ui/core';
import { componentsBaseline } from './baseline';
import { componentsButtons } from './buttons';
import { defaultMuiTheme } from './default';
import { componentsInputs } from './inputs';
import { componentsLinks } from './links';
import { colors } from './palette';
import { componentsTooltip } from './tooltip';
import { alertTypography, menuTypography } from './typography';

export const components: ThemeOptions['components'] = {
  ...componentsBaseline,
  ...componentsButtons,
  ...componentsInputs,
  ...componentsLinks,
  ...componentsTooltip,
  MuiAlert: {
    styleOverrides: {
      root: {
        ...alertTypography,
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      position: 'relative',
    },
    styleOverrides: {
      root: {
        backgroundColor: colors.white,
        color: colors.black.main,
        zIndex: defaultMuiTheme.zIndex.appBar,
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      colorDefault: {
        backgroundColor: colors.brandPurple.main,
        color: colors.white,
      },
      root: {
        ...menuTypography,
        backgroundColor: colors.brandPurple.main,
        border: `2px solid ${colors.brandPurple.mid}`,
        color: colors.white,
        fontWeight: 700,
        height: 50,
        width: 50,
      },
    },
  },
  MuiDialog: {
    defaultProps: {
      maxWidth: 'md',
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        maxWidth: '80vw',
        minWidth: '55vw',
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      colorPrimary: {
        backgroundColor: 'transparent',
      },
      root: {
        height: '2px',
      },
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  },
};
