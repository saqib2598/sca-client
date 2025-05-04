import { createTheme } from '@mui/material/styles';
import { arSD, enUS } from '@mui/material/locale';

export const getAppTheme = (direction: 'ltr' | 'rtl') =>
  createTheme(
    {
      direction,
      typography: {
        fontFamily: direction === 'rtl' ? 'Cairo, sans-serif' : 'Roboto, sans-serif',
      },
    },
    direction === 'rtl' ? arSD : enUS
  );
