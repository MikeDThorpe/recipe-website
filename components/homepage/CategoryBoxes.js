import React from "react";
import Link from "next/link";

const CategoryBoxes = ({ categories }) => {
  return (
    <section className="container py-5 category_boxes_layout">
      {categories.map((category) => (
          <div key={category.id} className={`category_box category_box_${category.title.toLowerCase()}`}>
          <div>
            <Link href={`/recipes/${category.title.toLowerCase()}`}>
              <h3>{category.title} Recipes </h3>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryBoxes;
