import { useAppDispatch, useAppSelector } from '../../store/store';
import { CountryType, Currencies, Languages } from '../../service/interface';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { countrySlice } from '../../store/reducers/countrySlice';

export const InfoAboutCountry = () => {
  const dispatch = useAppDispatch();
  const { changeSelectedCountry } = countrySlice.actions;
  const { result } = useAppSelector((state) => state.searchReducer);
  const { country } = useAppSelector((state) => state.countryReducer);
  const { mode } = useAppSelector((state) => state.themeReducer);

  const getInfo = (field: Languages[] | Currencies[]) => {
    const name = field.map((item) => item.name);
    return name.join(', ');
  };

  const getBordersOfCountry = (borders: string[]) => {
    const bordersOfCountry: CountryType[] = [];
    borders.map((border) => {
      result.map((country) => {
        if (country.alpha3Code === border) {
          bordersOfCountry.push(country);
        }
      });
    });

    return (
      <>
        {bordersOfCountry.map((item) => {
          return (
            <NavLink to={'/country/' + item.name.split(' ').join('_')} key={item.name} className="navLink borders">
              <Button
                sx={{
                  color: mode === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)',
                  borderColor: mode === 'light' ? 'hsl(207, 26%, 15%)' : 'hsl(0, 0%, 52%)',
                  background: mode === 'light' ? 'hsl(207, 26%, 21%)' : 'hsl(0, 0%, 95%)',
                }}
                variant="outlined"
                onClick={() => {
                  dispatch(changeSelectedCountry(item));
                }}
              >
                {item.name}
              </Button>
            </NavLink>
          );
        })}
      </>
    );
  };

  return (
    <>
      <img src={country.flags.png} />
      <div>Native Name: {country.nativeName}</div>
      <div>Population: {country.population}</div>
      <div>Region: {country.region}</div>
      <div>Sub Region: {country.subregion}</div>
      <div>Capital: {country.capital}</div>
      <div>Top Level Domain: {country.topLevelDomain.join(', ')}</div>
      <div>Currencies: {getInfo(country.currencies)}</div>
      <div>Languages: {getInfo(country.languages)}</div>
      <div>Border Countries: {country?.borders ? getBordersOfCountry(country.borders) : 'No Borders'}</div>
    </>
  );
};
