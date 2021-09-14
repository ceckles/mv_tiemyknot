import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComp = (props) =>{

    return(
        <Button onClick={() =>{ alert('click') }} color="inherit">{props.name}</Button>
    );
};

export default ButtonComp;