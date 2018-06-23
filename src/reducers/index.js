import { combineReducers } from 'redux';
import {
  RECEIVE_COUNT,
  RECEIVE_POKEMON,
  REQUEST_COUNT,
  REQUEST_POKEMON,
  SEARCH_POKEMON,
  UPDATE_SEARCH_TERM
} from '../constants';

const count = (
  state = {
    isFetchingCount: false,
    count: 0
  },
  action
) => {
  switch (action.type) {
    case REQUEST_COUNT:
      return {
        ...state,
        isFetchingCount: true
      };
    case RECEIVE_COUNT:
      return {
        ...state,
        isFetchingCount: false,
        count: action.count
      };
    default:
      return state;
  }
};

const pokemon = (
  state = {
    isFetchingPokemon: false,
    pokemon: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_POKEMON:
      return {
        ...state,
        isFetchingPokemon: true
      };
    case RECEIVE_POKEMON:
      return { ...state, isFetchingPokemon: false, pokemon: action.pokemon };
    default:
      return state;
  }
};

const searchTerm = (
  state = {
    pokemonToSearch: ''
  },
  action
) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        pokemonToSearch: action.term
      };
    default:
      return state;
  }
};

const query = (
  state = {
    pokemonToSearch: '',
    displayedPokemon: []
  },
  action
) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      const pokemonToSearch = action.term;
      if (!pokemonToSearch) {
        return {
          ...state,
          pokemonToSearch
        };
      } else {
        return {
          ...state,
          pokemonToSearch,
          displayedPokemon: []
        };
      }
    case SEARCH_POKEMON:
      return {
        ...state,
        displayedPokemon: action.possiblePokemon
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count,
  pokemon,
  query
});

export default rootReducer;
