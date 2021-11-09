import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';

import {
  getPokemonAllData,
  getPokemonOneData,
} from '../redux/pokemonOperations';
import {
  getPokemonOne,
  getFilteredPokemon,
  getPokemonAllLoadingStatus,
  getPokemonAllError,
} from '../redux/pokemonSelectors';

import { LIMIT } from '../services/pokemonAPI';

import PokemonOneInfo from './PokenonOneInfo';
import PokemonPagination from './PokemonPagination';
import Loader from './Loader';
import Notification from './Notification';

export default function PokemonList() {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  // const pokemonAll = useSelector(getPokemonAll);
  // const pokemonAll = useSelector(getFilteredPokemonByName);
  const pokemonAll = useSelector(getFilteredPokemon);
  // console.log('pokemonAll', pokemonAll);
  const pokemonOne = useSelector(getPokemonOne);
  const pokemonAllLoading = useSelector(getPokemonAllLoadingStatus);
  const pokemonAllError = useSelector(getPokemonAllError);

  const pageNumber = new URLSearchParams(location.search).get('page') ?? 1;
  const activePage = parseInt(pageNumber);

  const offset = (activePage - 1) * LIMIT;

  useEffect(() => {
    dispatch(getPokemonAllData(offset));
  }, [dispatch, offset]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

    dispatch(getPokemonOneData(panel));
  };

  return (
    <Container>
      {pokemonAllLoading ? (
        <Loader />
      ) : (
        <>
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
              <PokemonOneInfo pokemon={pokemon} pokemonOne={pokemonOne} />
            </Accordion>
          ))}
          <PokemonPagination page={activePage} />
        </>
      )}
      {pokemonAllError && (
        <Notification message="Something went wrong ... Please try again later" />
      )}
    </Container>
  );
}
