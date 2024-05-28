import React from "react";
import Image from "next/image";

function Card({
  imageUrl,
  P1,
  P2,
  P3,
  titulo,
  tituloT,
  tituloL,
  cortexto,
  svgWidth,
  svgColor,
  textColor,
}) {
  const cardStyle = {
    borderRadius: "2vw",
    overflow: "hidden",
    position: "relative", // Adicionado para o posicionamento correto do retângulo
  };

  const svgStyle = {
    position: "absolute",
    zIndex: 10,
    width: svgWidth,
    marginLeft: "10%",
    marginTop: "-0.05%",
  };

  const title = {
    marginLeft: tituloL,
    marginTop: tituloT,
    color: textColor,
  };

  const descriptionStyle = {
    color: cortexto,
  };

  return (
    <div style={cardStyle} className="w-full h-full relative z-30 mx-0">
      <h1 style={title} className="z-20 absolute text-[3vw]">
        {titulo}
      </h1>
      <div className="place-items-center absolute top-[71%] left-[2.5%] z-10 w-[95%] h-[26%] bg-[rgba(255,255,255,0.88)] rounded-[1vw] overflow-hidden flex">
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

      <div style={svgStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1848 290.38"
          style={{ fill: svgColor }}
        >
          <g>
            <path d="M1178.77,0H0c381.09,0,286.07,281.35,652.25,290.16v.21h17.78s.03,0,.05,0h0s507.85,0,507.85,0h0s.02,0,.03,0h.82C1616.91,289.99,1416.44,0,1848,0h-669.23Z" />
          </g>
        </svg>
      </div>
      <div className="relative w-full h-full">
        <Image
          className="object-cover"
          src={imageUrl}
          alt="Imagem"
          fill
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
}

export default Card;
