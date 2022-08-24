export const BASE_URL = 'https://restcountries.com/v2/';
export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';
export const searchByCountry = (name: string) => BASE_URL + 'name/' + name;
export const searchByRegion = (region: string) => BASE_URL + 'region/' + region;
