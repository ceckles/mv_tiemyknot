import { makeStyles } from "@material-ui/core/styles";
import AddItem from "./pages/addItem";
import Registry from "./pages/registry";
import CreateRegistry from "./pages/createRegistry";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//Styles
const useStyles = makeStyles((theme) => ({

}));

function App() {
  //use styles
  const classes = useStyles();
  
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path='/addItem' component={AddItem} />
    <Route exact path='/registry' component={Registry} />
    <Route exact path='/createRegistry' component={CreateRegistry} />
    <Route exact path='/index' component={Landing} />
    </Switch>
    <a href="/registry">Registry </a>
    <a href="/createRegistry">Create Registry </a>
    <a href="/addItem">Add Item</a>
    <a href="/index">Landing</a>
    </div>
    </Router>
  );
}

export default App;
