import React from "react";
import Link from "next/link";
import Image from "next/image";

import RecipeThumbnail from "./RecipeThumbnail";

const RecipeHeader = ({ recipe }) => {
  let category = recipe.categories[0].title;

  return (
    <div className="pt-4 recipe_header">
      <RecipeThumbnail src={recipe.thumbnail} />
      <div className="recipe_header_content">
        <h2 className="mt-4 mb-0 font-cyan">{recipe.title}</h2>
        <p className="mt-4 ">{recipe.description}</p>
        <div className="mt-4 recipe_header_meta_grid">
          {/* recipe category */}
          <div className="d-flex align-items-center recipe_header_meta">
            <Image src="/icons/utensils-solid.svg" height={30} width={30} />
            <h5 className="mx-1 my-0">{category} Recipe</h5>
          </div>
          {/* recipes tags */}
          <div className="d-flex align-items-center recipe_header_meta">
            <Image src="/icons/tags-solid.svg" height={30} width={30} />
            <div className="d-flex my-2">
              {recipe.tags.map((tag) => (
                <Link href={`/recipes/tags/${tag.title}`}>
                  <h5 className="mx-1 my-0">{tag.title},</h5>
                </Link>
              ))}
            </div>
          </div>
          {/* recipe serves */}
          <div className="d-flex align-items-center recipe_header_meta">
            <Image src="/icons/user-solid.svg" height={30} width={30} />
            <h5 className="mx-1 my-0">Serves {recipe.serves}</h5>
          </div>
          {/* recipe time to cook */}
          <div className="d-flex align-items-center recipe_header_meta">
            <Image src="/icons/clock-solid.svg" height={30} width={30} />
            <h5 className="mx-1 my-0">{recipe.cook_time}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;
