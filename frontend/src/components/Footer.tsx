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
              {t('footer.companyDesc')}
            </Typography>
            
            <Stack spacing={2}>
              <Box display="flex" alignItems="center">
                <LocationOnIcon sx={{ mr: 2, color: 'black' }} />
                <Typography>{t('footer.address')}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PhoneIcon sx={{ mr: 2, color: 'black' }} />
                <MuiLink 
                  href="tel:+77789929013" 
                  color="inherit" 
                  underline="hover"
                  sx={{ fontWeight: 600, fontSize: '1.1rem', mr: 2 }}
                >
                  +7 778 992 9013
                </MuiLink>
                <MuiLink 
                  href="tel:+77770319013" 
                  color="inherit" 
                  underline="hover"
                  sx={{ fontWeight: 600, fontSize: '1.1rem' }}
                >
                  +7 777 031 9013
                </MuiLink>
              </Box>
              <Box display="flex" alignItems="center">
                <EmailIcon sx={{ mr: 2, color: 'black' }} />
              </Box>
            </Stack>
            {/* Google Maps (заглушка) */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle1" fontWeight={700} mb={1}>
                Google Maps
              </Typography>
              <Box sx={{ width: '100%', height: 200, borderRadius: 2, overflow: 'hidden', mt: 1 }}>
                <iframe
                  src="https://www.google.com/maps?q=132-я+улица+2,+Туркестан,+Казахстан&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта"
                />
              </Box>
            </Box>
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
              <MuiLink 
                component={Link} 
                href="/calculator" 
                color="inherit" 
                underline="hover"
                sx={{ 
                  fontWeight: 500,
                  fontSize: '1rem',
                  '&:hover': { opacity: 0.7 }
                }}
              >
                {t('nav.calculator')}
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
              {t('footer.contactTitle')}
            </Typography>
            
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/+77789929013"
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
                mb: 1,
                '&:hover': {
                  bgcolor: '#333'
                }
              }}
            >
              WhatsApp 1
            </Button>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/+77770319013"
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
              WhatsApp 2
            </Button>
            
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              {t('footer.socialTitle')}
            </Typography>
            
            <Stack direction="row" spacing={2}>
              <IconButton 
                sx={{ 
                  bgcolor: 'black',
                  color: 'white',
                  '&:hover': { bgcolor: '#333' }
                }}
                href="https://www.tiktok.com/@salhan.anarbayev?_t=ZM-8yBoagZT1jK&_r=1"
                target="_blank"
                rel="noopener"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 3V16.5C16.5 18.9853 14.4853 21 12 21C9.51472 21 7.5 18.9853 7.5 16.5C7.5 14.0147 9.51472 12 12 12C13.3807 12 14.5 13.1193 14.5 14.5C14.5 15.8807 13.3807 17 12 17C10.6193 17 9.5 15.8807 9.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.5 3C17.3284 3 18 3.67157 18 4.5C18 5.32843 17.3284 6 16.5 6C15.6716 6 15 5.32843 15 4.5C15 3.67157 15.6716 3 16.5 3Z" fill="currentColor"/></svg>
              </IconButton>
              <IconButton 
                sx={{ 
                  bgcolor: 'black',
                  color: 'white',
                  '&:hover': { bgcolor: '#333' }
                }}
                href="https://www.instagram.com/opalubka_turkestan?igsh=MTl6dG00MmRmemV0dA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon />
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