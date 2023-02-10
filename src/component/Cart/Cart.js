import React, {useContext, useState} from 'react';
import iconImg from '../../asset/bag.png';
import classes from './Cart.module.css';
import CartContext from "../../store/CartContext";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";
const Cart = () => {
    const ctx = useContext(CartContext);
    const [showDetails,setShowDetails] = useState(false);
    const [showCheckout, setCheckout] = useState(false);
    const showCheckoutHandler = () => {
        if (ctx.totalAmount===0) {
            return;
        }
        setCheckout(true);
    }
    const toggleDetailsHandler =  () => {
        if (ctx.totalAmount===0) {
            setShowDetails(false);
            return;
        }
        setShowDetails(prevState => !prevState);
    }

    const headCheckoutHandler = () => {
        setCheckout(false);
    }
    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHead={headCheckoutHandler}/>}
            {(showDetails && ctx.totalAmount!==0) && <CartDetails/>}
            <div className={classes.Icon}>
                <img src={iconImg}/>
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
            </div>
            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}


            <button
                onClick={showCheckoutHandler}
                className={`${classes.Button} ${ctx.totalAmount===0? classes.Disabled : null}`}
                >去结算</button>
        </div>
    );
};

export default Cart;