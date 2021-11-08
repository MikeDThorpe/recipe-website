import React, { useState, useEffect } from "react";
import Link from "next/link";

import RecipeGrid from "./RecipeGrid";

const SuggestedRecipes = ({ category }) => {
  const [SuggestedRecipes, setSuggestedRecipes] = useState([]);
  const categoryTitle = category[0].title;

  const fetchRecipesByTag = async () => {
    const res = await fetch("http://localhost:1337/recipes");
    const recipes = await res.json();
    const filteredRecipes = recipes.filter(
      (recipe) => recipe.categories[0].title == categoryTitle
    );
    filteredRecipes.reverse().slice(0, 3);
    setSuggestedRecipes(filteredRecipes);
  };

  useEffect(() => {
    fetchRecipesByTag();
  }, []);

  return (
    <section className="mt-5 pt-5 border-top">
      <h2 className="font-cyan">More {categoryTitle} Recipes</h2>
      <RecipeGrid recipes={SuggestedRecipes} />
      <Link href={`/recipes/${categoryTitle}`}>
        <button>All {categoryTitle} Recipes</button>
      </Link>
    </section>
  );
};

export default SuggestedRecipes;
