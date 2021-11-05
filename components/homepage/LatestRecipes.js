import React from "react";

import RecipeGrid from "../recipes/RecipeGrid";

const LatestRecipes = ({ recipes }) => {
  let revRecipes = recipes.reverse().slice(0, 6);

  return (
    <section className="container py-5">
      <h2 className="text-center font-cyan">Latest Recipes</h2>
      <RecipeGrid recipes={revRecipes} />
    </section>
  );
};

export default LatestRecipes;
