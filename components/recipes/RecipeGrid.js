import React from "react";

import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes }) => {
  return (
    <div className="recipe_thumbnail_grid py-5">
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;
