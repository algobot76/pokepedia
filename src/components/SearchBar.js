import React from 'react';
import { connect } from 'react-redux';
import { IconButton, Input, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import withStyles from '@material-ui/core/styles/withStyles';
import compose from 'recompose/compose';
import classNames from 'classnames';
import { searchPokemon, updateSearchTerm } from '../actions';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 'auto'
  },
  searchContainer: {
    margin: 'auto 16px',
    width: '100%'
  },
  input: {
    width: '100%'
  },
  icon: {
    opacity: 0.54,
    transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  iconButton: {
    opacity: 0.54,
    transform: 'scale(1, 1)',
    transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  searchIconButton: {
    marginRight: 'auto'
  },
  iconButtonHidden: {
    transform: 'scale(0, 0)',
    '& > $icon': {
      opacity: 0
    }
  }
};

const SearchBar = ({ classes, placeholder, searchTerm, onChange }) => {
  return (
    <Paper className={classes.root}>
      <div className={classes.searchContainer}>
        <Input
          className={classes.input}
          placeholder={placeholder}
          value={searchTerm}
          onChange={onChange}
          fullWidth
          disableUnderline
        />
      </div>
      <IconButton
        classes={{
          root: classNames(classes.iconButton, classes.searchIconButton, {
            [classes.iconButtonHidden]: searchTerm === ''
          })
        }}
      >
        <SearchIcon className={classes.icon} />
      </IconButton>
    </Paper>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () =>
    dispatch(searchPokemon(ownProps.pokemonToSearch, ownProps.pokemon)),
  onChange: event => {
    console.log(event);
    dispatch(updateSearchTerm(event));
  }
});

export default compose(withStyles(styles), connect(null, mapDispatchToProps))(
  SearchBar
);
