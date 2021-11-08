import { createAsyncThunk } from '@reduxjs/toolkit';

import pokemonAPI from '../services/pokemonAPI';
import { getPokemonTypes } from './pokemonSelectors';

const getPokemonAllData = createAsyncThunk(
  'pokemon/getPokemonAllData',
  async (_, { rejectWithValue }) => {
    const pokemonDataPromises = [];

    const pokemonAllData = await pokemonAPI
      .fetchPokemonAll()
      .then((pokemonList) => {
        for (const pokemon of pokemonList) {
          pokemonDataPromises.push(pokemonAPI.fetchPokemonByName(pokemon.name));
        }

        return Promise.all(pokemonDataPromises).then((results) => {
          const pokemonData = results.map((result) => ({
            id: result.id,
            name: result.name,
            type: result.types.map((type) => type.type.name),
          }));
          return pokemonData;
        });
      });

    return pokemonAllData;
  }
);

const getPokemonOneData = createAsyncThunk(
  'pokemon/getPokemonOneInfo',
  async (pokemonName, { rejectWithValue }) => {
    try {
      const pokemonOneData = await pokemonAPI
        .fetchPokemonByName(pokemonName)
        .then((pokemon) => ({
          // img: pokemon.sprites.front_default,
          img: pokemon.sprites.other.dream_world.front_default,
          moves: pokemon.moves,
          stats: pokemon.stats,
          types: pokemon.types,
        }));

      return pokemonOneData;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const getPokemonTypesAll = createAsyncThunk(
  'pokemon/getPokemonTypesAll',
  async (_, { rejectWithValue }) => {
    try {
      const pokemonTypes = await pokemonAPI
        .fetchPokemonTypes()
        .then(({ results }) => results.map((type) => type.name));
      console.log('pokemonTypes', pokemonTypes);
      return pokemonTypes;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export { getPokemonAllData, getPokemonOneData, getPokemonTypesAll };