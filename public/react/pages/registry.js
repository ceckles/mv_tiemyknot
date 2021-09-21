import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import RedeemIcon from '@material-ui/icons/Redeem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Container from '@material-ui/core/Container';

//Styles
const useStyles = makeStyles((theme) => ({ }));

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
const Registry = (props) =>{
        //use styles
        const classes = useStyles();
        console.log(props.registryList);
        return(
            <div><Container maxWidth="sm">
        <h1  style={{ bgcolor: '#cfe8fc'}}>
        <p>Registry</p>
        
         <List subheader={<ListSubheader>Items</ListSubheader>} className={classes.root}>
           <List dense="">
             {generate(
               <ListItem>
                 <ListItemAvatar>
                   <Avatar>
                     <RedeemIcon />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText
                   primary="Item link here"
                   secondary={"" ? 'Secondary text' : "Additional text here"}
                 />
                 <ListItemSecondaryAction>
                 
                 <FormControlLabel
                   value="Reserved"
                   control={<Switch color="primary" />}
                   label="Reserved?"
                   labelPlacement="Start"
                   />
                 </ListItemSecondaryAction>
               </ListItem>,
             )}
           </List>

         </List>
         </h1>
      </Container>
      </div>
    

           
        )};

export default Registry;