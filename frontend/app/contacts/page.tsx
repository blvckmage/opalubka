"use client";
import { Container, Typography, Box, Avatar, Card, CardContent, Stack, Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTranslation } from 'react-i18next';

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #FFD600 0%, #FFA000 100%)',
          color: 'black',
          py: { xs: 6, md: 8 },
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography 
              variant="h2" 
              fontWeight={800} 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2
              }}
            >
              {t('nav.contacts')}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
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
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: '#333'
                  }
                }}
              >
                WhatsApp
              </Button>
              <Button
                variant="outlined"
                startIcon={<PhoneIcon />}
                href="tel:+77001234567"
                sx={{ 
                  borderColor: 'black',
                  color: 'black',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: '#333',
                    bgcolor: 'rgba(0,0,0,0.1)'
                  }
                }}
              >
                Позвонить
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Contact Info Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', lg: 'row' }} spacing={6}>
            {/* Contact Information */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" fontWeight={700} gutterBottom>
                {t('contacts.sectionTitle')}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                {t('contacts.sectionDesc')}
              </Typography>

              <Stack spacing={4}>
                <Card 
                  elevation={0}
                  sx={{ 
                    bgcolor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    p: 3
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 50, height: 50 }}>
                      <PhoneIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {t('contacts.phoneTitle')}
                      </Typography>
                      <Typography color="text.secondary">
                        {t('contacts.phoneDesc')}
                      </Typography>
                    </Box>
                  </Box>
                  <Button 
                    href="tel:+77001234567" 
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      p: 0,
                      textTransform: 'none'
                    }}
                  >
                    +7 700 123 45 67
                  </Button>
                </Card>

                <Card 
                  elevation={0}
                  sx={{ 
                    bgcolor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    p: 3
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 50, height: 50 }}>
                      <WhatsAppIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {t('contacts.whatsappTitle')}
                      </Typography>
                      <Typography color="text.secondary">
                        {t('contacts.whatsappDesc')}
                      </Typography>
                    </Box>
                  </Box>
                  <Button 
                    href="https://wa.me/77001234567" 
                    target="_blank"
                    rel="noopener"
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      p: 0,
                      textTransform: 'none'
                    }}
                  >
                    {t('contacts.whatsappBtn')}
                  </Button>
                </Card>

                <Card 
                  elevation={0}
                  sx={{ 
                    bgcolor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    p: 3
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 50, height: 50 }}>
                      <EmailIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {t('contacts.emailTitle')}
                      </Typography>
                      <Typography color="text.secondary">
                        {t('contacts.emailDesc')}
                      </Typography>
                    </Box>
                  </Box>
                  <Button 
                    href="mailto:info@qalyp.kz" 
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      p: 0,
                      textTransform: 'none'
                    }}
                  >
                    info@qalyp.kz
                  </Button>
                </Card>

                <Card 
                  elevation={0}
                  sx={{ 
                    bgcolor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    p: 3
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 50, height: 50 }}>
                      <LocationOnIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {t('contacts.addressTitle')}
                      </Typography>
                      <Typography color="text.secondary">
                        {t('contacts.addressDesc')}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ fontWeight: 500 }}>
                    {t('contacts.addressText')}
                  </Typography>
                </Card>

                <Card 
                  elevation={0}
                  sx={{ 
                    bgcolor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    p: 3
                  }}
                >
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 50, height: 50 }}>
                      <AccessTimeIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {t('contacts.worktimeTitle')}
                      </Typography>
                      <Typography color="text.secondary">
                        {t('contacts.worktimeDesc')}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ fontWeight: 500 }}>
                    {t('contacts.worktime').split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
                  </Typography>
                </Card>
              </Stack>
            </Box>

            {/* Map */}
            <Box sx={{ flex: 1 }}>
              <Card 
                elevation={0}
                sx={{ 
                  bgcolor: 'white',
                  border: '1px solid',
                  borderColor: 'grey.200'
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box 
                    sx={{ 
                      height: 500,
                      bgcolor: 'grey.100',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps?q=Туркестан,+ул.+Примерная,+1&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Карта компании"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" fontWeight={700} gutterBottom color="black">
              {t('contacts.ctaDesc')}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
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
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#333'
                  }
                }}
              >
                {t('contacts.ctaWhatsapp')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="tel:+77001234567"
                sx={{ 
                  borderColor: 'black',
                  color: 'black',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#333',
                    bgcolor: 'rgba(0,0,0,0.1)'
                  }
                }}
              >
                {t('contacts.ctaCall')}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 