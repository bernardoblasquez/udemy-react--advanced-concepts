import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    const clickedCardHandler = () =>{
        props.onClickCart(true)
    }

    return(
        <button 
            onClick={clickedCardHandler}
            className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )
}

export default HeaderCartButton;