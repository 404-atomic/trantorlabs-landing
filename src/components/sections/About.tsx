'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/lib/constants/theme';
import { useRef } from 'react';

export const About = () => {
  const { t } = useTranslation();
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
      className="relative overflow-hidden bg-gradient-180 from-background to-primary-main/5"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
      }}
      ref={containerRef}
    >

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
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/Untitled design.mp4"
                  sx={{
                    maxWidth: '90%',
                    height: 'auto',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
