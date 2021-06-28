import Modal from '../UI/Modal'
import classes from  './Cart.module.css'

const Cart = props => {

    const cartItems = (<ul className={classes['cart-items']}>
            {
                [{ 
                    id:'c1',
                    name: 'Sushi',
                    amount: 2,
                    price: 12.99
                }].map((item) => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    );

    const modalClickHandler = () => {
        props.onClickCancel(false)
    }

    return (

        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amout</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button 
                    onClick={modalClickHandler}
                    className={classes['button--alt']}>
                        Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;