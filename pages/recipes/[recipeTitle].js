import React from "react";
import Head from "next/head";

import RecipeBody from "../../components/recipes/RecipeBody";
import RecipeHeader from "../../components/recipes/RecipeHeader";
import SuggestedRecipes from "../../components/recipes/SuggestedRecipes";

const RecipePage = ({ recipe }) => {
  return (
    <section className="container">
      <Head>
        <title>{recipe.title} | Give it Beans</title>
        <meta property="og:title" key="title" />
      </Head>
      <RecipeHeader recipe={recipe} />
      <RecipeBody recipe={recipe} />
      <SuggestedRecipes category={recipe.categories} />
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
