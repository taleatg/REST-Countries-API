export interface CountryType {
  name: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
}
