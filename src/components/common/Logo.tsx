'use client';

import React from 'react';
import { COLORS } from '@/lib/constants/theme';
import { Box, Typography, SxProps, Theme } from '@mui/material';

interface LogoProps {
  className?: string;
  sx?: SxProps<Theme>;
}

export const Logo: React.FC<LogoProps> = ({ className, sx }) => {
  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        ...sx,
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
