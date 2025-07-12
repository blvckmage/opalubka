"use client";
import '../i18n';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navbar from './Navbar';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import { ReactNode } from 'react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#FFD600' },
    secondary: { main: '#1565C0' },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), var(--font-geist-mono), sans-serif',
  },
});

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
} 