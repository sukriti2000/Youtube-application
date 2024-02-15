import React from 'react';
import BackDrop from '../Backdrop/Backdrop';
import Aux from '../../Hoc/auxlliary';
import classes from './Modal.module.css';

const Modal = (props)=>{
    return(
        <Aux>
            <BackDrop click={props.click} />
            <div className={classes.Modal}>
                {props.children}
            </div>
        </Aux>
    )
}

export default Modal;