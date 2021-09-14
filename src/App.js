import Typography from "@material-ui/core/Typography";
import ButtonBarComp from "./components/ButtonBar/buttonBarCom";
import { makeStyles } from "@material-ui/core/styles";
import AddItem from "./pages/addItem";
import Registry from "./pages/registry";
import CreateRigistry from "./pages/createRegistry";
import Landing from "./pages/landing";

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
    //Comment out all but your page
    <div className="App">
    <Landing />
    <AddItem />
    <Registry />
    <CreateRigistry />
    </div>
  );
}

export default App;
