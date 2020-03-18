import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomRecipe.css'

const RandomRecipe = () => {

    const [ random, setRandom ] = useState({ meals: []})

    const getRandom = async () => {
        const { data } = await axios(
          `https://www.themealdb.com/api/json/v1/1/random.php`
        );
        setRandom({ meals: data.meals[0] });
      };
 

      useEffect(() => {
        getRandom();
      }, []);

      console.log(random);

    return (
        <div className="randomCard">
            <div className="card text-center" id="randomCard">
                <div className="card-body">
                    <h1 className="card-title">{random.meals.strMeal}</h1>
                    <p className="card-text">Category: {random.meals.strCategory}</p>
                    <img className="card-img-bottom" src={random.meals.strMealThumb} alt={random.meals.strMeal} ></img>
                    <p className="card-text">{random.meals.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}

export default RandomRecipe;