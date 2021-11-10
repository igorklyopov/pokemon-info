import { Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import PokemonList from './components/PokemonList';
import HideAppBar from './components/HideAppBar';

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
