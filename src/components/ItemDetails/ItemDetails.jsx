import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ItemDetails = () => {
    const navigate = useNavigate()
    const navigateBtn = () =>{
        navigate(-1)
    }
    const itemDetails = useLoaderData()
    console.log(itemDetails.meals[0])
    const { strArea, strMeal, strMealThumb, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strInstructions, strSource } = itemDetails.meals[0]

    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <h1 className='text-3xl font-bold'>{strMeal}</h1>
                <img className='h-96' src={strMealThumb} alt="" />
            </div>
            <div className='flex gap-40 my-10'>
                <div>
                    <h1>See Here..</h1>
                    <iframe src={strSource} frameborder="0"></iframe>
                </div>
                <div>
                    <h1 className='font-bold'>Grediant</h1>
                    <p>{strIngredient1}</p>
                    <p>{strIngredient2}</p>
                    <p>{strIngredient3}</p>
                    <p>{strIngredient4}</p>
                    <p>{strIngredient5}</p>
                    <p>{strIngredient6}</p>
                    <p>{strIngredient7}</p>
                    <p>{strIngredient8}</p>
                </div>
            </div>
            <p className='font-bold'>Instruction:</p>
            <p>{strInstructions}</p>
            <button className='border bg-blue-600 text-center px-5 rounded my-10' onClick={navigateBtn}>Go Back</button>
        </div>
    );
};

export default ItemDetails;
