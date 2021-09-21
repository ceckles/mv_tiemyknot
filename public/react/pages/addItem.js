import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel, Input, OutlinedInput } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

//Styles

const useStyles = makeStyles((theme) => ({ 
    root: {
        width: '100vw',
        minHeight: '100vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
        
      },
    textbox:{
        
        width: '60vw',

  },
  button: {
    width: "max-content",
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
    pageHeader: {
      color: "orange",

    },
  },
}));

const PageHeader = withStyles({
  root: {
    color: "#301d0f",
  },
})(Typography);

const AddItem = (props) => {
  //use styles
  const classes = useStyles();

  return (
    <div>
    <form action="http://localhost:3000/registry/addItem/" method="post" onSubmit={e => e.preventDefault()}>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <PageHeader variant="h3">Add Item</PageHeader>

          <FormControl className={classes.textbox} variant="outlined" required>
            <InputLabel htmlFor="name">Item Name</InputLabel>
            <OutlinedInput label="Item Name" />
          </FormControl>
          <br />
          <FormControl className={classes.textbox} variant="outlined" required>
            <InputLabel htmlFor="link">Item Link</InputLabel>
            <OutlinedInput label="Item Link" />
          </FormControl>
          <br />
          <FormControl className={classes.textbox} variant="outlined" required>
            <InputLabel htmlFor="quantity">Quantity</InputLabel>
            <OutlinedInput label="Quantity" />
          </FormControl>
          <br />
          <input
            type="hidden"
            id="RegistryId"
            name="RegistryId"
            // value={props.RegistryId}
            value="1"
          />
          <input
          type="hidden"
          id="status"
          name="status"
          // value={props.RegistryId}
          value={false}
        />
        <input type="hidden" id="image" name="image" value="null"/>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            {" "}
            Save{" "}
          </Button>
        </FormControl>
        </form>
      <br />
    </div>
  );
};

export default AddItem;
