import React from "react";
import RecipeBody from "../../components/recipes/RecipeBody";

import RecipeHeader from "../../components/recipes/RecipeHeader";

const RecipePage = ({ recipe }) => {
  return (
    <section className="container">
      <RecipeHeader recipe={recipe} />
      <RecipeBody recipe={recipe} />
    </section>
  );
};

export default RecipePage;

export async function getStaticPaths() {
  const recipeRes = await fetch("http://localhost:1337/recipes");
  const recipes = await recipeRes.json();

  const paths = recipes.map((recipe) => {
    return {
      params: { recipeTitle: recipe.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const recipeRes = await fetch(
    `http://localhost:1337/recipes/${context.params.recipeTitle}`
  );
  const recipeData = await recipeRes.json();

  return {
    props: { recipe: recipeData },
  };
}
