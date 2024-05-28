import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Carregando o ReactPlayer dinamicamente com no SSR (Server-Side Rendering)
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function Card({ videoUrl }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "2vw",
    overflow: "hidden",
    position: "relative",
  };

  const svgStyle = {
    position: "absolute",
    zIndex: 2,
    width: "26%",
    marginLeft: "4.5%",
    marginTop: "-0.05%",
  };

  const logoStyle = {
    position: "absolute",
    zIndex: 3,
    width: "13%",
    marginLeft: "11%",
    marginTop: "0.3%",
  };

  return (
    <div style={cardStyle} className="bg-black mx-0">
      <div style={logoStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 351.01 68.4"
          style={{ fill: "#000" }}
        >
          <g>
            <path d="M39.63,23.11h11.32v33.97h11.32V23.11h11.32v39.63h-5.66v5.66h-22.65v-5.66h-5.66V23.11Z" />
            <path d="M79.26,23.11h28.31v5.66h5.66v33.97h-5.66v5.66h-28.31V23.11ZM101.91,34.43h-11.32v22.65h11.32v-22.65Z" />
            <path d="M118.89,23.11h11.32v16.99h11.32v-16.99h11.32v45.29h-11.32v-16.98h-11.32v16.98h-11.32V23.11Z" />
            <path d="M158.52,28.77h5.66v-5.66h22.65v5.66h5.66v39.63h-11.32v-11.32h-11.32v11.32h-11.32V28.77ZM169.84,45.76h11.32v-11.32h-11.32v11.32Z" />
            <path d="M198.15,28.77h5.66v-5.66h28.31v11.32h-22.65v22.65h11.32v-5.66h-5.66v-11.32h16.99v22.65h-5.66v5.66h-22.65v-5.66h-5.66V28.77Z" />
            <path d="M237.78,28.77h5.66v-5.66h28.31v11.32h-22.65v5.66h16.98v5.66h5.66v16.99h-5.66v5.66h-28.31v-11.32h22.65v-5.66h-16.99v-5.66h-5.66v-16.98Z" />
            <path d="M277.41,28.77h5.66v-5.66h22.65v5.66h5.66v39.63h-11.32v-11.32h-11.32v11.32h-11.32V28.77ZM288.73,45.76h11.32v-11.32h-11.32v11.32Z" />
            <path d="M317.04,23.11h11.32v11.32h5.66v5.66h5.66v-16.99h11.32v45.29h-11.32v-16.98h-5.66v-5.66h-5.66v22.65h-11.32V23.11Z" />
            <polygon points="22.64 0 22.64 11.43 22.65 11.43 22.65 57.08 11.32 57.08 11.32 51.42 0 51.42 0 62.74 5.66 62.74 5.66 68.4 28.31 68.4 28.31 62.74 33.97 62.74 33.97 0 22.64 0" />
          </g>
        </svg>
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
        {isMounted && (
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
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
