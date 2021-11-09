import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getPokemonCount } from '../redux/pokemonSelectors';
import { useSelector } from 'react-redux';
import { LIMIT } from '../services/pokemonAPI';

import { useHistory, useLocation } from 'react-router-dom';

export default function PokemonPagination({ page }) {
  const pokemonCount = useSelector(getPokemonCount);
  const location = useLocation();
  const history = useHistory();

  const pokemonPageCount = pokemonCount ? Math.ceil(pokemonCount / LIMIT) : 0;

  const handleChange = (event, value) => {
    history.push({ ...location, search: `page=${value}` });
  };

  return (
    <Stack spacing={2}>
      {pokemonPageCount > 0 && (
        <Pagination
          count={pokemonPageCount}
          page={page}
          onChange={handleChange}
        />
      )}
    </Stack>
  );
}
