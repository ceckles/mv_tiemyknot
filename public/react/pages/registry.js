import React,{useState, useEffect} from 'react';
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
    minHeight: 'maxContent',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

}));

function generate(element,items) {
    return [...items].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
export const Registry = () =>{
        //use styles
        const classes = useStyles();
  
        const [singleReg, setSingleReg] = useState([]);
        

        async function fetchReg() {
          try {
                    
            const url = window.location.href.split('/');
            console.log("fetch url is: ",url[5])
            const fetchThis= "http://localhost:3000/registry/"+ url[5];
            console.log("URL", fetchThis)
            const response = await fetch(fetchThis);
            const responseJSON = await response.json()
            console.log("WHAT IS OUR individual RES? ", responseJSON);	
      
            setSingleReg(responseJSON.singleReg);
       
            
          } catch(err) {
            
            console.log("OH NO AN ERROR! ", err)
          }
        } 

          //useEffect
  useEffect(() => {
    fetchReg();
  }, []);

  
 console.log("bride", singleReg.brideName);
 console.log("groom", singleReg.groomName);
 
const bride = singleReg.brideName;
const groom = singleReg.groomName;  
const items = singleReg.Items;
console.log("items", items)
//  props.singleReg.items.map((item, idx)=>{
//         const name = "name";
//         const image = "image";
//         const itemlin = "link";
//         const quantity =" quantity"
//           )}   
        return(
            <div style={{height: "100vh"}}><Container maxWidth="sm">
        <br></br>
        <br></br>
        <br></br>
        <h3 style={{fontFamily: "Arial"}}>Registry for<br/> {bride} & {groom} </h3>
          



         <List subheader={<ListSubheader>Items</ListSubheader>} className={classes.root}>
           <List dense="">
             {
               items ? items.map((item, idx )=>{
                 return(
                  <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <RedeemIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={"" ? 'Secondary text' : "Additional text here"}
                  />
                  <ListItemSecondaryAction>
                  
                  <FormControlLabel
                    value={items.status}
                    control={<Switch color="primary" />}
                    label="Reserved?"
                    labelPlacement="Start"
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                 )
               }) : "No Items"
             }
           </List>

         </List>
      </Container>
      </div>
    

           
        )};

//export default Registry;