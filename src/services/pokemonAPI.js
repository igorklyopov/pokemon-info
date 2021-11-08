import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';
export const LIMIT = 20;

axios.defaults.baseURL = BASE_URL;

async function fetchPokemonAll(offset = 0) {
  const { data } = await axios.get(`pokemon/?limit=${LIMIT}&offset=${offset}`);

  return data;
}

async function fetchPokemonByName(pokemonName) {
  const { data } = await axios.get(`pokemon/${pokemonName}`);

  return data;
}

async function fetchPokemonTypes() {
  const { data } = await axios.get('type');

  return data;
}

const pokemonAPI = {
  fetchPokemonAll,
  fetchPokemonByName,
  fetchPokemonTypes,
};

export default pokemonAPI;
