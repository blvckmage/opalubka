"use client";
import { Box, Container, Typography, Link as MuiLink, Stack, IconButton, Divider, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box 
      component="footer" 
      sx={{ 
        background: 'linear-gradient(135deg, #FFD600 0%, #FFA000 100%)',
        color: 'black', 
        mt: 8, 
        py: 6,
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={6}>
          {/* Company Info */}
          <Box sx={{ flex: 2 }}>
            <Typography 
              variant="h4" 
              fontWeight={800} 
              mb={2}
              sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}
            >
              QALYP
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3, 
                fontSize: '1.1rem',
                opacity: 0.9,
                maxWidth: 400
              }}
            >
              Профессиональная аренда опалубки в Туркестане. Качественные материалы, быстрая доставка, техническая поддержка.
            </Typography>
            
            <Stack spacing={2}>
              <Box display="flex" alignItems="center">
                <LocationOnIcon sx={{ mr: 2, color: 'black' }} />
                <Typography>{t('footer.address')}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PhoneIcon sx={{ mr: 2, color: 'black' }} />
                <MuiLink 
                  href="tel:+77001234567" 
                  color="inherit" 
                  underline="hover"
                  sx={{ fontWeight: 600, fontSize: '1.1rem' }}
                >
                  +7 700 123 45 67
                </MuiLink>
              </Box>
              <Box display="flex" alignItems="center">
                <EmailIcon sx={{ mr: 2, color: 'black' }} />
                <MuiLink 
                  href="mailto:info@qalyp.kz" 
                  color="inherit" 
                  underline="hover"
                  sx={{ fontWeight: 600 }}
                >
                  info@qalyp.kz
                </MuiLink>
              </Box>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h6" 
              fontWeight={700} 
              mb={3}
              sx={{ fontSize: '1.3rem' }}
            >
              {t('footer.links')}
            </Typography>
            <Stack spacing={2}>
              <MuiLink 
                component={Link} 
                href="/" 
                color="inherit" 
                underline="hover"
                sx={{ 
                  fontWeight: 500,
                  fontSize: '1rem',
                  '&:hover': { opacity: 0.7 }
                }}
              >
                {t('nav.home')}
              </MuiLink>
              <MuiLink 
                component={Link} 
                href="/catalog" 
                color="inherit" 
                underline="hover"
                sx={{ 
                  fontWeight: 500,
                  fontSize: '1rem',
                  '&:hover': { opacity: 0.7 }
                }}
              >
                {t('nav.catalog')}
              </MuiLink>
              <MuiLink 
                component={Link} 
                href="/how-to-rent" 
                color="inherit" 
                underline="hover"
                sx={{ 
                  fontWeight: 500,
                  fontSize: '1rem',
                  '&:hover': { opacity: 0.7 }
                }}
              >
                {t('nav.how')}
              </MuiLink>
              <MuiLink 
                component={Link} 
                href="/contacts" 
                color="inherit" 
                underline="hover"
                sx={{ 
                  fontWeight: 500,
                  fontSize: '1rem',
                  '&:hover': { opacity: 0.7 }
                }}
              >
                {t('nav.contacts')}
              </MuiLink>
              <MuiLink 
                component={Link} 
                href="/gallery" 
                color="inherit" 
                underline="hover"
                sx={{ 
                  fontWeight: 500,
                  fontSize: '1rem',
                  '&:hover': { opacity: 0.7 }
                }}
              >
                {t('nav.gallery')}
              </MuiLink>
            </Stack>
          </Box>

          {/* Contact & Social */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h6" 
              fontWeight={700} 
              mb={3}
              sx={{ fontSize: '1.3rem' }}
            >
              Связаться с нами
            </Typography>
            
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
                py: 1.5,
                borderRadius: 2,
                mb: 3,
                '&:hover': {
                  bgcolor: '#333'
                }
              }}
            >
              WhatsApp
            </Button>
            
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Следите за нами в социальных сетях:
            </Typography>
            
            <Stack direction="row" spacing={2}>
              <IconButton 
                sx={{ 
                  bgcolor: 'black',
                  color: 'white',
                  '&:hover': { bgcolor: '#333' }
                }}
                href="https://wa.me/77001234567" 
                target="_blank"
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  bgcolor: 'black',
                  color: 'white',
                  '&:hover': { bgcolor: '#333' }
                }}
                href="https://instagram.com/qalyp" 
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                sx={{ 
                  bgcolor: 'black',
                  color: 'white',
                  '&:hover': { bgcolor: '#333' }
                }}
                href="https://t.me/qalyp" 
                target="_blank"
              >
                <TelegramIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        <Divider sx={{ my: 4, borderColor: 'rgba(0,0,0,0.2)' }} />

        {/* Bottom Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 2
        }}>
          <Typography 
            variant="body2" 
            sx={{ opacity: 0.8 }}
          >
            © {new Date().getFullYear()} QALYP. {t('footer.rights')}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <MuiLink 
              href="/privacy" 
              color="inherit" 
              underline="hover"
              sx={{ fontSize: '0.9rem', opacity: 0.8 }}
            >
              Политика конфиденциальности
            </MuiLink>
            <MuiLink 
              href="/terms" 
              color="inherit" 
              underline="hover"
              sx={{ fontSize: '0.9rem', opacity: 0.8 }}
            >
              Условия использования
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 