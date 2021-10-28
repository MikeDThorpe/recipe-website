import React, { useState } from "react";

import RecipeCard from "../recipes/RecipeCard";

import styles from "../../styles/pages/Home.module.css";

const LatestRecipes = ({ recipes }) => {
  const [recipesToShow, setRecipesToShow] = useState(3);

  let revRecipes = recipes.reverse().slice(0, recipesToShow);

  return (
    <section>
      <h2>Latest Recipes</h2>
      <article className={styles.latest_recipes_container}>
        {revRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </article>
      <button disabled={recipesToShow == recipes.length ? true : false} onClick={() => setRecipesToShow(recipesToShow + 3)}>Show more</button>
    </section>
  );
};

export default LatestRecipes;
