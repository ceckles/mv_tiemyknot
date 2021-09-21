import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input, OutlinedInput } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import { orange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { withStyles} from '@material-ui/core/styles'

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
    pageHeader:{
        color :'orange'
    }
    }
 }));

 const PageHeader =withStyles({
     root: {
         color: orange[500],
     }
})(Typography);

const AddItem = () =>{
        //use styles
        const classes = useStyles();

        return(
            <div>
                
                <FormControl className={classes.root} noValidate autoComplete="off">                   
                   <PageHeader variant="h3" >Add Item</PageHeader>

                    <FormControl className={classes.textbox} variant="outlined" required>
                        <InputLabel htmlFor="item-name">Item Name</InputLabel>
                        <OutlinedInput label="Item Name"  />
                    </FormControl>
                    <br/>
                    <FormControl className={classes.textbox} variant="outlined" required>
                        <InputLabel htmlFor="item-link">Item Link</InputLabel>
                        <OutlinedInput label="Item Link"  />
                    </FormControl>
                    <br/>
                    <FormControl className={classes.textbox} variant="outlined" required>
                        <InputLabel htmlFor="item-link">Quantity</InputLabel>
                        <OutlinedInput label="Quantity"  />
                    </FormControl>
                    <br/>
               
    
                <Button variant="contained" color="primary" size="large" className={classes.button}
        startIcon={<SaveIcon />} > Save     </Button>
                </FormControl><br/>


            </div>);
};

export default AddItem;