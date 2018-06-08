// @flow
import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PokemonCard from './PokemonCard';

type Props = {
  pokemons: [Object],
  classes: Object
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '30px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class Display extends React.Component<Props> {
  static defaultProps = {
    pokemons: []
  };

  render() {
    const { classes } = this.props;
    const pokemonCards = this.props.pokemons.forEach(pokemon => {
      return (
        <Grid item xs>
          <Paper className={classes.paper}>
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.src}
            />
          </Paper>
        </Grid>
      );
    });

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {pokemonCards}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Display);
