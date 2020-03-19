import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import RandomRecipe from 'RandomRecipe';

const Jumbotron = props => {
const [ random, setRandom ] = useState({ meals: []})
const [ random2, setRandom2 ] = useState({ meals2: []})
const [ random3, setRandom3 ] = useState({ meals3: []})


const getRandom = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    setRandom({ meals: data.meals[0] });
  };

const getRandom2 = async () => {
  const { data } = await axios(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );
  setRandom2({ meals2: data.meals[0] });
  }

  const getRandom3 = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    setRandom3({ meals3: data.meals[0] });  
  }

  useEffect(() => {
    getRandom();
    getRandom2();
    getRandom3();
  }, []);

  console.log(random.meals.strMealThumb)

  return (
    <div id="carouselRecipe" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselRecipe" data-slide-to="0" className="active"></li>
        <li data-target="#carouselRecipe" data-slide-to="1"></li>
        <li data-target="#carouselRecipe" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={random.meals.strMealThumb} className="d-block w-100" alt={random.meals.strMeal}/>
        </div>
        <div className="carousel-item">
          <img src={random2.meals2.strMealThumb} className="d-block w-100" alt={random.meals.strMeal}/>
        </div>
        <div className="carousel-item">
          <img src={random3.meals3.strMealThumb} className="d-block w-100" alt={random.meals.strMeal}/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselRecipe" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselRecipe" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Jumbotron;
