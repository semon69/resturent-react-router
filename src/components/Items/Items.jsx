import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ meal }) => {
    const { strMeal, strArea, strMealThumb, idMeal } = meal
    return (
        <div>
            <div className='border-2 border-black rounded p-5'>
                <img className='' src={strMealThumb} alt="" />
                <h1 className='text-2xl font-bold'>{strMeal}</h1>
                <h2>{strArea}</h2>
                <Link className='hover:text-blue-900 font-bold' to={`/meals/${idMeal}`}>Show Details</Link>
                <Link className='hover:text-blue-900 font-bold' to={`/meals/${idMeal}`}>
                    <button className=' border-2 border-blue-700 px-3 bg-blue-400 hover:bg-blue-700 ml-3'>Show Details</button>
                </Link>

            </div>
        </div>
    );
};

export default Items;