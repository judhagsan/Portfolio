import React from "react";
import Image from "next/image";

function Avatar({ image }) {
  return (
    <div>
      <Image
        src={image}
        alt="Avatar"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}

export default Avatar;
