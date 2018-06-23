import {
  RECEIVE_COUNT,
  RECEIVE_POKEMON,
  REQUEST_COUNT,
  REQUEST_POKEMON
} from '../constants';

import axios from 'axios';

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

export const requestCount = () => ({
  type: REQUEST_COUNT
});

export const receiveCount = json => ({
  type: RECEIVE_COUNT,
  count: json.count
});

export const requestPokemon = () => ({
  type: REQUEST_POKEMON
});

export const receivePokemon = json => ({
  type: RECEIVE_POKEMON,
  data: json.results
});

const fetchCount = () => dispatch => {
  dispatch(requestCount());
  return pokeapi
    .get('pokemon')
    .then(dispatch(response => receiveCount(response.data.count)));
};

const shouldFetchCount = state => {
  const count = state.count;

  return count === 0;
};

export const fetchCountIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchCount(getState())) {
    return dispatch(fetchCount());
  }
};
