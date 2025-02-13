'use client';

import { Box, Container, Grid, Typography, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/lib/constants/theme';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PublicIcon from '@mui/icons-material/Public';
import SpeedIcon from '@mui/icons-material/Speed';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

interface AdvantageItem {
  title: string;
  description: string;
}

export const Advantages = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const icons = [
    <AutoAwesomeIcon key="tech" />,
    <PsychologyIcon key="spirit" />,
    <PublicIcon key="global" />,
    <SpeedIcon key="agile" />,
    <HandshakeIcon key="network" />,
    <LightbulbIcon key="practical" />,
  ];

  const advantages = Object.entries(t('advantages.items', { returnObjects: true }) as Record<string, AdvantageItem>)
    .map(([key, item]) => ({ ...item, key }));

  return (
    <Box
      component="section"
      id="advantages"
      sx={{
        py: { xs: 10, md: 15 },
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, rgba(246, 177, 122, 0.03) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          width: '30vw',
          height: '30vw',
          background: `radial-gradient(circle, ${COLORS.primary.main}08 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(80px)',
          transform: 'translateY(-50%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            {t('advantages.title')}
          </Typography>

          <Grid container spacing={3}>
            {advantages.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={item.key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '350px',
                      borderRadius: 4,
                      background: 'rgba(255, 255, 255, 0.9)', 
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(246, 177, 122, 0.3)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                        borderColor: 'rgba(246, 177, 122, 0.5)', 
                        '& .icon': {
                          color: COLORS.secondary.main,
                        },
                      },
                    }}
                  >
                    <Box
                      className="icon"
                      sx={{
                        mb: 2,
                        color: COLORS.primary.main,
                        transition: 'all 0.3s ease',
                        '& svg': {
                          fontSize: '2rem',
                        },
                      }}
                    >
                      {icons[index]}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'text.primary',
                        minHeight: { xs: 'auto', md: '3em' },
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};
