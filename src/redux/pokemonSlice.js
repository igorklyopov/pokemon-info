import { createSlice } from '@reduxjs/toolkit';
import {
  getPokemonAllData,
  getPokemonOneData,
  getPokemonTypesAll,
} from '../redux/pokemonOperations';

const initialState = {
  pokemonAll: [],
  pokemonAllLoading: false,
  pokemonAllError: null,

  pokemonOne: {
    img: null,
    moves: null,
    stats: null,
    types: null,
  },
  pokemonOneLoading: false,
  pokemonOneError: null,

  pokemonTypes: [],
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
      state.pokemonAllLoading = true;
      state.pokemonAllError = null;
    },
    [getPokemonAllData.fulfilled](state, action) {
      state.pokemonAll = action.payload;
      state.pokemonAllLoading = false;
      state.pokemonAllError = null;
    },
    [getPokemonAllData.rejected](state, action) {
      state.pokemonAllLoading = false;
      state.pokemonAllError = action.payload;
    },

    //===One===//
    [getPokemonOneData.pending](state) {
      state.pokemonOneLoading = true;
      state.pokemonOneError = null;
    },
    [getPokemonOneData.fulfilled](state, action) {
      state.pokemonOne = action.payload;
      state.pokemonOneLoading = false;
      state.pokemonOneError = action.payload;
    },
    [getPokemonOneData.rejected](state, action) {
      state.pokemonOneLoading = false;
      state.pokemonOneError = action.payload;
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
