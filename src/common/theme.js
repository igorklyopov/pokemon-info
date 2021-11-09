import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#60D394',
    },
    secondary: {
      main: '#CAFFBF',
    },
    background: {
      paper: '#FFFFEB',
      default: '#FDFFB6',
    },
    text: {
      primary: '#EE6055',
    },
  },
  typography: {
    fontFamily: 'Mochiy Pop P One',
  },
});

export { theme };
