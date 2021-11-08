import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Container } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import {
  getPokemonAllData,
  getPokemonOneData,
} from '../redux/pokemonOperations';
import {
  getPokemonAll,
  getPokemonOne,
  getFilteredPokemonByName,
  getFilteredPokemon,
} from '../redux/pokemonSelectors';

export default function PokemonList() {
  const [expanded, setExpanded] = useState(false);

  // const pokemonAll = useSelector(getPokemonAll);
  // const pokemonAll = useSelector(getFilteredPokemonByName);
  const pokemonAll = useSelector(getFilteredPokemon);
  // console.log('pokemonAll', pokemonAll);
  const pokemonOne = useSelector(getPokemonOne);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonAllData());
  }, [dispatch]);

  const handleChange = (panel) => (event, isExpanded) => {
    // setPokemonInfo(null);
    setExpanded(isExpanded ? panel : false);

    dispatch(getPokemonOneData(panel));
  };

  return (
    <Container>
      {pokemonAll?.map((pokemon) => (
        <Accordion
          key={pokemon.id}
          expanded={expanded === pokemon.name}
          onChange={handleChange(pokemon.name)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${pokemon.name}-content`}
            id={`${pokemon.name}-header`}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {pokemon.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img src={pokemonOne?.img} alt={pokemon.name} />
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
        </Accordion>
      ))}
    </Container>
  );
}
