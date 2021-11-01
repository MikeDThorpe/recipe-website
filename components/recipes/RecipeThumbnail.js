import React from "react";
import Image from "next/image";

const RecipeThumbnail = ({ src }) => {
  if (!src) {
    return (
      <Image
        src="/images/no-image-thumbnail.jpg"
        alt="Image Unavailable."
        width={500}
        height={500}
      />
    );
  }

  return <Image src={src} alt="Image of recipe." />;
};

export default RecipeThumbnail;