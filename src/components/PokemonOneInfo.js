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
      <div className="pokemon-info-main-info-wrap">
        <img src={pokemonOne?.img || noImage} alt={pokemon.name} width="150" />
        <div className="pokemon-main-info">
          {/* <div className="pokemon-info-type"> */}
          <h3 className="pokemon-info-subtitle">Type:</h3>
          <ul className="list">
            {pokemonOne?.types?.map((typeItem) => (
              <li key={typeItem.type.name} className="pokemon-info-type-item">
                <span>{typeItem.type.name}</span>
              </li>
            ))}
          </ul>
          {/* </div> */}

          {/* <div className="pokemon-info-stats"> */}
          <h3 className="pokemon-info-subtitle">Stats:</h3>
          <ul className="list">
            {pokemonOne?.stats?.map((statsItem) => (
              <li key={statsItem.stat.name} className="pokemon-info-stats-item">
                <span>{statsItem.stat.name}: </span>
                <span>{statsItem.base_stat}</span>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </div>
      </div>

      <h3 className="pokemon-info-subtitle">Moves:</h3>
      <ul className="list pokemon-info-moves-list">
        {pokemonOne?.moves?.map((moveItem) => (
          <li key={moveItem.move.name} className="pokemon-info-moves-item">
            {moveItem.move.name}
          </li>
        ))}
      </ul>
    </AccordionDetails>
  );
}
