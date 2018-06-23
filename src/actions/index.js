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
