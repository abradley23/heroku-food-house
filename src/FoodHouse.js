import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm'
import DishCard from './components/DishCard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RandomRecipe from './components/RandomRecipe';
import About from './components/About';
import DishDetails from './components/DishDetails';
import Jumbotron from './components/Jumbotron';

const FoodHouse = () => {

  const [data, setData] = useState({ hits: [] })
  const [search, setSearch] = useState('')

  const fetchData = async () => {
    const result = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    setData({ hits: result.data.meals });
  };
 

  useEffect(() => {
    fetchData();
  }, [search]);

  console.log(data);
 
  return (
    <Router>
      <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Food House   <img 
            src="https://cdn.onlinewebfonts.com/svg/img_483501.png" 
            height="30px" 
            width="30px">
          </img></a>
          <ul className="navbar-nav">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About Food House</Link>
            </li>
            <li>
              <Link to="/random" className="nav-link">Recipe of the Day</Link>
            </li>
          </ul>
        </div>
        <div>
          <button id="profile-badge" type="button" className="btn btn-primary pull-right">
            Profile 
              <span className="badge badge-light">9</span>
              <span className="sr-only">unread messages</span>
          </button>
        </div>
        <Switch>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/random">
           <RandomRecipe />
         </Route>
         <Route path="/:id" component={DishDetails} />
         <Route exact path="/">
         <SearchForm setSearch={setSearch} initialPlaceholder={search} />
        <Jumbotron />

         <div className="container">
              {data.hits && data.hits.length
                ? data.hits.map(meal =>
                  <DishCard key={meal.idMeal} meal={meal}>
                  </DishCard>)
                : "Nothing found :-/"}
            </div>
         </Route>
       </Switch>
      </div>
    </Router>
  );
 
}

export default FoodHouse;