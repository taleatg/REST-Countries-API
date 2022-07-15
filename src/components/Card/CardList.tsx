import React from 'react';
import { CountryType } from '../../interface';
import { OneCountryCard } from './Card';
import './Cards.scss';

export const CardList = (props: { countries: CountryType[] }) => {
  return (
    <div className="card-list">
      {props.countries.map((country) => {
        return <OneCountryCard country={country} key={country.name} />;
      })}
    </div>
  );
};
