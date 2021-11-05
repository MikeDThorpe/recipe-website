import React from "react";
import ReactMarkdown from "react-markdown";

const RecipeBody = ({ recipe }) => {
  return (
    <section className="mt-5 recipe_body">
      {/* recipe ingredients */}
      <div className="mb-5">
        <h3 className="mb-3 pb-3 border-bottom">What You'll Need</h3>
        <ReactMarkdown>{recipe.ingredients}</ReactMarkdown>
      </div>
      {/* recipe instructions */}
      <div>
        <h3 className="mb-3 pb-3 border-bottom">How To Make It</h3>
        <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
      </div>
    </section>
  );
};

export default RecipeBody;
