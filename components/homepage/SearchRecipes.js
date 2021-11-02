import React, { useState, useEffect } from "react";

import RecipeGrid from "../recipes/RecipeGrid";

const SearchRecipes = ({ tags, recipes }) => {
  const [tagApplied, setTagApplied] = useState(tags[0].title);
  const [recipesToShow, setRecipesToShow] = useState([]);

  useEffect(() => {
    // filter recipes with the tagApplied (first tag on load)
    let filteredRecipes = [];
    // loop through recipes array and filter all recipes that have the tagApplied tag
    for (let i = 0; i < recipes.length; i++) {
      let r = recipes[i];
      for (let i = 0; i < r.tags.length; i++) {
        if (r.tags[i].title == tagApplied) {
          filteredRecipes.push(r);
        }
      }
    }
    // set recipes to show with filtered array
    setRecipesToShow(filteredRecipes);
  }, [tagApplied]);

  return (
    <section className="py-5 bg-yellow">
      <section className="container">
        <h2 className="text-center">Search Recipes</h2>
        <div className="mx-auto col-lg-8 pt-3 d-flex justify-content-center flex-wrap">
          {tags.map((tag) => (
            <div
              onClick={() => setTagApplied(tag.title)}
              key={tag.id}
              className={
                tagApplied == tag.title
                  ? "recipe_tag_active recipe_tag"
                  : "recipe_tag"
              }
            >
              <p>{tag.title}</p>
            </div>
          ))}
        </div>
        <section className="pt-5 recipe_thumbnail_grid">
          <RecipeGrid recipes={recipesToShow} />
        </section>
      </section>
    </section>
  );
};

export default SearchRecipes;
