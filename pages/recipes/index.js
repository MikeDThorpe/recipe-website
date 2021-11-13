import React from "react";

import RecipeGrid from "../../components/recipes/RecipeGrid";
import CategoryBoxes from "../../components/homepage/CategoryBoxes";

const AllRecipes = ({ categories, recipes }) => {

  return (
    <section className="container pt-5">
      <h2 className="mb-5 text-center font-cyan">All Recipes</h2>
      <CategoryBoxes />
      <RecipeGrid recipes={recipes} />
    </section>
  );
};

export default AllRecipes;

export async function getStaticProps() {
  const [categoriesRes, recipesRes] = await Promise.all([
    fetch(`${process.env.apiURL}categories`),
    fetch(`${process.env.apiURL}recipes`),
  ]);

  const [categories, recipes] = await Promise.all([
    categoriesRes.json(),
    recipesRes.json(),
  ]);

  return {
    props: {
      categories,
      recipes,
    },
  };
}