import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import classes from './Checkout.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import cartContext from "../../../store/CartContext";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import Bar from "./Bar/Bar";
const checkoutRoot = document.getElementById('checkout-root');
const Checkout = (props) => {
    const ctx = useContext(cartContext);
return ReactDOM.createPortal(<div className={classes.Checkout}>
            <div className={classes.Cross}>
                <FontAwesomeIcon icon={faXmark}
                 onClick={()=>{props.onHead()}} />

            </div>
    <div className={classes.MealsDESC}>
        <header onClick={classes.Header}>
            <h2 className={classes.Title}>餐品详情</h2>
        </header>
        <div>
            {ctx.items.map(item => <CheckoutItem key={item.id} meal={item}/>)}
        </div>
        <footer className={classes.Footer}>
            <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
        </footer>
    </div>
        <Bar totalPrice={ctx.totalPrice}/>
        </div>
    ,checkoutRoot);

};

export default Checkout;