import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({}));

const RegistryListItem = (props) => {
    //use styles
	const classes = useStyles();
    return (
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText key={props.idx} primary={props.regData.groomName + ", " + props.regData.brideName} secondary="Jan 9, 2014"/>
      </ListItem>
    );
};

export default RegistryListItem;
