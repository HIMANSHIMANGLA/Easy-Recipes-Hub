import React from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeTile({ recipe }) {
  return (
    <div className="recipeTile">
      <a href={recipe.recipe.url} className="recipeTile__link" target="_blank" rel="noopener noreferrer">
        {recipe.recipe.label}
      </a>
    </div>
  );
}
