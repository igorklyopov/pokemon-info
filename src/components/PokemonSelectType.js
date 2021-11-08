import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
  getPokemonTypes,
  getFilterPokemonByType,
} from '../redux/pokemonSelectors';
import { getPokemonTypesAll } from '../redux/pokemonOperations';
import { changePokemonFilterByType } from '../redux/pokemonSlice';

export default function PokemonSelectType() {
  const [age, setAge] = useState('');
  const dispatch = useDispatch();
  const pokemonTypes = useSelector(getPokemonTypes);
  const filterPokemonByType = useSelector(getFilterPokemonByType);

  useEffect(() => {
    dispatch(getPokemonTypesAll());
  }, [dispatch]);

  const onPokemonSelectTypeChange = (e) => {
    dispatch(changePokemonFilterByType(e.target.value));
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={filterPokemonByType}
          onChange={onPokemonSelectTypeChange}
          displayEmpty
          inputProps={{ 'aria-label': 'select pokemon type' }}
        >
          <MenuItem value="">all</MenuItem>
          {pokemonTypes?.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </>
  );
}
