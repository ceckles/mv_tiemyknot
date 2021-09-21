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
import AddItem from '../pages/addItem'
//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    background: '#f5ebe1',
    minWidth: '100%',
    minHeight: '100vh',
    display: "flex",
    flexDirection: "column",
    //justifyContent: "center",
  },

}));

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
        <br></br>
        <br></br>
        <br></br>
        <h3 style={{fontFamily: "Arial"}}>Registry</h3>
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
      </Container>
      </div>
    

           
        )};

export default Registry;