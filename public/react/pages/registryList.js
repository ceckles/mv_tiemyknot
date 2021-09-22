import React, { useState } from "react";
import { makeStyles, theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }
}));


const RegistryList = props => {
  const [regID, setRegID] = useState(0);

  //use styles
  const classes = useStyles();
  return (
    <div className={classes.root} align="center">

      <Box>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          align="center"
        >
          {props.registryData.map((registry, idx) => {
            return (
              <ListItem key={idx}>
                <Link
                  to={`/registry/${registry.id}`}
                  style={{ textDecoration: "none", color: "#301d0f" }}
                >
                  <ListItemText
                    primary={`${registry.brideName} & ${registry.groomName}`}
                    key={idx}
                  />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>

    </div>
  );
};
export default RegistryList;
