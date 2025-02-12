'use client';

import { Box, Container, Grid, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { COLORS } from '@/lib/constants/theme';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Logo } from '@/components/common/Logo';
import { useMemo } from 'react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: GitHubIcon,
    href: 'https://github.com/TrantorLabs',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://linkedin.com/company/trantorlabs',
  },
  {
    name: 'Twitter',
    icon: TwitterIcon,
    href: 'https://twitter.com/TrantorLabs',
  },
];

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#F8F9FA',
        color: '#2D3250',
        py: { xs: 6, md: 8 },
        borderTop: '1px solid rgba(45, 50, 80, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: 2 }}>
                <Logo sx={{ transform: 'scale(0.9)', transformOrigin: 'left' }} />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(45, 50, 80, 0.7)',
                  mb: 3,
                  maxWidth: '300px',
                }}
              >
                {t('footer.description')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <IconButton
                      key={social.name}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'rgba(45, 50, 80, 0.7)',
                        '&:hover': {
                          color: COLORS.secondary.main,
                        },
                      }}
                      aria-label={social.name}
                    >
                      <Icon />
                    </IconButton>
                  );
                })}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#2D3250',
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                {t('footer.quick_links.title')}
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                }}
              >
                {['about', 'products', 'contact'].map((item) => (
                  <Box
                    component="li"
                    key={item}
                    sx={{ mb: 1 }}
                  >
                    <Link href={`#${item}`} passHref legacyBehavior>
                      <MuiLink
                        sx={{
                          color: 'rgba(45, 50, 80, 0.7)',
                          textDecoration: 'none',
                          '&:hover': {
                            color: COLORS.secondary.main,
                          },
                        }}
                      >
                        {t(`footer.quick_links.${item}`)}
                      </MuiLink>
                    </Link>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Business Areas */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#2D3250',
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                {t('footer.business_areas.title')}
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                }}
              >
                {['ai_research', 'personal_growth', 'language_models', 'tech_solutions'].map((item) => (
                  <Box
                    component="li"
                    key={item}
                    sx={{ mb: 1 }}
                  >
                    <MuiLink
                      href="#business-areas"
                      sx={{
                        color: 'rgba(45, 50, 80, 0.7)',
                        textDecoration: 'none',
                        '&:hover': {
                          color: COLORS.secondary.main,
                        },
                      }}
                    >
                      {t(`footer.business_areas.${item}`)}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#2D3250',
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                {t('footer.contact.title')}
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                }}
              >
                <Box component="li" sx={{ mb: 1 }}>
                  <MuiLink
                    href="https://trantorlabs.sg"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(45, 50, 80, 0.7)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: COLORS.secondary.main,
                      },
                    }}
                  >
                    {t('footer.contact.website')}: trantorlabs.sg
                  </MuiLink>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <MuiLink
                    href="mailto:business@trantorlabs.sg"
                    sx={{
                      color: 'rgba(45, 50, 80, 0.7)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: COLORS.secondary.main,
                      },
                    }}
                  >
                    {t('footer.contact.business')}: business@trantorlabs.sg
                  </MuiLink>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <MuiLink
                    href="mailto:media@trantorlabs.sg"
                    sx={{
                      color: 'rgba(45, 50, 80, 0.7)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: COLORS.secondary.main,
                      },
                    }}
                  >
                    {t('footer.contact.media')}: media@trantorlabs.sg
                  </MuiLink>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <MuiLink
                    href="mailto:careers@trantorlabs.sg"
                    sx={{
                      color: 'rgba(45, 50, 80, 0.7)',
                      textDecoration: 'none',
                      '&:hover': {
                        color: COLORS.secondary.main,
                      },
                    }}
                  >
                    {t('footer.contact.careers')}: careers@trantorlabs.sg
                  </MuiLink>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: '1px solid rgba(45, 50, 80, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(45, 50, 80, 0.6)',
            }}
          >
            &copy; {currentYear} Trantor Labs. {t('footer.copyright')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
