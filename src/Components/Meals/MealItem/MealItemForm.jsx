import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = () =>{
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max:'5',
                step:'1',
                value:'1',
                className: 'sasdasdas'
            }} />
            <button>+ add</button>
        </form>
    )
}

export default MealItemForm