import {
  RECEIVE_COUNT,
  RECEIVE_POKEMON,
  REQUEST_COUNT,
  REQUEST_POKEMON
} from '../constants';
import { capitalizeFirstLetter, getId } from '../utils';
import axios from 'axios';

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

export const requestCount = () => ({
  type: REQUEST_COUNT
});

export const receiveCount = res => ({
  type: RECEIVE_COUNT,
  count: res.data.count
});

export const requestPokemon = () => ({
  type: REQUEST_POKEMON
});

export const receivePokemon = res => ({
  type: RECEIVE_POKEMON,
  pokemon: res.data.results.map(pokemon => ({
    id: getId(pokemon.url),
    name: capitalizeFirstLetter(pokemon.name)
  }))
});

export const fetchCount = () => dispatch => {
  dispatch(requestCount());
  return pokeapi
    .get('pokemon')
    .then(response => dispatch(receiveCount(response)));
};

export const fetchPokemon = count => dispatch => {
  dispatch(requestPokemon());
  return pokeapi
    .get(`pokemon/?limit=${count}`)
    .then(response => dispatch(receivePokemon(response)));
};
