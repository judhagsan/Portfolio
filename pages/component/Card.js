import React from "react";
import Image from "next/image";

function Card({ imageUrl }) {
  const cardStyle = {
    width: "100%", // Corrigido para 'width'
    height: "100%",
    borderRadius: "2vw",
    overflow: "hidden",
  };

  return (
    <div style={cardStyle}>
      <div className="relative h-full w-full">
        <Image
          className="object-cover"
          src={imageUrl}
          alt="Imagem"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ajuste os valores conforme necessário
          unoptimized
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}

export default Card;
