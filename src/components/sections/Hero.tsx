'use client';

import { Box, Container, Grid, Typography, Button } from '@mui/material';
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
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <Box
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
            transition: 'opacity 0.3s ease',
            opacity: 0.8,
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ 
        position: 'relative', 
        zIndex: 1,
      }}>
        <Grid container spacing={4} alignItems="center"> 
          <Grid item xs={12} md={6}>
            <Box>
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
                    backgroundColor: COLORS.primary.light,
                  },
                }}
              >
                {t('common.contact_us')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
