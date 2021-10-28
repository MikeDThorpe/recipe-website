import React from "react";
import Image from "next/image";

import NoImageThumbnail from "../../assets/images/misc/no-image-thumbnail.jpg";

const RecipeThumbnail = ({ src }) => {
  if (!src) {
    return (
      <Image
        src={NoImageThumbnail}
        alt="Image Unavailable."
      />
    );
  }

  return <Image src={src} alt="Image of recipe." />;
};

export default RecipeThumbnail;