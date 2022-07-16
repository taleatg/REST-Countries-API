import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryType, SearchData } from '../../service/interface';

const CountryState: SearchData = {
  isLoading: true,
  result: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: CountryState,
  reducers: {
    getSearchResult(state, action: PayloadAction<{ result: CountryType[]; isLoading: boolean }>) {
      state.result = action.payload.result;
      state.isLoading = action.payload.isLoading;
    },
  },
});

export default searchSlice.reducer;
