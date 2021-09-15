import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

//Styles
const useStyles = makeStyles((theme) => ({ 
    root: {
        background: 'linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)',
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
    }
 }));

const AddItem = () =>{
        //use styles
        const classes = useStyles();

        return(
            <div><p>Add Item</p>  
                
                <FormControl className={classes.root} noValidate autoComplete="off">                   
                    <TextField className={classes.textbox} required id="outlined-required" label="Item Name" variant="outlined" /><br/>
                    <TextField className={classes.textbox} required id="outlined-required"label="Item Link" variant="outlined" /><br/>
                
               
    
                <Button variant="contained" color="primary" size="large" className={classes.button}
        startIcon={<SaveIcon />} > Save     </Button>
                </FormControl><br/>


            </div>);
};

export default AddItem;