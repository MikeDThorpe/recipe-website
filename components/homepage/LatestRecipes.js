import RecipeCard from "../recipes/RecipeCard";

const LatestRecipes = ({ recipes }) => {

  let revRecipes = recipes.reverse().slice(0, 6);

  return (
    <section className="container py-5">
      <h2 className="mb-4 text-center">Latest Recipes</h2>
      <article className="pb-5 recipe_thumbnail_grid">
        {revRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </article>
    </section>
  );
};

export default LatestRecipes;