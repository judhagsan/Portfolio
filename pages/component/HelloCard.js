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

  return (
    <div style={cardStyle} className="bg-black mx-0">
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
