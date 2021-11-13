import React from "react";
import Link from "next/link";

const RecipeBreadcrumbs = ({ category, title }) => {

  return (
    <nav className="pt-3">
      <Link href={`/recipes`}>
        <small className="link font-cyan font-bold">Recipes</small>
      </Link>
      <span className="px-2">/</span>
      <Link href={`/recipes/${category.toLowerCase()}`}>
        <small className="link font-cyan font-bold">{category}</small>
      </Link>
      <span className="px-2">/</span>
      {title ? <small>{title}</small> : undefined}
    </nav>
  );
};

export default RecipeBreadcrumbs;
