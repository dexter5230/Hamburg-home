import React from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../../store/CartContext";
const Counter = (props) => {
    const ctx = React.useContext(CartContext);
    const onAddHandler = () => {
       ctx.addItem(props.meal);
    }
    const onRemove = () => {
        ctx.removeItem(props.meal);
    }

    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount && props.meal.amount !== 0) ? (<><button className={classes.Sub} onClick={onRemove}><FontAwesomeIcon icon={faMinus}/></button> <span className={classes.Amount}>{props.meal.amount}</span></>)  : null
            }


            <button className={classes.Add} onClick={onAddHandler}><FontAwesomeIcon icon={faPlus}/></button>
        </div>
    );
};

export default Counter;