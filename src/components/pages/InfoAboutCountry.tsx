import { useAppDispatch, useAppSelector } from '../../store/store';
import { CountryType, Currencies, Languages } from '../../service/interface';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { NavLink } from 'react-router-dom';
import { countrySlice } from '../../store/reducers/countrySlice';
import './InfoAoutCountry.scss';
import { CardMedia } from '@mui/material';

export const InfoAboutCountry = () => {
  const dispatch = useAppDispatch();
  const { changeSelectedCountry } = countrySlice.actions;
  const { result } = useAppSelector((state) => state.searchReducer);
  const { country } = useAppSelector((state) => state.countryReducer);

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
      <div className="borders">
        {bordersOfCountry.map((item) => {
          return (
            <NavLink to={'/country/' + item.name.split(' ').join('_')} key={item.name} className="navLink border">
              <Button
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
      </div>
    );
  };

  const countryInfo = {
    'Native Name': country.nativeName,
    Population: country.population,
    Region: country.region,
    'Sub Region': country.subregion,
    Capital: country.capital,
    'Top Level Domain': country.topLevelDomain.join(', '),
    Currencies: getInfo(country.currencies),
    Languages: getInfo(country.languages),
  };

  const fields = Object.entries(countryInfo);

  return (
    <div className="info-about-country">
      <div className="back">
        <NavLink to="/" className="navLink">
          <Button variant="outlined">
            <KeyboardBackspaceIcon sx={{ mr: 1 }} />
            Back
          </Button>
        </NavLink>
      </div>

      <div className="info">
        <CardMedia component="img" image={country.flags.svg} alt={country.name} className="flag" />
        <div className="info-wrapper">
          <div className="country-name">{country.name}</div>

          <div className="country-info">
            {fields.map((item) => (
              <div key={item[0]} className="text-info">
                <b>{item[0]}: </b> <div className="result">{item[1]}</div>
              </div>
            ))}
          </div>

          <div className="country-borders">
            <b className="text-field">Border Countries:</b>{' '}
            {country?.borders ? getBordersOfCountry(country.borders) : 'No Borders'}
          </div>
        </div>
      </div>
    </div>
  );
};
