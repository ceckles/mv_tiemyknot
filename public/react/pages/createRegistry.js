import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


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
        minHeight: "10vh",
        
        
        width: '20vw',
    },
    button: {
      width: "max-content",
      display: "flex",
      flexDirection: "column",
      
      justifyContent: "center",
  }
 
 }));

export const CreateRegistry = () =>{
        //use styles
        const classes = useStyles();
        
        return(
            <div>
              <form action="http://localhost:3000/registry/create/" method="post">
              <p>Create Registry</p>  

                <FormControl className={classes.root} noValidate autoComplete="off">      
                      <h2>Create Registry</h2>             
                          <TextField className={classes.textbox} required id="outlined-required" id="groomName" label="Groom" variant="outlined" /><br/>

                          <br />

                              <TextField className={classes.textbox} required id="outlined-required" id = "brideName" label="Bride" variant="outlined" /><br/>
                    
                        
                        


                      <br />
                      <br />
                      <br />
                      
                  
                    <Button variant="contained" type="submit" color="primary" size="large" className={classes.button}
                             > Submit    </Button>
               </FormControl>

              </form>
            </div>);
};

//export default CreateRegistry;