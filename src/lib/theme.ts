import { createTheme } from '@mui/material/styles';
import { COLORS, BREAKPOINTS } from './constants/theme';

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary.main,
      light: COLORS.primary.light,
      dark: COLORS.primary.dark,
    },
    secondary: {
      main: COLORS.secondary.main,
    },
  },
  typography: {
    fontFamily: 'var(--font-fredoka), "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
      },
    },
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
});
