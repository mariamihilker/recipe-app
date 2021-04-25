
import './App.css';
import React,{useEffect, useState} from 'react';
import Recipe from './RecipeItem.js';


const App = () => {
  const APP_ID = 'c947eab7';
  const APP_KEY = process.env.REACT_APP_RECIPE_APP_KEY

 
  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState('');
  const[query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes()
  },[query])
  
//Calling Api for recipes
const getRecipes = async () => {
  const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await res.json();
  setRecipes(data.hits)

  //console.log(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
}
const updateSearch = e => {
  setSearch(e.target.value)
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}

  return(
    <div className="App">
      <h1 className="title">What to cook?</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-input" type="text" placeholder="Find the recipe" value={search} onChange={updateSearch}/>
        <button  className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes-container">
        {/* {console.log(recipes)} */}
      {recipes.map(recipe => (
        
        <Recipe recipe={recipe.recipe} key={recipe.recipe.label}/>
      ))}
      </div>
    </div>
  )
}

export default App;
