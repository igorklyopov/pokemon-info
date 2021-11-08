import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../redux/pokemonSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
