import Axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTile from "./components/recipe-tile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan");

  const YOUR_APP_ID = "f397cc36";
  const YOUR_APP_KEY = "f6348ee7ccee020028360b16b7ca0e00";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  const handleHealthLabelChange = (e) => {
    setHealthLabels(e.target.value);
  };

  return (
    <div className="app">
      <h1> Easy Recipes Hub 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="enter ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />

        <select className="app__healthLabels" onChange={handleHealthLabelChange} value={healthLabels}>
          <option value="vegan">vegan</option>
          <option value="vegetarian">vegetarian</option>
          <option value="paleo">paleo</option>
          <option value="dairy-free">dairy-free</option>
          <option value="gluten-free">gluten-free</option>
          <option value="wheat-free">wheat-free</option>
          <option value="low-sugar">low-sugar</option>
          <option value="egg-free">egg-free</option>
          <option value="peanut-free">peanut-free</option>
          <option value="tree-nut-free">tree-nut-free</option>
          <option value="soy-free">soy-free</option>
          <option value="fish-free">fish-free</option>
          <option value="shellfish-free">shellfish-free</option>
        </select>
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}
export default App;
