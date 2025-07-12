"use client";
import { Box, Container, Typography, Card, CardContent, CardMedia, Stack, Button, Avatar, Chip } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from 'react-i18next';

const products = [
  {
    id: 1,
    name: {
      ru: 'Опалубка для колонн',
      kz: 'Бағанаға арналған қалып',
    },
    image: '/images/opalubka-kolonny.jpg',
    description: {
      ru: 'Корейская мелкощитовая опалубка для колонн. Размеры от 30см и выше. Высокая прочность, быстрая сборка.',
      kz: 'Бағаналарға арналған корейлік ұсақщитті қалып. 30см және одан жоғары өлшемдер. Жоғары беріктік, тез жинау.',
    },
    priceDay: 350,
    priceMonth: 250,
    unit: 'тг/м²',
    minDays: 3,
    features: ['Размеры от 30см и выше', 'Высокая прочность', 'Быстрая сборка'],
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2,
    name: {
      ru: 'Опалубка для ригелей',
      kz: 'Ригельге арналған қалып',
    },
    image: '/images/opalubka-rigel.jpg',
    description: {
      ru: 'Опалубка для ригелей и балок. Размеры от 30см и выше. Быстрая установка, надёжность.',
      kz: 'Ригельдер мен арқалықтарға арналған қалып. 30см және одан жоғары өлшемдер. Жылдам орнату, сенімділік.',
    },
    priceDay: 350,
    priceMonth: 250,
    unit: 'тг/м²',
    minDays: 3,
    features: ['Размеры от 30см и выше', 'Быстрая установка', 'Надёжность'],
    rating: 4.7,
    reviews: 18
  },
  {
    id: 3,
    name: {
      ru: 'Стеновая опалубка',
      kz: 'Қабырға қалыбы',
    },
    image: '/images/opalubka-stena.jpg',
    description: {
      ru: 'Стеновая опалубка от 30см до 5м высоту со специальными креплениями. Универсальность и надёжность.',
      kz: '30см-ден 5м-ге дейінгі биіктіктегі қабырға қалыбы арнайы бекіткіштермен. Әмбебаптылық және сенімділік.',
    },
    priceDay: 400,
    priceMonth: 280,
    unit: 'тг/м²',
    minDays: 3,
    features: ['Высота от 30см до 5м', 'Специальные крепления', 'Универсальность'],
    rating: 4.9,
    reviews: 31
  },
  {
    id: 4,
    name: {
      ru: 'Монолитные леса',
      kz: 'Монолитті лестер',
    },
    image: '/images/monolitnye-lesa.jpg',
    description: {
      ru: 'Монолитные леса от 2м до 4.50м высота. Прочная конструкция, безопасность работ.',
      kz: '2м-ден 4.50м-ге дейінгі биіктіктегі монолитті лестер. Берік құрылыс, жұмыс қауіпсіздігі.',
    },
    priceDay: 500,
    priceMonth: 350,
    unit: 'тг/м²',
    minDays: 3,
    features: ['Высота от 2м до 4.50м', 'Прочная конструкция', 'Безопасность'],
    rating: 4.8,
    reviews: 22
  },
  {
    id: 5,
    name: {
      ru: 'Струбцина (домкраты)',
      kz: 'Струбцина (домкраттар)',
    },
    image: '/images/strubcina.jpg',
    description: {
      ru: 'Струбцина (домкраты) от 1.5м до 4.50м. Надёжные крепления для опалубки.',
      kz: '1.5м-ден 4.50м-ге дейінгі струбцина (домкраттар). Қалыптарға арналған сенімді бекіткіштер.',
    },
    priceDay: 200,
    priceMonth: 150,
    unit: 'тг/шт',
    minDays: 3,
    features: ['Длина от 1.5м до 4.50м', 'Надёжные крепления', 'Простота использования'],
    rating: 4.6,
    reviews: 15
  },
  {
    id: 6,
    name: {
      ru: 'Опалубка для перекрытий',
      kz: 'Жабынға арналған қалып',
    },
    image: '/images/opalubka-perekrytie.jpg',
    description: {
      ru: 'Универсальная опалубка для перекрытий. Лёгкая, удобная, заводское качество.',
      kz: 'Жабындарға арналған әмбебап қалып. Жеңіл, ыңғайлы, зауыттық сапа.',
    },
    priceDay: 350,
    priceMonth: 250,
    unit: 'тг/м²',
    minDays: 3,
    features: ['Универсальность', 'Лёгкость', 'Заводское качество'],
    rating: 4.9,
    reviews: 31
  },
];

export default function Catalog() {
  const { t, i18n } = useTranslation();
  const lng = i18n.language.startsWith('kz') ? 'kz' : 'ru';
  
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
              {t('nav.catalog')}
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4,
                opacity: 0.9,
                fontWeight: 500,
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Профессиональная опалубка для любых строительных задач
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Box display="flex" alignItems="center" justifyContent="center">
                <LocalShippingIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography>Быстрая доставка</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <AccessTimeIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography>Гибкие сроки аренды</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <ConstructionIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography>Техническая поддержка</Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Products Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 4
            }}
          >
            {products.map((product) => (
              <Card 
                key={product.id}
                elevation={0}
                sx={{ 
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
                  height="200"
                  image={product.image}
                  alt={product.name[lng]}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 40, height: 40 }}>
                      <ConstructionIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {product.name[lng]}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <StarIcon sx={{ color: 'primary.main', fontSize: 16, mr: 0.5 }} />
                        <Typography variant="body2" sx={{ mr: 1 }}>
                          {product.rating}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ({product.reviews} отзывов)
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" mb={3}>
                    {product.description[lng]}
                  </Typography>
                  
                  <Stack spacing={1} mb={3}>
                    {product.features.map((feature, index) => (
                      <Box key={index} display="flex" alignItems="center">
                        <Box 
                          sx={{ 
                            width: 6, 
                            height: 6, 
                            borderRadius: '50%', 
                            bgcolor: 'primary.main', 
                            mr: 1.5 
                          }} 
                        />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    ))}
                  </Stack>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" fontWeight={700} color="primary.main" gutterBottom>
                      {product.priceDay} {product.unit}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t('catalog.perDay')} • {product.priceMonth} {product.unit} {t('catalog.perMonth')}
                    </Typography>
                    <Chip 
                      label={`Мин. ${product.minDays} ${t('catalog.minDays')}`}
                      size="small"
                      sx={{ mt: 1, bgcolor: 'grey.100' }}
                    />
                  </Box>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    href="/how-to-rent"
                    sx={{ 
                      bgcolor: 'black',
                      color: 'white',
                      fontWeight: 600,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: '#333'
                      }
                    }}
                  >
                    {t('catalog.rentBtn')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Почему выбирают нас?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Мы предлагаем лучшие условия аренды опалубки в Туркестане
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
                <LocalShippingIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Быстрая доставка
              </Typography>
              <Typography color="text.secondary">
                Доставляем опалубку в течение 24 часов по Туркестану и близлежащим районам
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
                <AccessTimeIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Гибкие сроки
              </Typography>
              <Typography color="text.secondary">
                Арендуйте от 3 дней до нескольких месяцев. Оплата только за фактическое время
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
                <ConstructionIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Техподдержка
              </Typography>
              <Typography color="text.secondary">
                Наши специалисты помогут с монтажом и ответят на все вопросы
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
} 