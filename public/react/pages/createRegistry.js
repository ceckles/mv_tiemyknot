import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';




//Styles
const useStyles = makeStyles((theme) => ({ 


    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      input: {
        display: 'none',
      },



 }));

const CreateRegistry = () =>{
        //use styles
      
        const classes = useStyles();

        return(
            <div><p>Create Registry</p>


                <p>Groom</p>
                <p>Bride</p>
                
      
            <div>
                    <br></br>
            </div>
      <TextareaAutosize
      maxRows={4}
      aria-label="maximum height"
      placeholder="Enter Item here"
      defaultValue="Please enter the item list here"
    />

    
    

               <div></div>
               <Button variant="contained">Add Item</Button> <div>
                 
               </div>

                <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>

           



                <Button variant="contained">Submit</Button>

            </div>
        
       
        
            
            );
};

export default CreateRegistry;