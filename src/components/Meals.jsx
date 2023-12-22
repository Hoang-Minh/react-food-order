import React, { useEffect } from 'react';
import { useState } from 'react';
import MealItem from './MealItem';

const Meals = () => {

    const [loadedMeals, setLoadedMeals] = useState([]); // [state, function to update state

    
    // const fetchMeals = async () => {
    //     const response = await fetch("http://localhost:3000/meals");

    //     if(!response.ok) {
    //         //..throw error
    //     }

    //     const meals = await response.json();
    //     setLoadedMeals(meals);
    // }

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch("http://localhost:3000/meals");

            if(!response.ok) {
                //..throw error
            }

            const meals = await response.json();
            setLoadedMeals(meals);
        }

        fetchMeals();

    }, []);


    
  return (
    <ul id="meals">
        {loadedMeals.map(meal => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  )
}

export default Meals