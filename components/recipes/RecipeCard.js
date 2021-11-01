import React from "react";
import Link from "next/link";
import Image from "next/image";

import RecipeThumbnail from "./RecipeThumbnail";

import styles from "../../styles/components/Recipes.module.css";

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`/recipes/${recipe.slug}`}>
      <div className={styles.recipe_card}>
        <RecipeThumbnail src={recipe.thumbnail} />
        <h3>{recipe.title}</h3>
        <h5>Read </h5>
      </div>
    </Link>
  );
};

export default RecipeCard;
