import { useContext } from 'react'
import CartContext from '../../../store/cart-context';

import classes from './MealsItem.module.css'
import MealItemForm from './MealItemForm'

const MealsItem = (props) => {
    
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {

        console.log(`amount: ${amount}`)

        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li  className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>    
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealsItem