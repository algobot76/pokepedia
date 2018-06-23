import { combineReducers } from 'redux';
import {
  RECEIVE_COUNT,
  RECEIVE_POKEMON,
  REQUEST_COUNT,
  REQUEST_POKEMON
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

const rootReducer = combineReducers({
  count,
  pokemon
});

export default rootReducer;
