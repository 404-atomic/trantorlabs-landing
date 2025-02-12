'use client';

import React from 'react';
import { COLORS } from '@/lib/constants/theme';
import { Box, Typography } from '@mui/material';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'var(--font-fredoka)',
          fontWeight: 700,
          color: COLORS.primary.main,
          letterSpacing: '-0.02em',
          margin: 0,
          lineHeight: 1,
        }}
      >
        TRANTOR LABS
      </Typography>
    </Box>
  );
};
