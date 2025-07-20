"use client";
import { Container, Typography, Box, TextField, MenuItem, Button, Stack, Alert, Avatar, Card, CardContent } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function HowToRent() {
  const { t, i18n } = useTranslation();
  const lng = i18n.language.startsWith('kz') ? 'kz' : 'ru';
  const steps = t('how.steps', { returnObjects: true }) as string[];
  const productTypes = t('howToRent.productTypes', { returnObjects: true }) as string[];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    area: "",
    days: "",
    comment: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<{ name?: string; value: unknown }>) => {
    setForm({ ...form, [e.target.name as string]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/api/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", phone: "", email: "", type: "", area: "", days: "", comment: "", location: "" });
      } else {
        setError(t('contacts.sendError'));
      }
    } catch {
      setError(t('contacts.networkError'));
    } finally {
      setLoading(false);
    }
  };

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
              {t('nav.how')}
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4,
                opacity: 0.9,
                fontWeight: 500,
                maxWidth: 700,
                mx: 'auto'
              }}
            >
              {t('howToRent.heroDesc')}
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
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
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

      {/* Road Steps Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              {t('howToRent.roadTitle')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {t('howToRent.roadDesc')}
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* Vertical Road Path */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: 4,
                background: 'linear-gradient(180deg, #FFD600 0%, #FFA000 50%, #FFD600 100%)',
                borderRadius: 2,
                zIndex: 1,
                transform: 'translateX(-50%)',
                display: { xs: 'none', md: 'block' }
              }}
            />

            <Stack 
              direction="column" 
              spacing={4}
              sx={{ position: 'relative', zIndex: 2 }}
            >
              {steps.map((step: string, index: number) => (
                <Box key={index} sx={{ position: 'relative' }}>
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '50%',
                        bottom: -20,
                        transform: 'translateX(-50%)',
                        zIndex: 3,
                        display: { xs: 'none', md: 'block' }
                      }}
                    >
                      <ArrowForwardIcon 
                        sx={{ 
                          fontSize: 40, 
                          color: '#FFA000',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                          transform: 'rotate(90deg)'
                        }} 
                      />
                    </Box>
                  )}

                  <Card 
                    elevation={0}
                    sx={{ 
                      bgcolor: 'white',
                      border: '2px solid',
                      borderColor: 'primary.main',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      maxWidth: 600,
                      mx: 'auto',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 25px rgba(255, 214, 0, 0.3)',
                        borderColor: '#FFA000'
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: { xs: '50%', md: -8 },
                        transform: { xs: 'translateX(-50%)', md: 'translateY(-50%)' },
                        width: 16,
                        height: 16,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        border: '4px solid white',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        display: { xs: 'none', md: 'block' }
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center', pt: 6 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: 'primary.main', 
                          width: 80, 
                          height: 80, 
                          mx: 'auto', 
                          mb: 3,
                          fontSize: '2rem',
                          fontWeight: 700,
                          border: '4px solid white',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      >
                        {index + 1}
                      </Avatar>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {step}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Form Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              {t('howToRent.formTitle')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {t('howToRent.formDesc')}
            </Typography>
          </Box>

          <Card 
            elevation={0}
            sx={{ 
              bgcolor: 'white',
              border: '1px solid',
              borderColor: 'grey.200',
              p: { xs: 3, md: 5 }
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <TextField 
                    label={t('contacts.name')} 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                    fullWidth
                    sx={{ flex: 1 }}
                  />
                  <TextField 
                    label={t('contacts.phone')} 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange} 
                    required 
                    fullWidth
                    sx={{ flex: 1 }}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <TextField 
                    label={t('howToRent.email')} 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    type="email" 
                    fullWidth
                    sx={{ flex: 1 }}
                  />
                  <TextField 
                    select 
                    label={t('contacts.type')} 
                    name="type" 
                    value={form.type} 
                    onChange={handleChange} 
                    required 
                    fullWidth
                    sx={{ flex: 1 }}
                  >
                    {productTypes.map((type) => (
                      <MenuItem key={type} value={type}>{type}</MenuItem>
                    ))}
                  </TextField>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <TextField 
                    label={t('contacts.area')} 
                    name="area" 
                    value={form.area} 
                    onChange={handleChange} 
                    required 
                    fullWidth
                    sx={{ flex: 1 }}
                  />
                  <TextField 
                    label={t('contacts.days')} 
                    name="days" 
                    value={form.days} 
                    onChange={handleChange} 
                    required 
                    fullWidth
                    sx={{ flex: 1 }}
                  />
                </Stack>

                <TextField 
                  label={t('contacts.location')} 
                  name="location" 
                  value={form.location || ''} 
                  onChange={handleChange} 
                  required 
                  fullWidth
                />

                <TextField 
                  label={t('contacts.comment')} 
                  name="comment" 
                  value={form.comment} 
                  onChange={handleChange} 
                  multiline 
                  rows={3} 
                  fullWidth
                />

                <Button 
                  type="submit" 
                  variant="contained" 
                  fullWidth 
                  disabled={loading} 
                  size="large"
                  sx={{ 
                    bgcolor: 'black',
                    color: 'white',
                    fontWeight: 600,
                    py: 2,
                    fontSize: '1.1rem',
                    '&:hover': {
                      bgcolor: '#333'
                    }
                  }}
                >
                  {loading ? t('contacts.sending') : t('contacts.sendBtn')}
                </Button>
              </Stack>
            </form>

            {success && (
              <Alert severity="success" sx={{ mt: 3 }}>
                {t('contacts.success')}
              </Alert>
            )}
            {error && (
              <Alert severity="error" sx={{ mt: 3 }}>
                {error}
              </Alert>
            )}
          </Card>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              {t('howToRent.benefitsTitle')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {t('howToRent.benefitsDesc')}
            </Typography>
          </Box>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Avatar 
                sx={{ 
                  bgcolor: 'primary.main', 
                  width: 80, 
                  height: 80, 
                  mx: 'auto', 
                  mb: 3 
                }}
              >
                <AssignmentIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {t('howToRent.benefitSimple')}
              </Typography>
              <Typography color="text.secondary">
                {t('howToRent.benefitSimpleDesc')}
              </Typography>
            </Box>

            <Box sx={{ flex: 1, textAlign: 'center' }}>
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
                {t('howToRent.benefitFast')}
              </Typography>
              <Typography color="text.secondary">
                {t('howToRent.benefitFastDesc')}
              </Typography>
            </Box>

            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Avatar 
                sx={{ 
                  bgcolor: 'primary.main', 
                  width: 80, 
                  height: 80, 
                  mx: 'auto', 
                  mb: 3 
                }}
              >
                <PaymentIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {t('howToRent.benefitFlexible')}
              </Typography>
              <Typography color="text.secondary">
                {t('howToRent.benefitFlexibleDesc')}
              </Typography>
            </Box>

            <Box sx={{ flex: 1, textAlign: 'center' }}>
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
                {t('howToRent.benefitSupport')}
              </Typography>
              <Typography color="text.secondary">
                {t('howToRent.benefitSupportDesc')}
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" fontWeight={700} gutterBottom color="black">
              {t('howToRent.ctaTitle')}
            </Typography>
            <Typography variant="h6" color="black" sx={{ mb: 4, opacity: 0.8 }}>
              {t('howToRent.ctaDesc')}
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
                WhatsApp
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
                Позвонить
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 