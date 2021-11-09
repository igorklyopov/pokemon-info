import { createSelector } from 'reselect';

const getPokemonCount = (state) => state.pokemon.pokemonAll.count;
const getPokemonAll = (state) => state.pokemon.pokemonAll.data;
const getPokemonOne = (state) => state.pokemon.pokemonOne;
const getFilterPokemonByName = (state) => state.pokemon.filterPokemonByName;
const getFilterPokemonByType = (state) => state.pokemon.filterPokemonByType;
const getPokemonTypes = (state) => state.pokemon.pokemonTypes;
const getPokemonAllLoadingStatus = (state) => state.pokemon.pokemonAllLoading;
const getPokemonAllError = (state) => state.pokemon.pokemonAllError;
const getPokemonOneLoadingStatus = (state) => state.pokemon.pokemonOneLoading;
const getPokemonOneError = (state) => state.pokemon.pokemonOneError;

const getFilteredPokemon = createSelector(
  [getPokemonAll, getFilterPokemonByName, getFilterPokemonByType],
  (pokemonAll, getFilterPokemonByName, filterPokemonByType) => {
    return pokemonAll?.filter(({ name, type }) => {
      if (filterPokemonByType === '') {
        return name.toLowerCase().includes(getFilterPokemonByName);
      } else {
        return (
          name.toLowerCase().includes(getFilterPokemonByName) &&
          type.includes(filterPokemonByType)
        );
      }
    });
  }
);

export {
  getPokemonCount,
  getPokemonAll,
  getPokemonOne,
  getFilteredPokemon,
  getPokemonTypes,
  getFilterPokemonByType,
  getPokemonAllLoadingStatus,
  getPokemonAllError,
  getPokemonOneLoadingStatus,
  getPokemonOneError,
};
