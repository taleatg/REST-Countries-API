import React, { useEffect } from 'react';
import axios from 'axios';
import { CardList } from './components/Card/CardList';
import { ALL_COUNTRIES } from './service/config';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { Filter } from './components/Filter/Filter';
import { useAppDispatch, useAppSelector } from './store/store';
import { searchSlice } from './store/reducers/searchSlice';
import Box from '@mui/material/Box';

function App() {
  const dispatch = useAppDispatch();
  const { getSearchResult } = searchSlice.actions;
  const { mode } = useAppSelector((state) => state.themeReducer);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => dispatch(getSearchResult({ result: data, isLoading: false })));
  }, [dispatch, getSearchResult]);

  return (
    <Box
      sx={{
        color: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
        background: mode === 'light' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
        // height: '100%',
        minHeight: '100vh',
      }}
    >
      <Header />
      <div className="search-wrapper">
        <Search />
        <Filter />
      </div>
      <CardList />
    </Box>
  );
}

export default App;
