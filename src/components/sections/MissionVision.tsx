'use client';

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  useTheme,
  Card,
  Divider,
  Chip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/lib/constants/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DiamondIcon from '@mui/icons-material/Diamond';
import { useState } from 'react';

export const MissionVision = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>('mission');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionTitle = ({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', gap: 2, color: '#F6B17A' }}>
      {icon}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: 'white',
          textAlign: 'center',
        }}
      >
        {children}
      </Typography>
    </Box>
  );

  const ContentCard = ({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) => (
    <Card
      sx={{
        p: 3,
        height: '100%',
        background: highlight ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          background: highlight ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.12)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {children}
    </Card>
  );

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        background: `linear-gradient(135deg, ${COLORS.primary.dark}, ${COLORS.primary.main})`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            {/* Mission Accordion */}
            <Accordion
              expanded={expanded === 'mission'}
              onChange={handleChange('mission')}
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                mb: 2,
                '&:before': { display: 'none' },
                boxShadow: 'none',
                '& .MuiAccordionSummary-root': {
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'inherit' }} />}
                sx={{ px: 4, py: 2 }}
              >
                <AccordionTitle icon={<RocketLaunchIcon sx={{ color: 'inherit' }} />}>
                  {t('mission.title')}
                </AccordionTitle>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 4, py: 4 }}>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 4,
                        fontWeight: 500,
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.9)',
                        maxWidth: '80%',
                        mx: 'auto',
                        lineHeight: 1.8,
                      }}
                    >
                      {t('mission.statement')}
                    </Typography>
                    <Divider sx={{ mb: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <Grid container spacing={3}>
                      {Object.entries(t('mission.points', { returnObjects: true })).map(([key, point]: [string, any], index) => (
                        <Grid item xs={12} sm={6} key={key}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <ContentCard highlight>
                              <Typography variant="h6" sx={{ mb: 2, color: COLORS.secondary.main, fontWeight: 600 }}>
                                {point.title}
                              </Typography>
                              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
                                {point.description}
                              </Typography>
                            </ContentCard>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </AnimatePresence>
              </AccordionDetails>
            </Accordion>

            {/* Vision Accordion */}
            <Accordion
              expanded={expanded === 'vision'}
              onChange={handleChange('vision')}
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                mb: 2,
                '&:before': { display: 'none' },
                boxShadow: 'none',
                '& .MuiAccordionSummary-root': {
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'inherit' }} />}
                sx={{ px: 4, py: 2 }}
              >
                <AccordionTitle icon={<VisibilityIcon sx={{ color: 'inherit' }} />}>
                  {t('vision.title')}
                </AccordionTitle>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 4, py: 4 }}>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 4,
                        fontWeight: 500,
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.9)',
                        maxWidth: '80%',
                        mx: 'auto',
                        lineHeight: 1.8,
                      }}
                    >
                      {t('vision.statement')}
                    </Typography>
                    <Divider sx={{ mb: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    <Grid container spacing={2}>
                      {(t('vision.points', { returnObjects: true }) as string[]).map((point, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <ContentCard>
                              <Box sx={{ 
                                height: '100%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                textAlign: 'center' 
                              }}>
                                <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7 }}>
                                  {point}
                                </Typography>
                              </Box>
                            </ContentCard>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </AnimatePresence>
              </AccordionDetails>
            </Accordion>

            {/* Values Accordion */}
            <Accordion
              expanded={expanded === 'values'}
              onChange={handleChange('values')}
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                '&:before': { display: 'none' },
                boxShadow: 'none',
                '& .MuiAccordionSummary-root': {
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'inherit' }} />}
                sx={{ px: 4, py: 2 }}
              >
                <AccordionTitle icon={<DiamondIcon sx={{ color: 'inherit' }} />}>
                  {t('values.title')}
                </AccordionTitle>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 4, py: 4 }}>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Grid container spacing={3}>
                      {Object.entries(t('values.items', { returnObjects: true })).map(([key, value]: [string, any], index) => (
                        <Grid item xs={12} sm={6} md={3} key={key}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <ContentCard>
                              <Chip
                                label={value.title}
                                sx={{
                                  mb: 2,
                                  bgcolor: COLORS.secondary.main,
                                  color: 'white',
                                  fontWeight: 600,
                                  '& .MuiChip-label': { px: 2 },
                                }}
                              />
                              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}>
                                {value.description}
                              </Typography>
                            </ContentCard>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </AnimatePresence>
              </AccordionDetails>
            </Accordion>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
