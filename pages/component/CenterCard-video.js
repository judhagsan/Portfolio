import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function Card({
  videoUrl,
  thumbUrl,
  titulo,
  tituloT,
  tituloL,
  svgWidth,
  svgColor,
  textColor,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

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

  return (
    <div style={cardStyle} className="w-full h-full relative z-30 mx-0">
      <h1 style={title} className="z-20 absolute text-[3vw]">
        {titulo}
      </h1>
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
      <div className="relative h-full w-full">
        {!isPlaying ? (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={handlePlay}
          >
            <Image
              className="object-cover"
              src={thumbUrl}
              alt="Imagem"
              fill
              onContextMenu={(e) => {
                e.preventDefault();
              }}
            />
            <button
              className="absolute text-white bg-black lg:text-5xl md:text-2xl bg-opacity-50 px-4 rounded"
              style={{ zIndex: 20 }}
            >
              Play
            </button>
          </div>
        ) : (
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
            playing
            config={{
              file: {
                attributes: {
                  onContextMenu: (e) => e.preventDefault(),
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
