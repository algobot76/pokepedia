// @flow
import {
  RECEIVE_COUNT,
  RECEIVE_POKEMON,
  REQUEST_COUNT,
  REQUEST_POKEMON
} from '../constants';

export type RequestCountAction = {
  type: typeof REQUEST_COUNT
};

export type ReceiveCountAction = {
  type: typeof RECEIVE_COUNT,
  count: number
};

export type RequestPokemonAction = {
  type: typeof REQUEST_POKEMON
};

export type ReceivePokemonAction = {
  type: typeof RECEIVE_POKEMON,
  data: [Object]
};
