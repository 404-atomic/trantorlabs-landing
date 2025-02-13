// src/components/layout/NavLink.tsx
'use client';

import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils/scroll';
import { useEffect, useState } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const NavLink = ({ href, label, onClick }: NavLinkProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkActive = () => {
      const sectionId = href.startsWith('#') ? href.substring(1) : href;
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100;
        setIsActive(isInView);
      }
    };

    window.addEventListener('scroll', checkActive);
    checkActive(); // Initial check
    return () => window.removeEventListener('scroll', checkActive);
  }, [href]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(href);
    if (onClick) onClick();
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      style={{ textDecoration: 'none' }}
    >
      <Typography
        sx={{
          color: isActive ? 'primary.main' : 'text.primary',
          fontSize: '1rem',
          fontWeight: isActive ? 600 : 500,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            bottom: -4,
            left: 0,
            backgroundColor: 'primary.main',
            transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: isActive ? 'left' : 'right',
            transition: 'transform 0.3s ease-out',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
        }}
      >
        {label}
      </Typography>
    </motion.a>
  );
};