import AccordionDetails from '@mui/material/AccordionDetails';
import noImage from '../images/no-image.png';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import { getPokemonOneLoadingStatus } from '../redux/pokemonSelectors';

export default function PokemonOneInfo({ pokemon, pokemonOne }) {
  const pokemonOneLoading = useSelector(getPokemonOneLoadingStatus);

  return pokemonOneLoading ? (
    <Loader />
  ) : (
    <AccordionDetails>
      <img src={pokemonOne?.img || noImage} alt={pokemon.name} width="150" />
      <h3>Moves</h3>
      <ul>
        {pokemonOne?.moves?.map((moveItem) => (
          <li key={moveItem.move.name}>{moveItem.move.name}</li>
        ))}
      </ul>
      <h3>Stats</h3>
      <ul>
        {pokemonOne?.stats?.map((statsItem) => (
          <li key={statsItem.stat.name}>
            <span>{statsItem.stat.name}: </span>
            <span>{statsItem.base_stat}</span>
          </li>
        ))}
      </ul>
      <h3>Type</h3>
      <ul>
        {pokemonOne?.types?.map((typeItem) => (
          <li key={typeItem.type.name}>
            <span>{typeItem.type.name}</span>
          </li>
        ))}
      </ul>
    </AccordionDetails>
  );
}
