import Typography from "@material-ui/core/Typography";
import ButtonBarComp from './components/ButtonBar/butonBarCom'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
    //use styles
    const classes = useStyles();
  return (
    <div className="App">
      <Typography variant="h6" className={classes.title}>
        Tie The Knot
      </Typography>
      <ButtonBarComp/>
      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
    </div>
  );
}

export default App;
