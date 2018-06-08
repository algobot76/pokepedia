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
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const Display = (props: Props) => {};

export default withStyles(styles)(Display);
