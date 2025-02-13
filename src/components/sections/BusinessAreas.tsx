'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/lib/constants/theme';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const businessAreas = [
  {
    key: '1',
    imagePath: '/images/business-area-1.svg',
  },
  {
    key: '2',
    imagePath: '/images/business-area-2.svg',
  },
  {
    key: '3',
    imagePath: '/images/business-area-3.svg',
  },
  {
    key: '4',
    imagePath: '/images/business-area-4.svg',
  },
];

export const BusinessAreas = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="business-areas"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${COLORS.primary.dark}, ${COLORS.primary.main})`,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              {t('business_areas.title')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                opacity: 0.9,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              {t('business_areas.subtitle')}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {businessAreas.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.key}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      p: 4,
                      height: '400px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        background: 'rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        position: 'relative',
                        mb: 4,
                        filter: 'drop-shadow(0 0 12px rgba(246, 177, 122, 0.2))',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          filter: 'drop-shadow(0 0 16px rgba(246, 177, 122, 0.3))',
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <Image
                        src={item.imagePath}
                        alt=""
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: COLORS.secondary.main,
                      }}
                    >
                      {t(`business_areas.areas.${item.key}.title`)}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                      }}
                    >
                      {t(`business_areas.areas.${item.key}.description`)}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};
