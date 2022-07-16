import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CountryType } from '../../service/interface';
import { useAppSelector } from '../../store/store';

export const OneCountryCard = (props: { country: CountryType }) => {
  const { mode } = useAppSelector((state) => state.themeReducer);
  const theme = {
    color: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
    fontFamily: 'Nunito Sans',
  };

  return (
    <>
      <Card className="card" sx={{ background: mode === 'light' ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)' }}>
        <CardActionArea>
          <CardMedia component="img" image={props.country.flags.png} alt={props.country.name} className="card-img" />
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
    </>
  );
};
