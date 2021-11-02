import React from "react";

import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </>
  );
};

export default RecipeGrid;