import { Button, Divider, InputAdornment, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store/store';
import { searchSlice } from '../../store/reducers/searchSlice';
import axios from 'axios';
import { searchByCountry } from '../../service/config';

export const Search = () => {
  const { handleSubmit, control } = useForm();
  const dispatch = useAppDispatch();
  const { getSearchResult } = searchSlice.actions;

  const searchHandler: SubmitHandler<FieldValues> = (input: FieldValues) => {
    axios
      .get(searchByCountry(input.search))
      .then(({ data }) => dispatch(getSearchResult({ result: data, isLoading: false })))
      .catch(() => dispatch(getSearchResult({ result: [], isLoading: false })));
  };

  return (
    <div className="search">
      <Paper className="search" component="form" sx={{ borderRadius: '5px', width: '300px' }}>
        <Button color="primary" sx={{ minWidth: '20px' }} type="submit" onClick={handleSubmit(searchHandler)}>
          <InputAdornment position="start" sx={{ ml: '5px', height: '100%' }}>
            <SearchIcon />
          </InputAdornment>
        </Button>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Controller
          control={control}
          name="search"
          render={({ field }: any) => (
            <TextField
              autoComplete="off"
              sx={{ pl: '15px' }}
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
