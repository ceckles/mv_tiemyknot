import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

//Styles
const useStyles = makeStyles((theme) => ({}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const CreateRegistry = () => {
  //use styles
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div>
      <p>Create Registry </p>

      <FormControl className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.textbox}
          required
          id="outlined-required"
          label="Enter Groom Name"
          variant="outlined"
        />
        <br />
        <TextField
          className={classes.textbox}
          required
          id="outlined-required"
          label="Enter Bride name"
          variant="outlined"
        />
        <br />

        <div></div>
      </FormControl>
      <br />

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        {" "}
        Add item
      </Button>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}></div>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Item List
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          </div>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        {" "}
        Submit{" "}
      </Button>
    </div>
  );
};

export default CreateRegistry;
