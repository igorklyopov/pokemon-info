import PokemonList from './components/PokemonList';
import HideAppBar from './components/HideAppBar';

function App() {
  return (
    <main>
      <HideAppBar />
      <h1>Pokémon Info</h1>
      <PokemonList />
    </main>
  );
}

export default App;
