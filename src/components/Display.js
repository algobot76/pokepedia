// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import PokemonCard from './PokemonCard';

type Props = {
  pokemon: [Object],
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.props.pokemon.map(pokemon => (
            <Grid item xs={3}>
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

const mapStateToProps = state => {
  const { pokemon } = state;
  return pokemon;
};

export default compose(withStyles(styles), connect(mapStateToProps))(Display);
