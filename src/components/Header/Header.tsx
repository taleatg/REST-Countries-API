import { Button } from '@mui/material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';
import './Header.scss';

export const Header = () => {
  const [mode, setMode] = useState('light');
  return (
    <header className="header">
      <div className="header-wrapper">
        <h2>Where in the world</h2>
        <Button
          sx={{
            color: () => (mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'),
            textTransform: 'capitalize',
          }}
          startIcon={mode === 'light' ? <NightlightRoundIcon /> : <Brightness7Icon />}
          onClick={() => {
            setMode(mode === 'light' ? 'dark' : 'light');
          }}
        >
          {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </div>
    </header>
  );
};
