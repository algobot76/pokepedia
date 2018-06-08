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
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={props.src} />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Name: {props.name}
            <br />
            ID: {props.id}
          </Typography>
        </CardContent>
        <CardActions>g
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(PokemonCard);
