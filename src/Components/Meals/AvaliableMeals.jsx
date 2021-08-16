import { useState, useEffect } from 'react';
import MealsItem from './MealItem/MealsItem';
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import firebase_url from '../../firebase_url';


const AvailableMeals = () => {
   
   const [meals, setMeals] = useState([]);
   const [isloading, setIsLoading] = useState(false);
   const [httpError, setHttpError ] = useState();

   useEffect(() => {
      const fetchMeals = async () => {

         setIsLoading(true)
         
         const response = await fetch(firebase_url);

         if (!response.ok){
            throw new Error("Deu XABÚ")
         }

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

      fetchMeals().catch( error => {
         setIsLoading(false)
         setHttpError(error.message)
      });

      // can not use try/catch here - 
      // i have to use await, and this cam be done inside useEffect.
      // It could use a function like fetchMeals, but it is easier use .catch to deals
      // with error 

   }, []);

   if (httpError){
      return <section className={classes.meals}>
         <p className={classes.MealsError}>{httpError}</p>
      </section>
   }

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