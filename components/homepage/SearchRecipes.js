import React, { useState, useEffect } from "react";

import RecipeCard from "../recipes/RecipeCard";

const SearchRecipes = ({ tags, recipes }) => {
  const [tagApplied, setTagApplied] = useState(tags[0].title);
  const [recipesToShow, setRecipesToShow] = useState([]);

  useEffect(() => {
    
    
  }, []);

  return (
    <section className="py-5 bg-yellow">
      <section className="container">
        <h2 className="text-center">Search Recipes</h2>
        <div className="pt-3 d-flex justify-content-center flex-wrap">
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
        <section className="recipe_thumbnail_grid"></section>
      </section>
    </section>
  );
};

export default SearchRecipes;