'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/lib/constants/theme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        py: { xs: 10, md: 15 },
        px: { xs: 4, md: 20 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${COLORS.primary.dark}, ${COLORS.primary.main})`,
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.5, 0.3, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '40vw',
            height: '40vw',
            background: `radial-gradient(circle, ${COLORS.secondary.main}20 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1,
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '35vw',
            height: '35vw',
            background: `radial-gradient(circle, ${COLORS.primary.light}20 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Background Image */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          sx={{
            position: 'absolute',
            top: { xs: '100px', sm: '350px', md: '130px' },
            right: { xs: '0px', sm: '0', md: '40px' },
            width: { xs: '100%', sm: '70%', md: '60%' },
            height: '100%',
            backgroundImage: 'url(/vecteezy_robotic-hand-holding-ai-artificial-intelligence-chip_24595814.png)',
            backgroundSize: { xs: '100%', sm: '110%', md: 'contain' },
            backgroundPosition: { xs: 'center top', sm: 'center bottom', md: 'right center' },
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(1.1) contrast(1.1)',
            transition: 'opacity 0.3s ease',
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ 
        position: 'relative', 
        zIndex: 1,
      }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { 
                    xs: '3rem', 
                    sm: '4rem', 
                    md: '7rem', 
                    lg: '6rem' 
                  },
                  fontWeight: 800, 
                  color: 'white',
                  mb: 4, 
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)', 
                  letterSpacing: '-0.02em', 
                  lineHeight: 1.1, 
                }}
              >
                {t('hero.title')}
              </Typography>

              <Typography
                sx={{
                  fontSize: { 
                    xs: '1.25rem', 
                    sm: '1.5rem', 
                    md: '1.75rem', 
                  },
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 5, 
                  maxWidth: '800px', 
                  lineHeight: 1.5, 
                  fontWeight: 400, 
                }}
              >
                {t('hero.subtitle')}
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="#contact"
                sx={{
                  px: 6, 
                  py: 2, 
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.3rem', 
                  fontWeight: 600, 
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                  },
                }}
              >
                {t('common.contact_us')}
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
