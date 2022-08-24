import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../store/store';
import axios from 'axios';
import { ALL_COUNTRIES, searchByRegion } from '../../service/config';
import { searchSlice } from '../../store/reducers/searchSlice';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const regions = ['All regions', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export function Filter() {
  const dispatch = useAppDispatch();
  const { getSearchResult } = searchSlice.actions;
  const { mode } = useAppSelector((state) => state.themeReducer);
  const [region, setRegion] = React.useState('All regions');

  const theme = createTheme({
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiSelect: {
        variants: [
          {
            props: { variant: 'filled' },
            style: {
              background: 'none',
            },
          },
        ],
      },
    },
  });

  const searchHandler = (event: SelectChangeEvent) => {
    dispatch(getSearchResult({ result: [], isLoading: true }));
    setRegion(event.target.value);

    event.target.value === 'All regions'
      ? axios.get(ALL_COUNTRIES).then(({ data }) => dispatch(getSearchResult({ result: data, isLoading: false })))
      : axios
          .get(searchByRegion(event.target.value))
          .then(({ data }) => dispatch(getSearchResult({ result: data, isLoading: false })))
          .catch(() => dispatch(getSearchResult({ result: [], isLoading: false })));
  };

  return (
    <div className="filter">
      <FormControl
        sx={{
          mr: 1,
          minWidth: 250,
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          borderRadius: '5px',
        }}
      >
        <ThemeProvider theme={theme}>
          <Select
            sx={{
              color: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
              height: '50px',
            }}
            variant="filled"
            disableUnderline={true}
            value={region}
            onChange={searchHandler}
          >
            {regions.map((selectedRegion) => (
              <MenuItem
                className="filter-item"
                key={selectedRegion}
                value={selectedRegion}
                sx={{
                  color: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
                  background: mode === 'light' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
                  height: '40px',
                }}
              >
                {selectedRegion}
              </MenuItem>
            ))}
          </Select>
        </ThemeProvider>
      </FormControl>
    </div>
  );
}
