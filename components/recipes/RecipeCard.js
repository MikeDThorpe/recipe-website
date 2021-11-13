import React from "react";
import Link from "next/link";

import RecipeThumbnail from "./RecipeThumbnail";

const RecipeCard = ({ recipe, category }) => {
  let catSlug = "";

  if (category) {
    catSlug = category.toLowerCase();
  } else {
    catSlug = recipe.category.slug;
  }

  return (
    <Link href={`/recipes/${catSlug}/${recipe.slug}`}>
      <div className="recipe_card mb-4">
        <RecipeThumbnail src={recipe.thumbnail} />
        <h3>{recipe.title}</h3>
        <h5>Read </h5>
      </div>
    </Link>
  );
};

export default RecipeCard;
