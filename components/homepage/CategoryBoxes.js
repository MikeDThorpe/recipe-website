import React from "react";

import Link from "next/link";
import Image from "next/image";

const CategoryBoxes = () => {
  const categories = ["Vegetarian", "Seafood", "Meat", "Vegan"]


  const findImagePath = (category) => {
    let svg = "";
    switch (category) {
      case "Vegetarian":
        svg = "pepper-hot-solid.svg";
        break;
      case "Seafood":
        svg = "fish-solid.svg";
        break;
      case "Meat":
        svg = "drumstick-solid.svg";
        break;
      case "Vegan":
        svg = "seedling-solid.svg";
        break;
    }
    let path = `/icons/${svg}`;
    return path;
  };

  return (
    <section className="container category_boxes_layout">
      {categories.map((category, index) => (
        <div key={index} className="category_box">
          <Image
            src={findImagePath(category)}
            width={45}
            height={45}
          />
          <Link href={`/recipes/${category.toLocaleLowerCase()}`}>
            <h4 className="link">{category} Recipes </h4>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default CategoryBoxes;