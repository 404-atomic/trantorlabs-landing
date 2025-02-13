'use client';

import { Box, Container, Grid, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { COLORS } from '@/lib/constants/theme';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import { Logo } from '@/components/common/Logo';
import { useMemo } from 'react';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// const socialLinks = [
//   {
//     name: 'GitHub',
//     icon: GitHubIcon,
//     href: 'https://github.com/TrantorLabs',
//   },
//   {
//     name: 'X',
//     icon: XIcon,
//     href: 'https://x.com/TrantorLabs',
//   },
//   {
//     name: 'WhatsApp',
//     icon: WhatsAppIcon,
//     href: 'https://wa.me/65891000000',
//   },
// ];

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const quickLinks = [
    { id: 'about', label: t('footer.quick_links.about') },
    { id: 'mission-vision', label: t('footer.quick_links.mission_vision') },
    { id: 'products', label: t('footer.quick_links.products') },
    { id: 'advantages', label: t('footer.quick_links.advantages') },
  ];

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
          <Grid item xs={12} md={5}>
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
              {/* <Box sx={{ display: 'flex', gap: 1 }}>
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
              </Box> */}
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
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
                  columns: 1,
                  columnGap: 4,
                }}
              >
                {quickLinks.map((link) => (
                  <Box
                    component="li"
                    key={link.id}
                    sx={{ mb: 1 }}
                  >
                    <Link href={`#${link.id}`} passHref legacyBehavior>
                      <MuiLink
                        sx={{
                          color: 'rgba(45, 50, 80, 0.7)',
                          textDecoration: 'none',
                          '&:hover': {
                            color: COLORS.secondary.main,
                          },
                        }}
                      >
                        {link.label}
                      </MuiLink>
                    </Link>
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
                {t('footer.contact.title')}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton
                  component="a"
                  href="mailto:contact@trantorlabs.io"
                  sx={{
                    color: 'rgba(45, 50, 80, 0.7)',
                    p: 0,
                    mr: 1,
                    '&:hover': {
                      color: COLORS.secondary.main,
                    },
                  }}
                >
                  <EmailIcon />
                </IconButton>
                <MuiLink
                  href="mailto:contact@trantorlabs.io"
                  sx={{
                    color: 'rgba(45, 50, 80, 0.7)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: COLORS.secondary.main,
                    },
                  }}
                >
                  contact@trantorlabs.io
                </MuiLink>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(45, 50, 80, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: 'rgba(45, 50, 80, 0.7)' }}
          >
            &copy; {currentYear} Trantor Labs. {t('footer.copyright')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
