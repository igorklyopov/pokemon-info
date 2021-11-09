import { useSelector } from 'react-redux';

import {
  getPokemonOne,
  getFilteredPokemon,
  getLoadingStatus,
} from './redux/pokemonSelectors';

import PokemonList from './components/PokemonList';
import HideAppBar from './components/HideAppBar';
import { Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

function App() {
  return (
    <main>
      <HideAppBar />
      <Typography component="h1" sx={visuallyHidden}>
        Pokémon Info
      </Typography>
      <PokemonList />
    </main>
  );
}

export default App;
