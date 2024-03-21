import React from "react";
import Image from "next/image";

function Card2({ image }) {
  return (
    <div>
      <div className="image-container2 card2">
        <Image src={image} alt="BG" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Card2;
