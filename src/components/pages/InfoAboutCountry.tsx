import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from 'react-router-dom';
import './InfoAoutCountry.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { searchByCountry } from '../../service/config';
import { CountryInformation } from './CountryInformation';
import { CountryType } from '../../service/interface';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { searchSlice } from '../../store/reducers/searchSlice';
import { Loading } from '../Loading';

export const InfoAboutCountry = () => {
  const navigate = useNavigate();
  const countryName = useParams().name!.replaceAll('_', ' ');
  const dispatch = useAppDispatch();
  const { getSearchResult } = searchSlice.actions;
  const { result, isLoading } = useAppSelector((state) => state.searchReducer);
  const [country, setCountry] = useState({
    name: '',
    nativeName: '',
    capital: '',
    flags: {
      svg: '',
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
  } as CountryType);

  useEffect(() => {
    dispatch(getSearchResult({ result: result, isLoading: true }));
    axios.get(searchByCountry(countryName)).then(({ data }) => setCountry(data[0]));
    dispatch(getSearchResult({ result: result, isLoading: false }));
  }, [countryName, dispatch, getSearchResult, result]);

  const goBack = () => navigate(-1);

  return (
    <div className="info-about-country">
      <div className="back">
        <Button variant="outlined" onClick={goBack}>
          <KeyboardBackspaceIcon sx={{ mr: 1 }} />
          Back
        </Button>
      </div>
      {isLoading ? <Loading /> : <CountryInformation country={country} />}
    </div>
  );
};
