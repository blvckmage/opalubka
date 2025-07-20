"use client";
import { useState } from "react";
import { Container, Typography, Paper, Box, TextField, Button, Stack, Alert, Card, CardContent, Chip, Avatar, Divider } from "@mui/material";
import { useTranslation } from 'react-i18next';
import CalculateIcon from '@mui/icons-material/Calculate';
import SavingsIcon from '@mui/icons-material/Savings';
import InfoIcon from '@mui/icons-material/Info';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Calculator() {
  const [form, setForm] = useState({
    length: "",
    width: "",
    height: "",
    thickness: "1.2",
    days: "1",
  });
  const [result, setResult] = useState<any|null>(null);
  const [error, setError] = useState("");
  const { t, i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCalc = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    const length = parseFloat(form.length.replace(',', '.'));
    const width = parseFloat(form.width.replace(',', '.'));
    const height = parseFloat(form.height.replace(',', '.'));
    const thickness = parseFloat(form.thickness.replace(',', '.'));
    const days = parseInt(form.days, 10);
    if ([length, width, height, thickness, days].some(val => isNaN(val) || val <= 0)) {
      setError("Пожалуйста, введите корректные значения.");
      return;
    }
    let pricePerSqmPerDay = 300;
    const outerPerimeter = 2 * (length + width);
    const outerArea = outerPerimeter * height;
    const outerPrice = outerArea * pricePerSqmPerDay * days;
    const innerLength = length - thickness;
    const innerWidth = width - thickness;
    const innerPerimeter = 2 * (innerLength + innerWidth);
    const innerArea = innerPerimeter * height;
    const innerPrice = innerArea * pricePerSqmPerDay * days;
    const totalArea = outerArea + innerArea;
    const totalPrice = outerPrice + innerPrice;
    setResult({
      outerArea,
      outerPrice,
      innerArea,
      innerPrice,
      totalArea,
      totalPrice,
      pricePerSqmPerDay,
      days
    });
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
              {t('nav.calculator')}
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
              {t('calculator.heroDesc')}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight={800} color="black">
                  {t('calculator.heroPrice')}
                </Typography>
                <Typography variant="body1">{t('calculator.heroPriceDesc')}</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight={800} color="black">
                  {t('calculator.heroDiscount')}
                </Typography>
                <Typography variant="body1">{t('calculator.heroDiscountDesc')}</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight={800} color="black">
                  {t('calculator.heroDelivery')}
                </Typography>
                <Typography variant="body1">{t('calculator.heroDeliveryDesc')}</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Calculator Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', lg: 'row' }} spacing={6}>
            {/* Calculator Form */}
            <Box sx={{ flex: 1 }}>
              <Card 
                elevation={0}
                sx={{ 
                  bgcolor: 'white',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  p: { xs: 3, md: 5 }
                }}
              >
                <Box display="flex" alignItems="center" mb={4}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 50, height: 50 }}>
                    <CalculateIcon />
                  </Avatar>
                  <Typography variant="h4" fontWeight={700}>
                    {t('calculator.formTitle')}
                  </Typography>
                </Box>

                <form onSubmit={handleCalc}>
                  <Stack spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                      <TextField 
                        label={t('calculator.length')} 
                        name="length" 
                        value={form.length} 
                        onChange={handleChange} 
                        required 
                        fullWidth 
                        type="number" 
                        inputProps={{ step: 0.1, min: 0 }}
                        sx={{ flex: 1 }}
                      />
                      <TextField 
                        label={t('calculator.width')} 
                        name="width" 
                        value={form.width} 
                        onChange={handleChange} 
                        required 
                        fullWidth 
                        type="number" 
                        inputProps={{ step: 0.1, min: 0 }}
                        sx={{ flex: 1 }}
                      />
                    </Stack>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                      <TextField 
                        label={t('calculator.height')} 
                        name="height" 
                        value={form.height} 
                        onChange={handleChange} 
                        required 
                        fullWidth 
                        type="number" 
                        inputProps={{ step: 0.1, min: 0 }}
                        sx={{ flex: 1 }}
                      />
                      <TextField 
                        label={t('calculator.thickness')} 
                        name="thickness" 
                        value={form.thickness} 
                        onChange={handleChange} 
                        required 
                        fullWidth 
                        type="number" 
                        inputProps={{ step: 0.01, min: 0 }}
                        sx={{ flex: 1 }}
                      />
                    </Stack>

                    <TextField 
                      label={t('calculator.rentDays')} 
                      name="days" 
                      value={form.days} 
                      onChange={handleChange} 
                      required 
                      fullWidth 
                      type="number" 
                      inputProps={{ step: 1, min: 1 }}
                    />

                    <Button 
                      type="submit" 
                      variant="contained" 
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
                      {t('calculator.calculate')}
                    </Button>

                    {error && <Alert severity="error">{t('calculator.error')}</Alert>}
                  </Stack>
                </form>
              </Card>
            </Box>

            {/* Results and Info */}
            <Box sx={{ flex: 1 }}>
              {result && (
                <Card 
                  elevation={0}
                  sx={{ 
                    bgcolor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    mb: 4
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom color="primary.main">
                      {t('calculator.resultTitle')}
                    </Typography>
                    
                    <Stack spacing={3}>
                      <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {t('calculator.outer')}:
                        </Typography>
                        <Stack direction="row" spacing={2} mb={1}>
                          <Chip label={`${result.outerArea.toFixed(2)} м²`} size="small" />
                          <Chip label={`${result.outerPrice.toLocaleString()} ₸`} size="small" color="primary" />
                        </Stack>
                      </Box>

                      <Box>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {t('calculator.inner')}:
                        </Typography>
                        <Stack direction="row" spacing={2} mb={1}>
                          <Chip label={`${result.innerArea.toFixed(2)} м²`} size="small" />
                          <Chip label={`${result.innerPrice.toLocaleString()} ₸`} size="small" color="primary" />
                        </Stack>
                      </Box>

                      <Divider />

                      <Box>
                        <Typography variant="h6" fontWeight={700} gutterBottom color="primary.main">
                          {t('calculator.total')}:
                        </Typography>
                        <Stack direction="row" spacing={2} mb={2}>
                          <Chip 
                            label={`${result.totalArea.toFixed(2)} м²`} 
                            size="medium" 
                            sx={{ bgcolor: 'primary.main', color: 'black', fontWeight: 600 }}
                          />
                          <Chip 
                            label={`${result.totalPrice.toLocaleString()} ₸`} 
                            size="medium" 
                            sx={{ bgcolor: 'black', color: 'white', fontWeight: 600 }}
                          />
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                          Тариф: 300 ₸/м²/день
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              )}

              {/* Discounts Info */}
              <Card 
                elevation={0}
                sx={{ 
                  bgcolor: 'white',
                  border: '1px solid',
                  borderColor: 'grey.200'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box display="flex" alignItems="center" mb={3}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 40, height: 40 }}>
                      <SavingsIcon />
                    </Avatar>
                    <Typography variant="h6" fontWeight={600}>
                      {t('calculator.discountsTitle')}
                    </Typography>
                  </Box>
                  
                  <Stack spacing={2}>
                    {Array.isArray(t('calculator.discounts', { returnObjects: true })) && (
                      (t('calculator.discounts', { returnObjects: true }) as string[]).map((d, i) => (
                        <Box key={i} display="flex" alignItems="center">
                          <Box 
                            sx={{ 
                              width: 8, 
                              height: 8, 
                              borderRadius: '50%', 
                              bgcolor: 'primary.main', 
                              mr: 2 
                            }} 
                          />
                          <Typography variant="body2">{d}</Typography>
                        </Box>
                      ))
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Info Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              {t('calculator.infoTitle')}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {t('calculator.infoDesc')}
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
                <CalculateIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {t('calculator.infoStep1')}
              </Typography>
              <Typography color="text.secondary">
                {t('calculator.infoStep1Desc')}
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
                <InfoIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {t('calculator.infoStep2')}
              </Typography>
              <Typography color="text.secondary">
                {t('calculator.infoStep2Desc')}
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
                <WhatsAppIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {t('calculator.infoStep3')}
              </Typography>
              <Typography color="text.secondary">
                {t('calculator.infoStep3Desc')}
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
              {t('calculator.ctaTitle')}
            </Typography>
            <Typography variant="h6" color="black" sx={{ mb: 4, opacity: 0.8 }}>
              {t('calculator.ctaDesc')}
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
                {t('calculator.ctaWhatsapp')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/contacts"
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
                {t('calculator.ctaContact')}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 