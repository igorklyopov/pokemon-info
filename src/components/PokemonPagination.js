import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getPokemonCount } from '../redux/pokemonSelectors';
import { useSelector } from 'react-redux';
import { LIMIT } from '../services/pokemonApiConstants';

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
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ mt: '10px' }}
    >
      {pokemonPageCount > 0 && (
        <Pagination
          count={pokemonPageCount}
          page={page}
          onChange={handleChange}
          sx={{ pt: '10px', pb: '10px' }}
        />
      )}
    </Stack>
  );
}
