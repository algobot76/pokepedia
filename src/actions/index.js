// @flow
import { RECEIVE_POKEMON, REQUEST_POKEMON } from '../constants';
import type { ReceiveAction, RequestAction } from '../types';

export const requestPokemon = (): RequestAction => ({
  type: REQUEST_POKEMON
});

export const receivePokemon = (json: Object): ReceiveAction => ({
  type: RECEIVE_POKEMON,
  data: json.results
});
