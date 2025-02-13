// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Box, 
  Menu, 
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Container
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/common/Logo';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import i18n from '@/lib/i18n/client';
import { NavLink } from './NavLink';
import { scrollToSection } from '@/lib/utils/scroll';

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const open = Boolean(anchorEl);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    handleLanguageClose();
  };

  const navItems = [
    { href: '#about', label: t('common.menu.about') },
    { href: '#mission-vision', label: t('common.menu.mission_vision') },
    { href: '#advantages', label: t('common.menu.advantages') },
    { href: '#business-areas', label: t('common.menu.business_areas') },
    { href: '#products', label: t('common.menu.products') },
    { href: '#contact', label: t('common.menu.contact') },
  ];

  if (!mounted) return null;

  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        backdropFilter: 'blur(8px)',
        background: 'rgba(255, 255, 255, 0.7)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{ 
            minHeight: { xs: '64px', md: '80px' },
            px: { xs: 2, md: 4 },
            gap: 2,
          }}
        >
          {/* Logo with proper mobile sizing */}
          <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
            <Logo />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 4, 
                ml: 'auto', 
                mr: 4,
                alignItems: 'center'
              }}
            >
              {navItems.map((item) => (
                <NavLink 
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </Box>
          )}

          {/* Right Section with Language and Menu */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: { xs: 1, md: 2 },
              ml: { xs: 0, md: 'auto' }
            }}
          >
            {/* Language Selector */}
            <IconButton
              onClick={handleLanguageClick}
              size="small"
              sx={{ 
                color: 'text.primary',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
              }}
            >
              <LanguageIcon />
            </IconButton>

            {/* Contact Button - Hide on mobile */}
            {!isMobile && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  href="#contact"
                  sx={{
                    px: { xs: 2, md: 3 },
                    py: { xs: 1, md: 1.5 },
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                  }}
                >
                  {t('common.contact_us')}
                </Button>
              </motion.div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ 
                  color: 'text.primary',
                  width: 40,
                  height: 40,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>

          {/* Language Menu */}
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleLanguageClose}
            MenuListProps={{
              'aria-labelledby': 'language-button',
            }}
            sx={{
              '& .MuiPaper-root': {
                bgcolor: 'background.paper',
                backdropFilter: 'blur(8px)',
              }
            }}
          >
            <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
            <MenuItem onClick={() => handleLanguageChange('zh')}>中文</MenuItem>
          </Menu>

          {/* Mobile Navigation Drawer */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            PaperProps={{
              sx: {
                width: '100%',
                maxWidth: '360px',
                bgcolor: 'background.default',
                backdropFilter: 'blur(12px)',
                background: 'rgba(255, 255, 255, 0.95)',
              }
            }}
            SlideProps={{
              timeout: 300
            }}
          >
            {/* Drawer Header */}
            <Box 
              sx={{ 
                p: 2, 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Logo />
              <IconButton 
                onClick={() => setMobileOpen(false)}
                sx={{ color: 'text.primary' }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Navigation Links */}
            <List sx={{ pt: 2 }}>
              {navItems.map((item) => (
                <ListItem 
                  key={item.href}
                  sx={{ 
                    py: 2,
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  <NavLink 
                    href={item.href}
                    label={item.label}
                    onClick={() => setMobileOpen(false)}
                  />
                </ListItem>
              ))}
            </List>

            {/* Contact Button in Drawer */}
            <Box sx={{ p: 3, mt: 'auto' }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    scrollToSection('#contact');
                    setMobileOpen(false);
                  }}
                  sx={{
                    py: 1.5,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '1rem',
                  }}
                >
                  {t('common.contact_us')}
                </Button>
              </motion.div>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};