import React, {useContext, useState} from 'react';
import Backdrop from "../../../UI/Backdrop/Backdrop";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './CartDetails.module.css';
import CartContext from '../../../store/CartContext'
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../../UI/Confirm/Confirm";

const CartDetails = () => {
    const ctx = useContext(CartContext);
    const [showConfirm, setShowConfirm] = useState(false);
    const onShowConfirm = () => {
        setShowConfirm(true);
    }
    const onCancel = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    }
    const onConfirm = () => {
        ctx.clearCart();
        setShowConfirm(false);

    }
    return (
        <Backdrop>
            {showConfirm && <Confirm confirmText="确认清空购物车吗" onCancel={onCancel} onConfirm={onConfirm}/>}
            <div className={classes.CartDetails}
            onClick={e=> e.stopPropagation()}
            >
                <header className={classes.Header}>
                    <h2 className={classes.Title}> 餐品详情</h2>
                    <div className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrash}/>
                            <span onClick={onShowConfirm}>清空购物车</span>
                    </div>
                </header>
                <div className={classes.MealList}>
                    {
                        ctx.items.map(item=> <Meal noDesc key={item.id} meal={item}/>)
                    }
                </div>

            </div>
        </Backdrop>
    );
};

export default CartDetails;