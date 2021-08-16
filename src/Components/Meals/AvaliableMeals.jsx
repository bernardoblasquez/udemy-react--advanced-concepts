import { useState, useEffect } from 'react';
import MealsItem from './MealItem/MealsItem';
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import firebase_url from '../../firebase_url';


const AvailableMeals = () => {
   
   const [meals, setMeals] = useState([]);
   const [isloading, setIsLoading] = useState(false)

   useEffect(() => {
      const fetchMeals = async () => {

         setIsLoading(true)
         
         const response = await fetch(firebase_url);
         const responseData = await response.json();

         const loadedMeals = [];

         for (const key in responseData) {
               loadedMeals.push({
               id: key,
               name: responseData[key].name,
               description: responseData[key].description,
               price: responseData[key].price,
            });
         }

         setMeals(loadedMeals);
         setIsLoading(false)
      };
  
      fetchMeals();
    }, []);

   const mealsList = meals.map( meal => {
      return(            
         <MealsItem 
            id={meal.id}                     
            name={meal.name} 
            description={meal.description} 
            price={meal.price}
            key={meal.id}
         />             
      )
   })

    return(
        <section className={classes.meals}>
            <Card>
               {  
                  isloading 
                     ? <p> loading...</p>
                     : <ul> {mealsList} </ul>
               }
               
            </Card>
        </section>
    )
}

export default AvailableMeals