// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import PokemonCard from './PokemonCard';

type Props = {
  pokemon: [Object],
  displayedPokemon: [Object],
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

class Display extends Component<Props> {
  static defaultProps = {
    pokemon: []
  };

  render() {
    const { classes, pokemon, displayedPokemon } = this.props;

    let contents = [];
    if (displayedPokemon.length === 0) {
      contents = pokemon.map(p => (
        <Grid item xs={3} key={p.id}>
          <LazyLoad height={100} offset={100} once>
            <PokemonCard id={p.id} name={p.name} src={p.src} />
          </LazyLoad>
        </Grid>
      ));
    } else {
      contents = displayedPokemon.map(p => (
        <Grid item xs={3} key={p.id}>
          <LazyLoad height={100} offset={100} once>
            <PokemonCard id={p.id} name={p.name} src={p.src} />
          </LazyLoad>
        </Grid>
      ));
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {contents}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { pokemon, query } = state;
  return {
    pokemon: pokemon.pokemon,
    displayedPokemon: query.displayedPokemon
  };
};

export default compose(withStyles(styles), connect(mapStateToProps))(Display);
