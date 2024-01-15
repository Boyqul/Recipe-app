import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  //All state
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  //Function Reacipe Searching
  const SearchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    SearchRecipes();
  }, []);

  const handlerSubmit = (event) => {
    event.preventDefault();
    SearchRecipes();
  };

  return (
    <div className="container">
      <h2 className="info">My Recipe App</h2>

      <SearchBar
        handlerSubmit={handlerSubmit}
        onChange={(event) => setQuery(event.target.value)}
        isLoading={isLoading}
        value={query}
      />
      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
