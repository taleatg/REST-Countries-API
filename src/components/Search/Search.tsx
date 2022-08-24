import { Button, Divider, InputAdornment, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { searchSlice } from '../../store/reducers/searchSlice';
import axios from 'axios';
import { searchByCountry } from '../../service/config';

export const Search = () => {
  const { handleSubmit, control } = useForm();
  const dispatch = useAppDispatch();
  const { getSearchResult } = searchSlice.actions;
  const { mode } = useAppSelector((state) => state.themeReducer);

  const searchHandler: SubmitHandler<FieldValues> = (input: FieldValues) => {
    dispatch(getSearchResult({ result: [], isLoading: true }));

    axios
      .get(searchByCountry(input.search))
      .then(({ data }) => dispatch(getSearchResult({ result: data, isLoading: false })))
      .catch(() => dispatch(getSearchResult({ result: [], isLoading: false })));
  };

  return (
    <div className="search">
      <Paper
        className="search"
        component="form"
        sx={{
          borderRadius: '5px',
          width: '300px',
          background: mode === 'light' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
          ml: 1,
        }}
      >
        <Button sx={{ minWidth: '20px' }} type="submit" onClick={handleSubmit(searchHandler)}>
          <InputAdornment position="start" sx={{ ml: '5px', height: '100%' }}>
            <SearchIcon sx={{ color: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)' }} />
          </InputAdornment>
        </Button>
        <Divider
          sx={{ height: 28, m: 0.5, color: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)' }}
          orientation="vertical"
        />
        <Controller
          control={control}
          name="search"
          render={({ field }: any) => (
            <TextField
              sx={{
                input: { color: () => (mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)') },
                textTransform: 'capitalize',
                pl: '15px',
              }}
              autoComplete="off"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              placeholder="Search for a country..."
              onChange={(e) => field.onChange(e)}
              value={field.value ?? ''}
            />
          )}
        />
      </Paper>
    </div>
  );
};
