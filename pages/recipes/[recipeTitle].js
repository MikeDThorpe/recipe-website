import react from "react";

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

const RecipePage = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
    </div>
  );
};

export default RecipePage;
