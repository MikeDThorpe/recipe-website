import React from "react";

export const Recipes = React.createContext([]);

export function useRecipes() {
    return React.useContext(Recipes)
}