"use client";

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="sm" sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h2" fontWeight={700} color="primary" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        {t('notfound.title')}
      </Typography>
      <Typography color="text.secondary" mb={4}>
        {t('notfound.desc')}
      </Typography>
      <Button variant="contained" color="primary" component={Link} href="/">
        {t('notfound.homeBtn')}
      </Button>
    </Container>
  );
} 