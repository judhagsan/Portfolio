import React from "react";
import Image from "next/image";

function Card({
  imageUrl,
  title,
  description,
  descriptionPositionLeft,
  wSvg,
  titlePositionLeft,
  fontSize,
}) {
  const cardStyle = {
    Width: "100%",
    height: "100%",
    borderRadius: "2vw",
    overflow: "hidden",
  };

  const titleStyle = {
    fontSize: "1.3vw",
    color: "#ea4c6a",
    position: "absolute",
    zIndex: 3,
    letterSpacing: "0.1vw",
    marginLeft: titlePositionLeft,
    marginTop: "-0.4%",
  };

  const svgStyle = {
    position: "absolute",
    zIndex: 2,
    width: wSvg,
    marginLeft: "2%",
    marginTop: "-0.05%",
  };

  const descriptionStyle = {
    fontSize: fontSize,
    color: "#3a84c5",
    position: "absolute",
    zIndex: 3,
    letterSpacing: "0.1vw",
    wordSpacing: "-0.5vw",
    marginLeft: descriptionPositionLeft,
  };

  return (
    <div style={cardStyle}>
      <div style={svgStyle}>
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1848 290.38"
          style={{ fill: "#fff" }}
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M1178.77,0H0c381.09,0,286.07,281.35,652.25,290.16v.21h17.78s.03,0,.05,0h0s507.85,0,507.85,0h0s.02,0,.03,0h.82C1616.91,289.99,1416.44,0,1848,0h-669.23Z" />
          </g>
        </svg>
      </div>
      <div>
        <p style={titleStyle}>{title}</p>
        <p style={descriptionStyle}>{description}</p>
      </div>
      <div className="h-full w-full relative">
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
