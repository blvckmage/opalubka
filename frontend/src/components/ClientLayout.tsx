"use client";
import '../i18n';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navbar from './Navbar';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import { ReactNode } from 'react';
import { createTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';

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
      {/* Плавающая иконка калькулятора */}
      <Link href="/calculator">
        <Box
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1300,
            bgcolor: 'primary.main',
            color: 'black',
            borderRadius: '50%',
            boxShadow: 3,
            width: 64,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'box-shadow 0.2s',
            '&:hover': {
              boxShadow: 6,
              bgcolor: 'secondary.main',
              color: 'white',
            },
          }}
          aria-label="Калькулятор"
        >
          <Image src="/calculator.svg" alt="Калькулятор" width={36} height={36} />
        </Box>
      </Link>
      <Footer />
    </ThemeProvider>
  );
} 