import React from "react";

import RecipeGrid from "../recipes/RecipeGrid";

const FavouriteRecipes = ({ recipes }) => {
  const favouriteRecipes = recipes.filter((recipe) => recipe.favourite);

  favouriteRecipes.reverse().slice(0, 6);

  return (
    <section className="container my-5 border-bottom">
      <h2 className="text-center font-cyan">Kitchen Favourites</h2>
      <RecipeGrid recipes={favouriteRecipes} />
    </section>
  );
};

export default FavouriteRecipes;
