export const BASE_URL = 'https://restcountries.com/v2/';
export const ALL_COUNTRIES = BASE_URL + 'all/';
export const searchByCountry = (name: string) => BASE_URL + 'name/' + name;
export const searchByRegion = (region: string) => BASE_URL + 'region/' + region;
