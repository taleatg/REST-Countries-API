import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryType } from '../../service/interface';

const CountryState = {
  country: {
    name: '',
    nativeName: '',
    capital: '',
    flags: {
      png: '',
    },
    population: 0,
    region: '',
    subregion: '',
    topLevelDomain: [],
    currencies: [
      {
        code: '',
        name: '',
        symbol: '',
      },
    ],
    languages: [
      {
        iso639_1: '',
        iso639_2: '',
        name: '',
        nativeName: '',
      },
    ],
    borders: [],
  },
};

export const countrySlice = createSlice({
  name: 'country',
  initialState: CountryState,
  reducers: {
    changeSelectedCountry(state, action: PayloadAction<CountryType>) {
      state.country.name = action.payload.name;
      state.country.nativeName = action.payload.nativeName;
      state.country.capital = action.payload.capital;
      state.country.flags.png = action.payload.flags.png;
      state.country.population = action.payload.population;
      state.country.region = action.payload.region;
      state.country.subregion = action.payload.subregion;
      state.country.topLevelDomain = action.payload.topLevelDomain;
      state.country.languages = action.payload.languages;
      state.country.currencies = action.payload.currencies;
      state.country.borders = action.payload.borders;
    },
  },
});

export default countrySlice.reducer;
