import React from "react";
import Head from "next/head";

import RecipeBody from "../../../components/recipes/RecipeBody"
import RecipeHeader from "../../../components/recipes/RecipeHeader";
import SuggestedRecipes from "../../../components/recipes/SuggestedRecipes";

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
  const res = await fetch(`${process.env.apiURL}recipes`);
  const recipeData = await res.json();

  const paths = recipeData.map((recipe) => {
    return {
      params: {
        category: recipe.categories[0].slug,
        recipe: recipe.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.apiURL}recipes/${context.params.recipe}`
  );
  const recipeData = await res.json();

  return {
    props: { recipe: recipeData },
  };
}
