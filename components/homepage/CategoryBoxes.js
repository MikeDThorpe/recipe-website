import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryBoxes = ({ categories }) => {
  const findImagePath = (category) => {
    console.log(category)
    let svg = "";
    switch (category) {
      case "vegetarian":
        svg = "pepper-hot-solid.svg";
        break;
      case "seafood":
        svg = "fish-solid.svg";
        break;
      case "meat":
        svg = "drumstick-solid.svg";
        break;
      case "vegan":
        svg = "seedling-solid.svg";
        break;
    }
    let path = `/icons/${svg}`;
    return path;
  };

  return (
    <section className="container category_boxes_layout">
      {categories.map((category) => (
        <div key={category.id} className="category_box">
          <Image
            src={findImagePath(category.title.toLowerCase())}
            width={90}
            height={90}
          />
          <Link href={`/recipes/${category.title.toLowerCase()}`}>
            <h3 className="mt-4">{category.title} Recipes </h3>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default CategoryBoxes;
