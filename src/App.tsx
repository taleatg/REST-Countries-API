import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardList } from './components/Card/CardList';
import { ALL_COUNTRIES } from './config';
import { CountryType } from './interface';
import { Header } from './components/Header/Header';

function App() {
  const [countries, setCountries] = useState([] as CountryType[]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <CardList countries={countries} />
    </>
  );
}

export default App;
