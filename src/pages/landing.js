import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import ButtonBarComp from '../components/ButtonBar/buttonBarCom';
//Styles
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

const Landing = () => {
  //use styles
  const classes = useStyles();

  return (
    <div><p>Landing</p>
      <Typography variant="h6" className={classes.title}>
        Tie The Knot
      </Typography>
      <ButtonBarComp />
    </div>
  );
};

export default Landing;
