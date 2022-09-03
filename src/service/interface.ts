export interface CountryType {
  name: string;
  nativeName: string;
  capital: string;
  flags: {
    png: string;
  };
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: [];
  currencies: Currencies[];
  languages: Languages[];
  borders: [];
  alpha3Code: string;
}

export interface SearchData {
  isLoading: boolean;
  result: CountryType[];
}

export interface Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Currencies {
  code: string;
  name: string;
  symbol: string;
}
