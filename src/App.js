import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe';

const App = () => {
  const APP_ID = '2414e5d1';
  const APP_KEY = '85d083ac9f36f63d7b898a165812bed4';

  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    getRecipies();
  }, []);
  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  };
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipies.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};
export default App;
