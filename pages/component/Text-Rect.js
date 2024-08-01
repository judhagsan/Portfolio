import React from "react";

function Card({ P1, P2, P3, cortexto }) {
  const descriptionStyle = {
    color: cortexto,
  };

  return (
    <div className="w-full h-full relative mx-0">
      <div className="place-items-center rounded-[1vw] overflow-hidden flex">
        <div style={descriptionStyle} className="text-justify">
          <p className="text-base font-medium">{P1}</p>
          <p className="text-base font-medium">{P2}</p>
          <p className="text-base font-medium">{P3}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
