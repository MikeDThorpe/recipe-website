import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useRecipes } from "../../context/Recipes.context";
import RecipeGrid from "./RecipeGrid";

const SuggestedRecipes = ({ category }) => {
  const [SuggestedRecipes, setSuggestedRecipes] = useState([]);
  const categoryTitle = category.title;
  const recipes = useRecipes();

  const filterRecipesByTag = () => {
    const filteredRecipes = recipes.filter(
      (recipe) => recipe.category.title == categoryTitle
    );
    filteredRecipes.reverse().slice(0, 3);
    setSuggestedRecipes(filteredRecipes);
  };

  useEffect(() => {
    filterRecipesByTag();
  }, [categoryTitle]);

  return (
    <section className="mt-5 pt-5 border-top">
      <h2 className="font-cyan">More {categoryTitle} Recipes</h2>
      <RecipeGrid recipes={SuggestedRecipes} />
      <Link href={`/recipes/${categoryTitle.toLowerCase()}`}>
        <button>All {categoryTitle} Recipes</button>
      </Link>
    </section>
  );
};

export default SuggestedRecipes;