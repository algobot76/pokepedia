// @flow
import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

type Props = {
  id: string,
  name: string,
  src: string,
  classes: Object
};

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
};

const PokemonCard = (props: Props) => {
  const { classes } = props;
  return (
    <div>
      <Card>
        <CardMedia
          className={classes.media}
          src={props.src}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Pikachu
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(PokemonCard);
