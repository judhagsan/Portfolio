import React from "react";
import Image from "next/image";

function HomeFundo({ image, imageLogo }) {
  return (
    <div className="card center-item-horizontal">
      <div className="logo-bg center-item-horizontal-z20">
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
        <div className="logo center-item-horizontal-z20">
          <Image
            src={imageLogo}
            alt="Judhagsan-Logo"
            objectFit="cover"
            height={35}
          />
        </div>
      </div>
      <div className="image-container">
        <Image src={image} alt="BG" layout="fill" objectFit="cover" />
      </div>
      {/* Adicione outros conteúdos do card aqui */}
    </div>
  );
}

export default HomeFundo;
