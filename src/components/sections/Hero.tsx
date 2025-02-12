'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/lib/constants/theme';
import { useRef } from 'react';

export const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax and fade effects
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <Box
      component="section"
      ref={containerRef}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${COLORS.primary.dark}, ${COLORS.primary.main})`,
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          opacity: 1,
        }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1000],
              opacity: [0, 0.3, 0],
              scale: [1, 1.1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1 + 0.5}px`,
              height: `${Math.random() * 30 + 15}px`,
              background: 'white',
              borderRadius: '4px',
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </Box>

      {/* Main content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div style={{ opacity, y: y1 }}>
          <Stack spacing={4} alignItems="center" textAlign="center">
            {/* Main title with enhanced readability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 2,
                  color: 'white',
                  letterSpacing: '-0.02em',
                  textShadow: [
                    `0 0 30px ${COLORS.primary.dark}`,
                    `0 0 60px ${COLORS.primary.dark}80`,
                    `0 0 2px ${COLORS.secondary.main}`,
                  ].join(', '),
                  position: 'relative',
                  zIndex: 2,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '-20px -30px',
                    background: `radial-gradient(circle at center, ${COLORS.secondary.main}20 0%, transparent 70%)`,
                    filter: 'blur(20px)',
                    zIndex: -1,
                  },
                }}
              >
                {t('hero.title')}
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.95)',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.8,
                  position: 'relative',
                  mb: 4,
                  letterSpacing: '0.02em',
                  textShadow: `0 2px 10px ${COLORS.primary.dark}`,
                }}
              >
                {t('hero.subtitle')}
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: COLORS.secondary.main,
                    color: COLORS.primary.main,
                    px: 6,
                    py: 2,
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    boxShadow: `0 8px 24px ${COLORS.secondary.main}40`,
                    '&:hover': {
                      bgcolor: COLORS.secondary.main,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 12px 28px ${COLORS.secondary.main}60`,
                    },
                  }}
                  href="#contact"
                >
                  {t('hero.contact_button')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    borderWidth: 2,
                    color: 'white',
                    px: 6,
                    py: 2,
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                  href="#about"
                >
                  {t('hero.learn_more')}
                </Button>
              </Stack>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};
