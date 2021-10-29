import React, { useState } from "react";

import RecipeCard from "../recipes/RecipeCard";

const LatestRecipes = ({ recipes }) => {
  const [recipesToShow, setRecipesToShow] = useState(3);

  let revRecipes = recipes.reverse().slice(0, recipesToShow);

  return (
    <section className="container py-5">
      <h2 className="mb-4 text-center">Latest Recipes</h2>
      <article className="recipe_thumbnail_grid">
        {revRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </article>
      <button
        disabled={recipesToShow == recipes.length ? true : false}
        onClick={() => setRecipesToShow(recipesToShow + 3)}
      >
        Show more
      </button>
    </section>
  );
};

export default LatestRecipes;
