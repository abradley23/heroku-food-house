import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DishDetails.css'

const DishDetails = props => {

  const [recipe, setRecipe] = useState({ meals: [] })

  const getRecipe = async () => {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
      );
      setRecipe({ meals: data.meals[0] });
    };

    useEffect(() => {
      getRecipe();
    }, []);

  console.log();

    return (
      <div className="recipeCard">
        <div className="card text-center" id="recipeCard">
          <div className="card-body">
              <h1 className="card-title">{recipe.meals.strMeal}</h1>
              <p className="card-text">Category: {recipe.meals.strCategory}</p>
              <img className="card-img-bottom" src={recipe.meals.strMealThumb} alt={recipe.meals.strMeal} ></img>
              
              <p className="card-text">{recipe.meals.strInstructions}</p>
          </div>
      </div>
  </div>
    )
}



export default DishDetails;