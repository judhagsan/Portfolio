import React from "react";
import Image from "next/image";

function Card({ P1, P2, P3, cortexto }) {
  const descriptionStyle = {
    color: cortexto,
  };

  return (
    <div className="w-full h-full relative mx-0">
      <div className="place-items-center rounded-[1vw] bg-purple-950 overflow-hidden flex">
        <div
          style={descriptionStyle}
          className="px-2 text-justify lg:text-[2vw] md:text-[1.5vw] tracking-wider
          lg:leading-6 md:leading-3 lg:word-spacing-custom md:word-spacing-custom2"
        >
          <p className="lg:indent-4 mt-2 md:indent-2 lg:mb-3 md:mb-1">{P1}</p>
          <p className="lg:indent-4 md:indent-2 lg:mb-3 md:mb-1">{P2}</p>
          <p className="lg:indent-4 md:indent-2 lg:mb-3 md:mb-1">{P3}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
