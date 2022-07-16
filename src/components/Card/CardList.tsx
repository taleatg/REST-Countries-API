import React from 'react';
import { CountryType } from '../../service/interface';
import { OneCountryCard } from './Card';
import './Cards.scss';
import { useAppSelector } from '../../store/store';
import { Loading } from '../Loading';
import { Typography } from '@mui/material';

export const CardList = () => {
  const { isLoading, result } = useAppSelector((state: any) => state.searchReducer);

  return (
    <div className="card-list">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {result.length ? (
            <>
              {result.map((country: CountryType) => {
                return <OneCountryCard country={country} key={country.name} />;
              })}
            </>
          ) : (
            <Typography variant="h4" component="h2" sx={{ height: '82vh' }}>
              Countries not found...
            </Typography>
          )}
        </>
      )}
    </div>
  );
};
