import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blueGrey';

const theme = createTheme({
  palette: {
    primary: {
      main: "#301d0f",
    },
    secondary: {
      main: blue[500],
    },
    background: {
        default: "#f5ebe1"
    }
  },
});

export default theme;