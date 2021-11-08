import { createSlice } from '@reduxjs/toolkit';
import {
  getPokemonAllData,
  getPokemonOneData,
  getPokemonTypesAll,
} from '../redux/pokemonOperations';

const initialState = {
  pokemonAll: [],
  pokemonOne: {
    img: null,
    moves: null,
    stats: null,
    types: null,
  },
  pokemonTypes: ['all'],
  filterPokemonByName: '',
  filterPokemonByType: '',
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    changePokemonFilterByName: (state, { payload }) => {
      state.filterPokemonByName = payload;
    },
    changePokemonFilterByType: (state, { payload }) => {
      state.filterPokemonByType = payload;
    },
  },
  extraReducers: {
    //===All==//
    [getPokemonAllData.pending](state) {
      //
    },
    [getPokemonAllData.fulfilled](state, action) {
      state.pokemonAll = action.payload;
      //
    },
    [getPokemonAllData.rejected](state) {
      //
    },

    //===One===//
    [getPokemonOneData.pending](state) {
      //
    },
    [getPokemonOneData.fulfilled](state, action) {
      state.pokemonOne = action.payload;
      //
    },
    [getPokemonOneData.rejected](state) {
      //
    },

    //===Types==//
    [getPokemonTypesAll.pending](state) {
      //
    },
    [getPokemonTypesAll.fulfilled](state, action) {
      state.pokemonTypes = action.payload;
      //
    },
    [getPokemonTypesAll.rejected](state) {
      //
    },
  },
});

export const { changePokemonFilterByName, changePokemonFilterByType } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
