import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useAppSelector } from '../store/store';

export const Loading = () => {
  const { mode } = useAppSelector((state) => state.themeReducer);

  return (
    <Box className="loading-wrapper">
      <CircularProgress sx={{ m: '0 auto', color: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)' }} />
      <Typography variant="h5" component="h5">
        Loading...
      </Typography>
    </Box>
  );
};
