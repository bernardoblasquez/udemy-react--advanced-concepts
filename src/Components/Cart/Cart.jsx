import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';

import Modal from '../UI/Modal';
import CartItem from './CartItem'
import classes from  './Cart.module.css';
import Checkout from './Checkout';
import firebase_url from '../../firebase_url'

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const [isCheckout, setIsCheckout] = useState(false)

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount:1})
    }

    const cartItems = (<ul className={classes['cart-items']}>
            { 
                cartCtx.items.map( (item) => {
                    return(
                        <CartItem 
                            key={item.id}
                            name={item.name}
                            amount={item.amount}
                            price={item.price}
                            onRemove={cartItemRemoveHandler.bind(null, item.id)}
                            onAdd={cartItemAddHandler.bind(null, item)}
                        />
                    ) 
                })
            }
        </ul>
    );

    const submitOrderHandler = (userData) => {
        fetch(firebase_url, {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items,
            }) 
        })
        console.log(userData)
    }
    
    const clickOrderButtonHandler = () => {
        setIsCheckout(true)
    }

    const modalActions = (
        <div className={classes.actions}>
        <button 
            onClick={props.onCloseModal}
            className={classes['button--alt']}>
                Close
        </button>
            {   
                hasItems && <button  
                    onClick={clickOrderButtonHandler}
                    className={classes.button}>Order</button>
            }
        </div>
    )

    return (

        <Modal onClickOutsideModal={props.onCloseModal}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            { isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onCloseModal} /> }
            { !isCheckout && modalActions }
           
        </Modal>
    );
};

export default Cart;