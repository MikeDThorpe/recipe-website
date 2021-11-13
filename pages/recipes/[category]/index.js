import React from "react";

import RecipeGrid from "../../../components/recipes/RecipeGrid";

const CategoryPage = ({ category }) => {
  console.log(category);
  return (
    <section className="container">
      <h2 className="pt-5 text-center font-cyan">
        {category.title} Recipes
      </h2>
      <RecipeGrid recipes={category.recipes} category={category.title} />
    </section>
  );
};

export default CategoryPage;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.apiURL}categories`);
  const categoryData = await res.json();

  const paths = categoryData.map((category) => {
    return {
      params: {
        category: category.slug,
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
    `${process.env.apiURL}categories/${context.params.category}`
  );
  const categoryData = await res.json();

  return {
    props: { category: categoryData },
  };
}
