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
  loaded,
  animationType,
  cortexto,
}) {
  const cardStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "2vw",
    overflow: "hidden",
    position: "relative", // Adicionado para o posicionamento correto do retângulo
  };

  const rectStyle = {
    position: "absolute",
    top: "71%",
    left: "2.5%",
    zIndex: 10,
    width: "95%",
    height: "26%",
    backgroundColor: "rgba(256, 256, 256, 0.88)", // Cor de fundo do retângulo
    borderRadius: "1vw", // Mesmo raio de borda que o contêiner pai
  };

  const svgStyle = {
    position: "absolute",
    zIndex: 10,
    width: "26%",
    marginLeft: "10%",
    marginTop: "-0.05%",
  };

  const title = {
    marginLeft: tituloL,
    marginTop: tituloT,
  };

  const descriptionStyle = {
    fontSize: "2vw",
    letterSpacing: "0.1vw",
    wordSpacing: "-0.5vw",
    lineHeight: "1.2vw",
    color: cortexto,
  };

  return (
    <div
      style={cardStyle}
      className={`card ${loaded ? animationType : ""} z-30 mx-0`}
    >
      <h1 style={title} className="z-20 absolute text-[3vw]">
        {titulo}
      </h1>
      <div style={rectStyle}>
        <div style={descriptionStyle} className="px-4 py-2 text-justify">
          <p className="indent-4 mb-3">{P1}</p>
          <p className="indent-4 mb-3">{P2}</p>
          <p className="indent-4 mb-3">{P3}</p>
        </div>
      </div>
      <div style={svgStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1848 290.38"
          style={{ fill: "#fff" }}
        >
          <g>
            <path d="M1178.77,0H0c381.09,0,286.07,281.35,652.25,290.16v.21h17.78s.03,0,.05,0h0s507.85,0,507.85,0h0s.02,0,.03,0h.82C1616.91,289.99,1416.44,0,1848,0h-669.23Z" />
          </g>
        </svg>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={imageUrl}
          alt="Imagem"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
}

export default Card;
