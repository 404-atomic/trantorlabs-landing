'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/lib/constants/theme';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ExploreIcon from '@mui/icons-material/Explore';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

interface Point {
  title: string;
  description: string;
}

interface TranslatedPoints {
  [key: string]: Point;
}

interface ValueItem {
  title: string;
  description: string;
}

const getIconForKey = (key: string) => {
  switch (key) {
    case 'research':
      return AutoAwesomeIcon;
    case 'exploration':
      return ExploreIcon;
    case 'growth':
      return PsychologyIcon;
    case 'society':
      return TrendingUpIcon;
    default:
      return AutoAwesomeIcon;
  }
};

const visionIcons = [
  RocketLaunchIcon,
  SmartToyIcon,
  HealthAndSafetyIcon,
  PrecisionManufacturingIcon,
];

export const MissionVision = () => {
  const { t } = useTranslation();

  // Safely get vision points with type checking
  const visionPoints = t('vision.points', { returnObjects: true });
  const points = Array.isArray(visionPoints) ? visionPoints : [];

  return (
    <Box
      component="section"
      id="mission-vision"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${COLORS.primary.dark}, ${COLORS.primary.main})`,
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ width: '80%' }}>
        {/* Mission Section */}
        <Box sx={{ mb: { xs: 10, md: 15 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                textAlign: 'center',
                mb: 3
              }}
            >
              {t('mission.title')}
            </Typography>

            <Typography
              component="div"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
                mb: 8,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.7
              }}
              dangerouslySetInnerHTML={{
                __html: t('mission.statement', {
                  interpolation: { escapeValue: false },
                }),
              }}
            />

            <Grid container spacing={4}>
              {Object.entries(t('mission.points', { returnObjects: true }) as TranslatedPoints).map(([key, point], index) => {
                const Icon = getIconForKey(key);
                return (
                  <Grid item xs={12} md={6} key={key}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Box
                        sx={{
                          p: 4,
                          height: '100%',
                          minHeight: '250px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: 3,
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            background: 'rgba(255, 255, 255, 0.08)',
                            borderColor: 'rgba(255, 255, 255, 0.2)'
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Icon sx={{ fontSize: 32, color: COLORS.secondary.main, mr: 2 }} />
                          <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {point.title}
                          </Typography>
                        </Box>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7 }}>
                          {point.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </motion.div>
        </Box>

        {/* Vision Section */}
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                textAlign: 'center',
                mb: 3
              }}
            >
              {t('vision.title')}
            </Typography>

            <Typography
              component="div"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
                mb: 8,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.7
              }}
              dangerouslySetInnerHTML={{
                __html: t('vision.statement', {
                  interpolation: { escapeValue: false },
                }),
              }}
            />

            <Grid container spacing={3}>
              {points.map((point, index) => {
                const Icon = visionIcons[index];
                return (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Box
                        sx={{
                          height: '350px',
                          p: 3,
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: 3,
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            background: 'rgba(255, 255, 255, 0.08)',
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            '& .icon': {
                              transform: 'scale(1.1) rotate(10deg)',
                            }
                          }
                        }}
                      >
                        <motion.div
                          className="icon"
                          initial={{ scale: 0, rotate: -30 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2 + index * 0.1
                          }}
                          style={{
                            marginBottom: '24px',
                            transition: 'transform 0.3s ease'
                          }}
                        >
                          <Icon sx={{ 
                            fontSize: '48px',
                            color: COLORS.secondary.main,
                            opacity: 0.9
                          }} />
                        </motion.div>
                        <Typography 
                          sx={{ 
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: 1.7,
                            textAlign: 'center',
                            fontSize: '1.1rem'
                          }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </motion.div>
        </Box>

        {/* Core Values Section */}
        <Box sx={{ mt: { xs: 10, md: 15 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                textAlign: 'center',
                mb: 3
              }}
            >
              {t('values.title')}
            </Typography>

            <Typography
              component="div"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                textAlign: 'center',
                maxWidth: '900px',
                mx: 'auto',
                mb: 8,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.7
              }}
              dangerouslySetInnerHTML={{
                __html: t('values.statement', {
                  interpolation: { escapeValue: false },
                }),
              }}
            />

            <Grid container spacing={3}>
              {Object.entries(t('values.items', { returnObjects: true })).map(([key, value]: [string, ValueItem], index) => (
                <Grid item xs={12} sm={6} md={3} key={key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        height: '350px',
                        p: 3,
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 3,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          background: 'rgba(255, 255, 255, 0.08)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          '&::before': {
                            transform: 'translateY(0)',
                          }
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: `linear-gradient(90deg, ${COLORS.secondary.main}, ${COLORS.primary.light})`,
                          transform: 'translateY(-100%)',
                          transition: 'transform 0.3s ease'
                        }
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: COLORS.secondary.main,
                          fontWeight: 600,
                          mb: 2,
                          position: 'relative'
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: 1.7,
                          fontSize: '1rem',
                          overflow: 'auto',
                          pr: 1,
                          flex: 1,
                          '&::-webkit-scrollbar': {
                            width: '4px',
                          },
                          '&::-webkit-scrollbar-track': {
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '4px',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            background: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '4px',
                          }
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
