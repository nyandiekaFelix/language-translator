import { Box, Typography, alpha } from '@mui/material';

import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

const Logo = () => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        textDecoration: 'none',
        '&:focus': {
          outline: 'none',
          bgcolor: alpha('#fff', 0.1),
          borderRadius: 1,
        },
      }}
      aria-label="Language Translator Home"
    >
      <Globe
        size={28}
        style={{
          color: '#eaeaea',
        }}
        aria-hidden="true"
      />
      <Typography
        variant="h5"
        component="span"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(to right, white, #e1e1ff)',
          backgroundClip: 'text',
          color: 'transparent',
          display: { xs: 'none', sm: 'block' },
          transition: 'all 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        Language Translator
      </Typography>
    </Box>
  );
};

export default Logo;