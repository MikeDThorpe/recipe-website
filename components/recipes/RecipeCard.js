import React from "react";
import Link from "next/link";

import RecipeThumbnail from "./RecipeThumbnail";

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`/recipes/${recipe.categories[0].slug}/${recipe.slug}`}>
      <div className="recipe_card mb-4">
        <RecipeThumbnail src={recipe.thumbnail} />
        <h3>{recipe.title}</h3>
        <h5>Read </h5>
      </div>
    </Link>
  );
};

export default RecipeCard;
