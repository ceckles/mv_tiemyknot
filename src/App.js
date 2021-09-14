import Typography from "@material-ui/core/Typography";
import ButtonBarComp from "./components/ButtonBar/buttonBarCom";
import { makeStyles } from "@material-ui/core/styles";
import AddItem from "./pages/addItem";
import Registry from "./pages/registry";
import CreateRegistry from "./pages/createRegistry";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
    textTransform: "uppercase",
  },
}));

function App() {
  //use styles
  const classes = useStyles();
  
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/addItem' component={AddItem} />
    <Route exact path='/registry' component={Registry} />
    <Route exact path='/createRegistry' component={CreateRegistry} />
    </Switch>
    <a href="/">Landing </a>
    <a href="/registry">Registry </a>
    <a href="/createRegistry">Create Registry </a>
    <a href="/addItem">Add Item</a>
    </div>
    </Router>
  );
}

export default App;
