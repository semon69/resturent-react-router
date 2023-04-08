import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Items from '../Items/Items';

const Restuarent = () => {
    const meals = useLoaderData()
    console.log(meals.meals)
    return (
        <div className='grid grid-cols-3 gap-7 max-w-7xl mx-auto'>
            {
                meals.meals.map(meal => <Items 
                    key={meal.idMeal}
                    meal = {meal}
                ></Items>)
            }
        </div>
    );
};

export default Restuarent;