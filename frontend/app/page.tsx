"use client";

import { Box, Container, Typography, Paper, Button, Stack, Card, CardContent, Avatar } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SavingsIcon from '@mui/icons-material/Savings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #FFD600 0%, #FFA000 100%)',
          color: 'black',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="h2" 
                fontWeight={800} 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2
                }}
              >
                {t('main.title')}
              </Typography>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ 
                  mb: 3,
                  opacity: 0.9,
                  fontWeight: 500
                }}
              >
                {t('main.subtitle')}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4,
                  fontSize: '1.1rem',
                  opacity: 0.8
                }}
              >
                {t('main.mission')}
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  href="https://wa.me/77001234567"
                  target="_blank"
                  rel="noopener"
                  sx={{ 
                    bgcolor: 'black',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: '#333'
                    }
                  }}
                >
                  {t('main.whatsapp')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="/catalog"
                  sx={{ 
                    borderColor: 'black',
                    color: 'black',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#333',
                      bgcolor: 'rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  {t('nav.catalog')}
                </Button>
              </Stack>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ConstructionIcon 
                sx={{ 
                  fontSize: { xs: 200, md: 300 },
                  opacity: 0.1,
                  color: 'black'
                }} 
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h3" fontWeight={800} color="primary.main">
                500+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Проектов
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h3" fontWeight={800} color="primary.main">
                50+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Клиентов
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h3" fontWeight={800} color="primary.main">
                24/7
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Поддержка
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h3" fontWeight={800} color="primary.main">
                5 лет
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Опыта
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" fontWeight={700} gutterBottom>
                {t('main.about')}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 3 }}>
                {t('main.aboutText')}
              </Typography>
              <Stack spacing={2}>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 40, height: 40 }}>
                    <ConstructionIcon />
                  </Avatar>
                  <Typography variant="body1">{t('main.benefit1')}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 40, height: 40 }}>
                    <LocalShippingIcon />
                  </Avatar>
                  <Typography variant="body1">{t('main.benefit2')}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 40, height: 40 }}>
                    <AccessTimeIcon />
                  </Avatar>
                  <Typography variant="body1">{t('main.benefit3')}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 40, height: 40 }}>
                    <SavingsIcon />
                  </Avatar>
                  <Typography variant="body1">{t('main.benefit4')}</Typography>
                </Box>
              </Stack>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box 
                sx={{ 
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <EngineeringIcon sx={{ fontSize: 200, opacity: 0.2, color: 'black' }} />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              {t('nav.services')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Полный спектр услуг по аренде опалубки для вашего проекта
            </Typography>
          </Box>
          
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
            <Card 
              elevation={0}
              sx={{ 
                flex: 1,
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'grey.200',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 4,
                  borderColor: 'primary.main'
                }
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    width: 80, 
                    height: 80, 
                    mx: 'auto', 
                    mb: 3 
                  }}
                >
                  <LocalShippingIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {t('services.deliveryTitle')}
                </Typography>
                <Typography color="text.secondary">
                  {t('services.deliveryDesc')}
                </Typography>
              </CardContent>
            </Card>
            
            <Card 
              elevation={0}
              sx={{ 
                flex: 1,
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'grey.200',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 4,
                  borderColor: 'primary.main'
                }
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    width: 80, 
                    height: 80, 
                    mx: 'auto', 
                    mb: 3 
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {t('services.supervisionTitle')}
                </Typography>
                <Typography color="text.secondary">
                  {t('services.supervisionDesc')}
                </Typography>
              </CardContent>
            </Card>
            
            <Card 
              elevation={0}
              sx={{ 
                flex: 1,
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'grey.200',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 4,
                  borderColor: 'primary.main'
                }
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    width: 80, 
                    height: 80, 
                    mx: 'auto', 
                    mb: 3 
                  }}
                >
                  <SupportAgentIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {t('services.consultTitle')}
                </Typography>
                <Typography color="text.secondary">
                  {t('services.consultDesc')}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" fontWeight={700} gutterBottom color="black">
              {t('main.ctaTitle')}
            </Typography>
            <Typography variant="h6" color="black" sx={{ mb: 4, opacity: 0.8 }}>
              {t('main.ctaDesc')}
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/77001234567"
              target="_blank"
              rel="noopener"
              sx={{ 
                bgcolor: 'black',
                color: 'white',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#333'
                }
              }}
            >
              Получить консультацию
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
