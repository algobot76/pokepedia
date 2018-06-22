// @flow
import { RECEIVE_POKEMON, REQUEST_POKEMON } from '../constants';

export type RequestAction = {
  type: typeof REQUEST_POKEMON
};

export type ReceiveAction = {
  type: typeof RECEIVE_POKEMON,
  data: [Object]
};
