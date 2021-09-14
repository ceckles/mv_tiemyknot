import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blueGrey';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: blue[500],
    },
    background: {
        default: "#fff"
    }
  },
});

export default theme;