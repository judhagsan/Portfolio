import React from "react";
import Image from "next/image";

function Card3({ image }) {
  return (
    <div>
      <div className="image-container3 card2">
        <Image src={image} alt="BG" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Card3;
