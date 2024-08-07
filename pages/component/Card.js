import React from "react";
import Image from "next/image";

function Card({ imageUrl }) {
  const cardStyle = {
    Width: "100%",
    height: "100%",
    borderRadius: "2vw",
    overflow: "hidden",
  };

  return (
    <div style={cardStyle}>
      <div className="h-full w-full relative">
        <Image
          className="object-cover"
          src={imageUrl}
          alt="Imagem"
          fill
          unoptimized
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
}

export default Card;
