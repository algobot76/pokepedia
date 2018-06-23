// @flow
import {
  RECEIVE_COUNT,
  RECEIVE_POKEMON,
  REQUEST_COUNT,
  REQUEST_POKEMON
} from '../constants';
import type {
  ReceiveCountAction,
  ReceivePokemonAction,
  RequestCountAction,
  RequestPokemonAction
} from '../types';

import axios from 'axios';

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

export const requestCount = (): RequestCountAction => ({
  type: REQUEST_COUNT
});

export const receiveCount = (json: Object): ReceiveCountAction => ({
  type: RECEIVE_COUNT,
  count: json.count
});

export const requestPokemon = (): RequestPokemonAction => ({
  type: REQUEST_POKEMON
});

export const receivePokemon = (json: Object): ReceivePokemonAction => ({
  type: RECEIVE_POKEMON,
  data: json.results
});

export const fetchCount = () => dispatch => {
  dispatch(requestCount());
  return pokeapi
    .get('pokemon')
    .then(dispatch(response => receiveCount(response.data.count)));
};
