"use client";
import { Container, Typography, Stack, Card, CardMedia, CardContent, Chip, Box, Avatar, Button } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ConstructionIcon from '@mui/icons-material/Construction';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';

const images = [
  {
    id: 1,
    src: '/images/gallery1.jpg',
    caption: {
      ru: 'ЖК "Астана" — монолитные перекрытия',
      kz: '"Астана" ТК — монолитті жабындар',
    },
    category: 'residential',
    location: 'Туркестан',
    year: '2024',
    area: '2500 м²'
  },
  {
    id: 2,
    src: '/images/gallery2.jpg',
    caption: {
      ru: 'Заводской цех — колонны и ригели',
      kz: 'Зауыт цехы — бағаналар мен ригельдер',
    },
    category: 'industrial',
    location: 'Шымкент',
    year: '2023',
    area: '5000 м²'
  },
  {
    id: 3,
    src: '/images/gallery3.jpg',
    caption: {
      ru: 'Частный дом — опалубка перекрытий',
      kz: 'Жеке үй — жабынға арналған қалып',
    },
    category: 'residential',
    location: 'Туркестан',
    year: '2024',
    area: '800 м²'
  },
  {
    id: 4,
    src: '/images/gallery4.jpg',
    caption: {
      ru: 'Торговый центр — монолитные конструкции',
      kz: 'Сауда орталығы — монолитті құрылымдар',
    },
    category: 'commercial',
    location: 'Алматы',
    year: '2023',
    area: '8000 м²'
  },
  {
    id: 5,
    src: '/images/gallery5.jpg',
    caption: {
      ru: 'Многоэтажный жилой комплекс',
      kz: 'Көпқабатты тұрғын кешені',
    },
    category: 'residential',
    location: 'Нур-Султан',
    year: '2024',
    area: '12000 м²'
  },
  {
    id: 6,
    src: '/images/gallery6.jpg',
    caption: {
      ru: 'Промышленное здание — колонны',
      kz: 'Өнеркәсіптік ғимарат — бағаналар',
    },
    category: 'industrial',
    location: 'Караганда',
    year: '2023',
    area: '3500 м²'
  }
];

const categories = [
  { key: 'all', label: { ru: 'Все проекты', kz: 'Барлық жобалар' }, icon: ConstructionIcon },
  { key: 'residential', label: { ru: 'Жилые', kz: 'Тұрғын' }, icon: HomeIcon },
  { key: 'commercial', label: { ru: 'Коммерческие', kz: 'Коммерциялық' }, icon: BusinessIcon },
  { key: 'industrial', label: { ru: 'Промышленные', kz: 'Өнеркәсіптік' }, icon: ConstructionIcon },
];

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const lng = i18n.language.startsWith('kz') ? 'kz' : 'ru';
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

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
              {t('gallery.heroTitle')}
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
              {t('gallery.heroDesc')}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight={800} color="black">
                  50+
                </Typography>
                <Typography variant="body1">{t('gallery.statsProjects')}</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight={800} color="black">
                  15
                </Typography>
                <Typography variant="body1">{t('gallery.statsCities')}</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight={800} color="black">
                  100000+
                </Typography>
                <Typography variant="body1">{t('gallery.statsArea')}</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Filters Section */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {t('gallery.filterTitle')}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {t('gallery.filterDesc')}
            </Typography>
          </Box>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Chip
                  key={category.key}
                  icon={<IconComponent />}
                  label={t(`gallery.category${category.key.charAt(0).toUpperCase() + category.key.slice(1)}`)}
                  onClick={() => setSelectedCategory(category.key)}
                  sx={{
                    bgcolor: selectedCategory === category.key ? 'primary.main' : 'white',
                    color: selectedCategory === category.key ? 'black' : 'text.primary',
                    fontWeight: 600,
                    px: 3,
                    py: 2,
                    fontSize: '1rem',
                    border: '1px solid',
                    borderColor: selectedCategory === category.key ? 'primary.main' : 'grey.300',
                    '&:hover': {
                      bgcolor: selectedCategory === category.key ? 'primary.main' : 'grey.100'
                    }
                  }}
                />
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} flexWrap="wrap">
            {filteredImages.map((img) => (
              <Card 
                key={img.id}
                elevation={0}
                sx={{ 
                  flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
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
                <CardMedia
                  component="img"
                  height="280"
                  image={img.src}
                  alt={img.caption[lng]}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {img.caption[lng]}
                  </Typography>
                  
                  <Stack direction="row" spacing={2} mb={2} flexWrap="wrap">
                    <Chip 
                      label={`${t('gallery.location')}: ${img.location}`} 
                      size="small" 
                      sx={{ bgcolor: 'grey.100' }}
                    />
                    <Chip 
                      label={`${t('gallery.year')}: ${img.year}`} 
                      size="small" 
                      sx={{ bgcolor: 'grey.100' }}
                    />
                    <Chip 
                      label={`${t('gallery.area')}: ${img.area}`} 
                      size="small" 
                      sx={{ bgcolor: 'grey.100' }}
                    />
                  </Stack>
                  
                  <Typography variant="body2" color="text.secondary">
                    {img.category === 'residential' && 'Жилой комплекс с монолитными перекрытиями'}
                    {img.category === 'commercial' && 'Коммерческое здание с современными технологиями'}
                    {img.category === 'industrial' && 'Промышленный объект с надежными конструкциями'}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>

          {filteredImages.length === 0 && (
            <Box textAlign="center" py={8}>
              <Typography variant="h5" color="text.secondary">
                {t('gallery.noProjects')}
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* Achievements Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight={800} textAlign="center" gutterBottom>
            {t('gallery.achievementsTitle')}
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" mb={6}>
            {t('gallery.achievementsDesc')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" alignItems="center" mb={8}>
            <Box textAlign="center">
              <Typography variant="h3" fontWeight={800} color="primary.main">50+</Typography>
              <Typography variant="body1">{t('gallery.achievementsProjects')}</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h3" fontWeight={800} color="primary.main">15</Typography>
              <Typography variant="body1">{t('gallery.achievementsCities')}</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h3" fontWeight={800} color="primary.main">100000+</Typography>
              <Typography variant="body1">{t('gallery.achievementsArea')}</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h3" fontWeight={800} color="primary.main">98%</Typography>
              <Typography variant="body1">{t('gallery.achievementsClients')}</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Join Gallery Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={800} textAlign="center" gutterBottom color="black">
            {t('gallery.joinTitle')}
          </Typography>
          <Typography variant="h6" color="black" textAlign="center" mb={4}>
            {t('gallery.joinDesc')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button variant="contained" color="inherit" size="large" sx={{ fontWeight: 700 }}>
              {t('gallery.joinBtn1')}
            </Button>
            <Button variant="outlined" color="inherit" size="large" sx={{ fontWeight: 700, borderColor: 'black', color: 'black' }}>
              {t('gallery.joinBtn2')}
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
} 