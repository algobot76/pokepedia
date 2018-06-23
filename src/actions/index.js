import {
  RECEIVE_COUNT,
  RECEIVE_POKEMON,
  REQUEST_COUNT,
  REQUEST_POKEMON,
  SEARCH_POKEMON,
  UPDATE_SEARCH_TERM
} from '../constants';
import { capitalizeFirstLetter, getId, getPokemonImageUrl } from '../utils';
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
    name: capitalizeFirstLetter(pokemon.name),
    src: getPokemonImageUrl(getId(pokemon.url))
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

export const updateSearchTerm = event => ({
  type: UPDATE_SEARCH_TERM,
  term: event.target.value
});

export const searchPokemon = (name, pokemon) => ({
  type: SEARCH_POKEMON,
  possiblePokemon: pokemon.filter(p => p.name.includes(name))
});
