import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CountryType } from '../../service/interface';

export const OneCountryCard = (props: { country: CountryType }) => {
  return (
    <>
      <Card className="card">
        <CardActionArea>
          <CardMedia component="img" image={props.country.flags.png} alt={props.country.name} className="card-img" />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" sx={{ fontFamily: 'Nunito Sans' }}>
              {props.country.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Nunito Sans' }}>
              <b>Population:</b> {props.country.population}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Nunito Sans' }}>
              <b>Region:</b> {props.country.region}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Nunito Sans' }}>
              <b>Capital:</b> {props.country.capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
