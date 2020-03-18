import React from "react";
import './DishCard.css'
import { Link } from 'react-router-dom';

const DishCard = props => {

 return (
  <Link
    to={{
    pathname: `${props.meal.idMeal}`,
  }}
  >
  <div className="card">
    <img className="card-img-top" src={props.meal.strMealThumb} alt={props.meal.strMeal} />
    <div className="card-body">
    <h5 className="card-title">{props.meal.strMeal}</h5>
  </div>
</div>
</Link>
 );
};

export default DishCard;