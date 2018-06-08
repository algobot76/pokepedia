// @flow
import React from 'react';
import { Grid } from '@material-ui/core';
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
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.props.pokemons.map(pokemon => (
            <Grid item xs>
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.src}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Display);
