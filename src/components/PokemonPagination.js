import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getPokemonCount } from '../redux/pokemonSelectors';
import { useSelector } from 'react-redux';
import { LIMIT } from '../services/pokemonAPI';

import { useHistory, useLocation } from 'react-router-dom';

export default function PokemonPagination({ page }) {
  const pokemonCount = useSelector(getPokemonCount);
  const pokemonPageCount = Math.ceil(pokemonCount / LIMIT);

  const location = useLocation();
  const history = useHistory();

  const handleChange = (event, value) => {
    history.push({ ...location, search: `page=${value}` });
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pokemonPageCount}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
