import React from "react";

const CategoryPage = ({ category }) => {
  return (
    <section className="container">
          <h2 className="pt-5 text-align-center font-cyan">{category.title} Recipes</h2>
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