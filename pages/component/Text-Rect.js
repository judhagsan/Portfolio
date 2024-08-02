import React from "react";

function Card({ P1, P2, P3, cortexto }) {
  const descriptionStyle = {
    color: cortexto,
  };

  const cardStyle = {
    Width: "100%",
    height: "100%",
    borderRadius: "2vw",
    overflow: "hidden",
  };

  return (
    <div className={cardStyle}>
      <div style={descriptionStyle} className="text-justify">
        <p className="text-base font-medium">{P1}</p>
        <p className="text-base font-medium">{P2}</p>
        <p className="text-base font-medium">{P3}</p>
      </div>
    </div>
  );
}

export default Card;
