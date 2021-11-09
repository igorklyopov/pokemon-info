import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function Notification({ message }) {
  return (
    <Box sx={{ ml: 'auto', mr: 'auto', pt: '15%', pb: '15%' }}>
      <Typography variant="h5" align="center">
        {message}
      </Typography>
    </Box>
  );
}
