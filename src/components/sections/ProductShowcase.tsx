'use client';

import { Box, Container, Grid, Typography, Button, useTheme, Paper, Tabs, Tab } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/lib/constants/theme';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';
import { useRef, useState, useEffect } from 'react';
import { keyframes } from '@mui/system';

export const ProductShowcase = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const containerRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
      ${COLORS.secondary.main} 10%, 
      ${COLORS.primary.main} 30%, 
      ${COLORS.secondary.main} 40%, 
      ${COLORS.primary.main} 80%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    transition: 'background 0.15s ease',
    textShadow: '0 0 30px rgba(246, 177, 122, 0.3)',
    backgroundSize: '150% 200%',
  };

  const pulseAnimation = keyframes`
    0% {
      transform: scale(1);
      opacity: 0.4;
    }
    50% {
      transform: scale(1.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0.4;
    }
  `;

  const technicalFeatures = [
    {
      icon: SmartToyIcon,
      title: t('product.technical.model.title'),
      description: t('product.technical.model.description'),
    },
    {
      icon: SecurityIcon,
      title: t('product.technical.privacy.title'),
      description: t('product.technical.privacy.description'),
    },
    {
      icon: GroupsIcon,
      title: t('product.technical.community.title'),
      description: t('product.technical.community.description'),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      component="section"
      id="products"
      sx={{
        py: { xs: 10, md: 15 },
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, rgba(246, 177, 122, 0.05) 100%)`,
        overflow: 'hidden',
        position: 'relative',
      }}
      ref={containerRef}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '40vw',
          height: '40vw',
          background: `radial-gradient(circle, ${COLORS.secondary.main}15 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '30vw',
          height: '30vw',
          background: `radial-gradient(circle, ${COLORS.primary.main}10 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <Grid container spacing={{ xs: 6, md: 8 }} justifyContent="center" sx={{ mb: { xs: 10, md: 15 } }}>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 6 }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem', lg: '6.5rem' },
                      lineHeight: 1.1,
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      maxWidth: '90%',
                      mx: 'auto',
                      mb: 1,
                      ...gradientStyle,
                    }}
                  >
                    {t('product.title_line1')}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem', lg: '7.5rem' },
                      lineHeight: 1.1,
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      maxWidth: '90%',
                      mx: 'auto',
                      ...gradientStyle,
                    }}
                  >
                    {t('product.title_line2')}
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 4,
                    color: 'text.primary',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    fontSize: { xs: '1.75rem', sm: '1.75rem', md: '2.5rem' },
                    maxWidth: '800px',
                    mx: 'auto',
                  }}
                >
                  {t('product.subtitle')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 6,
                    color: 'text.secondary',
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
                    lineHeight: 1.6,
                    maxWidth: '800px',
                    mx: 'auto',
                    opacity: 0.9,
                  }}
                >
                  {t('product.description')}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: COLORS.secondary.main,
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    boxShadow: '0 8px 16px rgba(246, 177, 122, 0.2)',
                    '&:hover': {
                      bgcolor: COLORS.primary.main,
                      boxShadow: '0 12px 20px rgba(246, 177, 122, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('product.cta')}
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Core Values & Technical Features Tabs */}
        <Box sx={{ mb: { xs: 10, md: 15 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                centered
                textColor="primary"
                TabIndicatorProps={{
                  style: {
                    background: `linear-gradient(135deg, ${COLORS.primary.main} 0%, ${COLORS.secondary.main} 100%)`,
                  },
                }}
                sx={{
                  '& .MuiTab-root': {
                    fontSize: { xs: '1rem', sm: '1.6rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    minWidth: { xs: '140px', sm: '200px' },
                    color: 'text.secondary',
                    '&.Mui-selected': {
                      color: COLORS.primary.main,
                    },
                  },
                }}
              >
                <Tab label={t('product.values.title')} />
                <Tab label={t('product.technical.title')} />
              </Tabs>
            </Box>

            <Box sx={{ mt: 4 }}>
              {/* Core Values Tab */}
              <Box
                role="tabpanel"
                hidden={activeTab !== 0}
                sx={{ 
                  transition: 'opacity 0.3s ease',
                  opacity: activeTab === 0 ? 1 : 0,
                }}
              >
                <Grid container spacing={4} justifyContent="center">
                  {[
                    {
                      key: 'healing',
                      icon: <FavoriteIcon sx={{ fontSize: 40, color: COLORS.secondary.main }} />,
                    },
                    {
                      key: 'growth',
                      icon: <PsychologyIcon sx={{ fontSize: 40, color: COLORS.secondary.main }} />,
                    },
                    {
                      key: 'dialogue',
                      icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: COLORS.secondary.main }} />,
                    },
                    {
                      key: 'privacy',
                      icon: <SecurityIcon sx={{ fontSize: 40, color: COLORS.secondary.main }} />,
                    },
                  ].map((feature, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 4,
                            height: '100%',
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 2,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.06)',
                              transform: 'translateY(-4px)',
                              boxShadow: `0 12px 20px ${COLORS.primary.main}10`,
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 80,
                              height: 80,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '50%',
                              mb: 3,
                              background: `linear-gradient(135deg, ${COLORS.primary.main}10 0%, ${COLORS.secondary.main}10 100%)`,
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Typography
                            variant="h5"
                            sx={{
                              mb: 2,
                              fontWeight: 700,
                              color: 'text.primary',
                            }}
                          >
                            {t(`product.features.${feature.key}.title`)}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'text.secondary',
                              lineHeight: 1.8,
                            }}
                          >
                            {t(`product.features.${feature.key}.description`)}
                          </Typography>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Technical Features Tab */}
              <Box
                role="tabpanel"
                hidden={activeTab !== 1}
                sx={{ 
                  transition: 'opacity 0.3s ease',
                  opacity: activeTab === 1 ? 1 : 0,
                }}
              >
                <Grid container spacing={4} justifyContent="center">
                  {technicalFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Grid item xs={12} sm={6} md={3} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Paper
                            elevation={0}
                            sx={{
                              p: 3,
                              height: '100%',
                              background: 'rgba(255, 255, 255, 0.03)',
                              backdropFilter: 'blur(10px)',
                              borderRadius: 2,
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              transition: 'all 0.3s ease',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              textAlign: 'center',
                              '&:hover': {
                                background: 'rgba(255, 255, 255, 0.06)',
                                transform: 'translateY(-4px)',
                                boxShadow: `0 12px 20px ${COLORS.secondary.main}10`,
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: 60,
                                height: 60,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                mb: 2,
                                background: `linear-gradient(135deg, ${COLORS.primary.main}10 0%, ${COLORS.secondary.main}10 100%)`,
                              }}
                            >
                              <Icon
                                sx={{
                                  fontSize: 28,
                                  color: COLORS.secondary.main,
                                  opacity: 0.9,
                                }}
                              />
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{
                                mb: 1.5,
                                fontWeight: 600,
                                color: 'text.primary',
                              }}
                            >
                              {t(feature.title)}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                lineHeight: 1.6,
                              }}
                            >
                              {t(feature.description)}
                            </Typography>
                          </Paper>
                        </motion.div>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </motion.div>
        </Box>

        {/* Development Roadmap */}
        <Box sx={{ mb: { xs: 10, md: 15 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: 'text.primary',
                letterSpacing: '-0.02em',
              }}
            >
              {t('product.roadmap.title')}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{
                mb: 8,
                maxWidth: 800,
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.6,
              }}
            >
              {t('product.roadmap.description')}
            </Typography>
          </motion.div>

          <Timeline 
            position="alternate"
            sx={{
              p: { xs: 0, sm: 2 },
              '& .MuiTimelineItem-root:before': {
                flex: { xs: 0, sm: 1 },
              },
            }}
          >
            {[
              {
                title: t('product.roadmap.foundation'),
                content: t('product.roadmap.foundation_desc'),
                status: 'completed',
                icon: <AutoAwesomeIcon />,
              },
              {
                title: t('product.roadmap.intelligence'),
                content: t('product.roadmap.intelligence_desc'),
                status: 'current',
                icon: <SmartToyIcon />,
              },
              {
                title: t('product.roadmap.social'),
                content: t('product.roadmap.social_desc'),
                status: 'upcoming',
                icon: <GroupsIcon />,
              },
              {
                title: t('product.roadmap.advanced'),
                content: t('product.roadmap.advanced_desc'),
                status: 'upcoming',
                icon: <SecurityIcon />,
              },
            ].map((phase, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      p: 1.5,
                      position: 'relative',
                      bgcolor: phase.status === 'completed'
                        ? COLORS.secondary.main
                        : phase.status === 'current'
                          ? COLORS.primary.main
                          : 'grey.300',
                      boxShadow: phase.status === 'current'
                        ? `0 0 0 4px ${COLORS.primary.main}20`
                        : phase.status === 'completed'
                          ? `0 0 0 4px ${COLORS.secondary.main}20`
                          : 'none',
                      ...(phase.status === 'current' && {
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: -4,
                          top: -4,
                          right: -4,
                          bottom: -4,
                          borderRadius: '50%',
                          background: COLORS.primary.main,
                          animation: `${pulseAnimation} 2s ease-in-out infinite`,
                        }
                      }),
                    }}
                  >
                    {phase.icon}
                  </TimelineDot>
                  {index < 3 && (
                    <TimelineConnector 
                      sx={{
                        bgcolor: phase.status === 'completed' 
                          ? COLORS.secondary.main 
                          : 'grey.300',
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      background: phase.status === 'current'
                        ? `linear-gradient(135deg, ${COLORS.primary.main}10 0%, ${COLORS.secondary.main}10 100%)`
                        : 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: phase.status === 'current'
                        ? 'rgba(246, 177, 122, 0.2)'
                        : 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: phase.status === 'current'
                          ? `linear-gradient(135deg, ${COLORS.primary.main}15 0%, ${COLORS.secondary.main}15 100%)`
                          : 'rgba(255, 255, 255, 0.06)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        color: phase.status === 'current' ? COLORS.primary.main : 'text.primary',
                      }}
                    >
                      {phase.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {phase.content}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};
