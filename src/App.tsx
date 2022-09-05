import React, { useEffect } from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from './service/config';
import { Header } from './components/Header/Header';
import { useAppDispatch, useAppSelector } from './store/store';
import { searchSlice } from './store/reducers/searchSlice';
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { InfoAboutCountry } from './components/pages/InfoAboutCountry';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const dispatch = useAppDispatch();
  const { getSearchResult } = searchSlice.actions;
  const { mode } = useAppSelector((state) => state.themeReducer);

  const theme = createTheme({
    palette: {
      primary: {
        main: mode === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)',
      },
    },
    typography: {
      button: {
        borderColor: mode === 'light' ? 'hsl(207, 26%, 15%)' : 'hsl(0, 0%, 52%)',
        background: mode === 'light' ? 'hsl(207, 26%, 21%)' : 'hsl(0, 0%, 95%)',
      },
    },
  });

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => dispatch(getSearchResult({ result: data, isLoading: false })));
  }, [dispatch, getSearchResult]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          color: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
          background: mode === 'light' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<InfoAboutCountry />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
