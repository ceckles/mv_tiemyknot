import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

//Styles
const useStyles = makeStyles((theme) => ({  }));

const AddItem = () =>{
        //use styles
        const classes = useStyles();

        return(
            <div><p>Add Item</p>  
                
                <FormControl className={classes.root} noValidate autoComplete="off">                   
                    <TextField required id="outlined-required" label="Item Name" variant="outlined" /><br/>
                    <TextField required id="outlined-required"label="Item Link" variant="outlined" /><br/>
                </FormControl><br/>
               
    
                <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
                


            </div>);
};

export default AddItem;