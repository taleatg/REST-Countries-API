import { Search } from '../Search/Search';
import { Filter } from '../Filter/Filter';
import React from 'react';
import { CardList } from '../Card/CardList';

export const HomePage = () => {
  return (
    <>
      <div className="search-wrapper">
        <Search />
        <Filter />
      </div>
      <CardList />
    </>
  );
};
