import React, { useState, useEffect } from "react";
import Image from "next/image";

const Card = ({ image }) => {
  const [isMdWidth128, setIsMdWidth128] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaQueryChange = (e) => {
      setIsMdWidth128(e.matches);
    };

    setIsMdWidth128(mediaQuery.matches);

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const pathD = isMdWidth128
    ? "M141,0v0.7h-2c-6.5,0-12.7,3-16.3,8.4c-0.2,0.4-0.5,0.7-0.7,1.1c-0.8,1.4-1.3,3-1.5,4.7c-0.3,2.5-0.7,5-1.1,7.4c-8.9,49.3-47.8,88.2-97.1,97.1c-2.4,0.4-4.8,0.8-7.2,1.1c-1.7,0.2-3.4,0.7-4.9,1.5c0,0,0,0,0,0c-0.4,0.2-0.8,0.5-1.1,0.7c-5.4,3.6-8.4,9.8-8.4,16.3v2H0V0H141z"
    : "M104,0v0.5h-1.5c-4.8,0-9.4,2.2-12,6.2C90.3,7,90.2,7.2,90,7.5c-0.6,1.1-1,2.2-1.1,3.4c-0.2,1.9-0.5,3.7-0.8,5.5c-6.6,36.4-35.3,65-71.6,71.6c-1.8,0.3-3.5,0.6-5.3,0.8C9.9,89,8.6,89.4,7.5,90c0,0,0,0,0,0c-0.3,0.2-0.6,0.3-0.8,0.5c-4,2.7-6.2,7.2-6.2,12v1.5H0V0H104z";

  return (
    <div
      className={`w-60 h-96 md:h-96 overflow-hidden rounded-lg relative ${
        isMdWidth128 ? "md:w-128" : ""
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 208 208"
          className="mask-svg"
          fill="none"
        >
          <defs>
            <mask id="mask" x="0" y="0">
              <rect x="0" y="0" width="2008" height="408" fill="#fff" />
              <path d={pathD} fill="#000" />
            </mask>
          </defs>
        </svg>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ mask: "url(#mask)" }}
        >
          <Image
            src={image}
            alt="Card"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
