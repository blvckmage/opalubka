"use client";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        background: 'linear-gradient(135deg, #FFD600 0%, #FFA000 100%)',
        color: 'black',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
          <Image 
            src="/logo.png" 
            alt="Логотип" 
            width={40} 
            height={40} 
            style={{ marginRight: 12 }} 
          />
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            QALYP
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          flexGrow: 1,
          justifyContent: 'center'
        }}>
          {[{ label: t('nav.home'), href: '/' },
            { label: t('nav.catalog'), href: '/catalog' },
            { label: t('nav.how'), href: '/how-to-rent' },
            { label: t('nav.contacts'), href: '/contacts' },
            { label: t('nav.gallery'), href: '/gallery' },
            { label: t('nav.calculator'), href: '/calculator' },
          ].map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              sx={{ 
                mx: 1,
                color: 'black',
                fontWeight: 600,
                fontSize: '0.95rem',
                textTransform: 'none',
                px: 2,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.1)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/77001234567"
            target="_blank"
            rel="noopener"
            sx={{ 
              bgcolor: 'black',
              color: 'white',
              fontWeight: 600,
              textTransform: 'none',
              px: 3,
              py: 1,
              borderRadius: 2,
              display: { xs: 'none', sm: 'flex' },
              '&:hover': {
                bgcolor: '#333',
                transform: 'translateY(-1px)'
              },
              transition: 'all 0.2s ease'
            }}
          >
            WhatsApp
          </Button>
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
} 