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

}));

function App() {
  //use styles
  const classes = useStyles();
  
  return (
    <Landing />
  );
}

export default App;
