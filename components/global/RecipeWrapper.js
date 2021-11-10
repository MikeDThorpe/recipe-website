import React, { useState, useEffect } from "react";

import { Recipes } from "../../context/Recipes.context";

const RecipeWrappaer = ({ children }) => {
  const [allRecipes, setAllRecipes] = useState([]);

  const fetchRecipes = async () => {
    const res = await fetch(`${process.env.apiURL}recipes`);
    const recipeData = await res.json();
    setAllRecipes(recipeData);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return <Recipes.Provider value={allRecipes}>{children}</Recipes.Provider>;
};

export default RecipeWrappaer;