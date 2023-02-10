import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import classes from './Confirm.module.css'

const Confirm = (props) => {
    const onClick = (e) => {
        e.stopPropagation();
    }
    return (

       <Backdrop onClick ={onClick} className={classes.ConfirmOuter}>
           <div className={classes.Confirm}>
               <p className={classes.ConfirmText}>{props.confirmText}</p>
           <div>
               <button className={classes.Cancel} onClick={(e)=> {
                   props.onCancel(e)
               }}> 取消 </button>
               <button className={classes.OK} onClick={(e)=> {
                   props.onConfirm(e)
               }}>确认</button>
           </div>


           </div>


       </Backdrop>
    );
};

export default Confirm;