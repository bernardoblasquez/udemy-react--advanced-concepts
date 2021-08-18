import { useRef, useState } from 'react';
import classes  from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {

    const [inputsIsValid, setInputsIsValid] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true,
    })

    const userNameInputRef = useRef('');
    const streetInputRef = useRef('');
    const postalCodeInputRef = useRef('');
    const cityInputRef = useRef('');

   

    const confirmHandler = (event) => {
        
        event.preventDefault()

        const enteredName = userNameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        console.log(userNameInputRef.current.value);

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;

        if (!formIsValid){
            return (
                setInputsIsValid({
                    name: enteredNameIsValid,
                    street: enteredStreetIsValid,
                    postalCode: enteredPostalCodeIsValid,
                    city: enteredCityIsValid
                })
            )
        }
    }

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={inputsIsValid.name ? classes.control : `${classes.control} ${classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input 
                    ref={userNameInputRef}
                    type='text' 
                    id='name' />
                {!inputsIsValid.name && <p>Enter with a valid Name</p>}
            </div>
            <div className={inputsIsValid.street ? classes.control : `${classes.control} ${classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input 
                    ref={streetInputRef}
                    type='text' 
                    id='street' />
                {!inputsIsValid.street && <p>Enter with a valid Street Name</p>}
                
            </div>
            <div className={inputsIsValid.postalCode ? classes.control : `${classes.control} ${classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input 
                    ref={postalCodeInputRef}
                    type='text' 
                    id='postal' />
                {!inputsIsValid.postalCode && <p>The postal code must have 5 characters</p>}
            </div>
            <div className={inputsIsValid.city ? classes.control : `${classes.control} ${classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input 
                    ref={cityInputRef}
                    type='text' 
                    id='city' />
                {!inputsIsValid.city && <p>Enter with a valid City Name</p>}

            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;