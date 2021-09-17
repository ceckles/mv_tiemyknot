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
        background: 'linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)',
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

const CreateReg = () =>{
        //use styles
        const classes = useStyles();
        
        return(
            <div><p>Create Registry</p>  
                <FormControl className={classes.root} noValidate autoComplete="off">      
                      <p>Create Registry</p>             
                          <TextField className={classes.textbox} required id="outlined-required" label="Groom" variant="outlined" /><br/>
                              <TextField className={classes.textbox} required id="outlined-required"label="Bride" variant="outlined" /><br/>
                    <p>Item List</p>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
        <                       ListItemText primary="Item 1" secondary="SilverWare" />
                                  </ListItem>
                             <ListItem>     
                               <ListItemText primary="Item 2" secondary="Candles" />
                            </ListItem>    
                        </List>
                        <Button variant="contained" color="primary" size="medium" className={classes.button}
                             > +    </Button>
                        


                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                  
                    <Button variant="contained" color="primary" size="large" className={classes.button}
                             > Submit    </Button>
               </FormControl>


            </div>);
};

export default CreateReg;