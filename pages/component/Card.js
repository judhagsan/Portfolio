import React from "react";

const Card = ({ title, content }) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <style jsx>{`
        .card {
          padding: 16px;
          position: relative;
          background-color: white;
          border: 2px solid transparent;
          background-clip: padding-box;
          border-radius: 15px; /* Cantos arredondados */
        }

        .card::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          border: 2px solid #000; /* Cor da borda */
          border-radius: 15px; /* Cantos arredondados */
          transform: scale(1.1);
          z-index: -1;
        }
      `}</style>
    </>
  );
};

export default Card;
