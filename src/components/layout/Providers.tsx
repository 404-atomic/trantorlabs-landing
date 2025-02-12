'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/lib/theme';
import { TranslationsProvider } from './TranslationsProvider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <TranslationsProvider locale="en">
        <CssBaseline />
        {children}
      </TranslationsProvider>
    </ThemeProvider>
  );
}
