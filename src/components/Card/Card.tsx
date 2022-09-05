import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CountryType } from '../../service/interface';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { NavLink } from 'react-router-dom';
import { countrySlice } from '../../store/reducers/countrySlice';

export const OneCountryCard = (props: { country: CountryType }) => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.themeReducer);
  const { changeSelectedCountry } = countrySlice.actions;

  const theme = {
    color: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
    fontFamily: 'Nunito Sans',
  };

  return (
    <NavLink to={'/country/' + props.country.name.split(' ').join('_')} className="navLink">
      <Card
        className="card"
        sx={{ background: mode === 'light' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)' }}
        onClick={() => {
          dispatch(changeSelectedCountry(props.country));
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={props.country.flags.svg} alt={props.country.name} className="card-img" />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" sx={theme}>
              {props.country.name}
            </Typography>
            <Typography variant="body1" sx={theme}>
              <b>Population:</b> {props.country.population}
            </Typography>
            <Typography variant="body1" sx={theme}>
              <b>Region:</b> {props.country.region}
            </Typography>
            <Typography variant="body1" sx={theme}>
              <b>Capital:</b> {props.country.capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
};
