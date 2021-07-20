import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import Modal from '../UI/Modal';
import CartItem from './CartItem'
import classes from  './Cart.module.css';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {

    }

    const cartItemAddHandler = (item) => {
        
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


    return (

        <Modal onClickOutsideModal={props.onCloseModal}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amout</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button 
                    onClick={props.onCloseModal}
                    className={classes['button--alt']}>
                        Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;