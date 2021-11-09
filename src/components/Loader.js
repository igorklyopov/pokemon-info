import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ml: 'auto',
        mr: 'auto',
        pt: '15%',
        pb: '15%',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
