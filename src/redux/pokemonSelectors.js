import { createSelector } from 'reselect';

const getPokemonAll = (state) => state.pokemon.pokemonAll;
const getPokemonOne = (state) => state.pokemon.pokemonOne;
const getFilterPokemonByName = (state) => state.pokemon.filterPokemonByName;
const getFilterPokemonByType = (state) => state.pokemon.filterPokemonByType;
const getPokemonTypes = (state) => state.pokemon.pokemonTypes;

const getFilteredPokemonByName = createSelector(
  [getPokemonAll, getFilterPokemonByName],
  (pokemonAll, filterPokemonByName) => {
    return pokemonAll.filter((pokemonItem) =>
      pokemonItem.name.toLowerCase().includes(filterPokemonByName)
    );
  }
);

const getFilteredPokemonByType = createSelector(
  [getPokemonAll, getFilterPokemonByType],
  (pokemonAll, filterPokemonByType) => {
    return pokemonAll.filter((pokemonItem) =>
      pokemonItem.type.toLowerCase().includes(filterPokemonByType)
    );
  }
);

const normalizeInputValue = (value) => value.toLowerCase().trim();

const getFilteredPokemon = createSelector(
  [getPokemonAll, getFilterPokemonByName, getFilterPokemonByType],
  (pokemonAll, getFilterPokemonByName, filterPokemonByType) => {
    return pokemonAll.filter(({ name, type }) => {
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
  getPokemonAll,
  getPokemonOne,
  getFilteredPokemonByName,
  getFilteredPokemonByType,
  getFilteredPokemon,
  getPokemonTypes,
  getFilterPokemonByType,
};
