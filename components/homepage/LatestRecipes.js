import React from "react";

import RecipeGrid from "../recipes/RecipeGrid";
import RecipeCard from "../recipes/RecipeCard";

const LatestRecipes = ({ recipes }) => {
  let revRecipes = recipes.reverse().slice(0, 6);

  return (
    <section className="container py-5">
      <h2 className="mb-4 text-center">Latest Recipes</h2>
      <div className="recipe_thumbnail_grid">
        <RecipeGrid recipes={revRecipes} />
      </div>
    </section>
  );
};

export default LatestRecipes;
