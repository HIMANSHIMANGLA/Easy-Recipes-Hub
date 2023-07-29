import Axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTile from "./components/recipe-tile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "f397cc36";
  const YOUR_APP_KEY = "f6348ee7ccee020028360b16b7ca0e00";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
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
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />

        <select className="app__healthLabels">
          <option onChange={() => sethealthLabels("vegan")}>vegan</option>
          <option onChange={() => sethealthLabels("vegetarian")}>vegetarian</option>
          <option onChange={() => sethealthLabels("paleo")}>paleo</option>
          <option onChange={() => sethealthLabels("dairy-free")}>dairy-free</option>
          <option onChange={() => sethealthLabels("gluten-free")}>gluten-free</option>
          <option onChange={() => sethealthLabels("wheat-free")}>wheat-free</option>
          <option onChange={() => sethealthLabels("low-sugar")}>low-sugar</option>
          <option onChange={() => sethealthLabels("egg-free")}>egg-free</option>
          <option onChange={() => sethealthLabels("peanut-free")}>peanut-free</option>
          <option onChange={() => sethealthLabels("tree-nut-free")}>tree-nut-free</option>
          <option onChange={() => sethealthLabels("soy-free")}>soy-free</option>
          <option onChange={() => sethealthLabels("fish-free")}>fish-free</option>
          <option onChange={() => sethealthLabels("shellfish-free")}>shellfish-free</option>
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