'use client';

import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/lib/constants/theme';
import { useRef } from 'react';
import Image from 'next/image';

export const About = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 15 },
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, rgba(246, 177, 122, 0.03) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
      ref={containerRef}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '35vw',
          height: '35vw',
          background: `radial-gradient(circle, ${COLORS.primary.main}08 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '25vw',
          height: '25vw',
          background: `radial-gradient(circle, ${COLORS.secondary.main}08 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: 'center',
                  mb: 6,
                  background: `linear-gradient(135deg, ${COLORS.primary.main} 0%, ${COLORS.secondary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t('about.title')}
              </Typography>
              <Box
                sx={{
                  '& > p': {
                    mb: 3,
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    '&:last-child': { mb: 0 },
                  },
                  '& strong': {
                    color: COLORS.secondary.main,
                    fontWeight: 600,
                  },
                }}
              >
                <Typography component="p" dangerouslySetInnerHTML={{ __html: t('about.description.part1') }} />
                <Typography component="p" dangerouslySetInnerHTML={{ __html: t('about.description.part2') }} />
                <Typography component="p" dangerouslySetInnerHTML={{ __html: t('about.description.part3') }} />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              style={{ y, opacity }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '300px', md: '400px' },
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 24px 48px rgba(0, 0, 0, 0.1)',
                  background: theme.palette.background.paper,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${COLORS.secondary.main}10 0%, ${COLORS.primary.main}10 100%)`,
                    zIndex: 1,
                    pointerEvents: 'none',
                  },
                }}
              >
                <Image
                  src="/images/about-illustration.svg"
                  alt={t('about.illustration_alt')}
                  width={600}
                  height={450}
                  style={{ 
                    maxWidth: '90%',
                    height: 'auto',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  priority
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
