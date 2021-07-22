import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const [btnIsHighleghted, setBtnIsHIghlighted] = useState(false)
    
    const numberOfCartItems = cartCtx.items.reduce((curNumer, item)=>{
        return curNumer + item.amount;
    }, 0)

    const { items } = cartCtx;
    const btnClasses = `${classes.button} ${btnIsHighleghted ? classes.bump : ''}`;

    useEffect(() => {
        
        if (cartCtx.items.length === 0){
            return;
        }

        setBtnIsHIghlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHIghlighted(false);
            
        }, 300);


        return () => {
           clearTimeout(timer)
        }
    }, [items])

    return(
        <button 
            onClick={props.onClickCart}
            className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;