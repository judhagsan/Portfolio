import React from "react";

function titulo({ linha1, linha2 }) {
  return (
    <div>
      <p className="titulo">
        PROJETO<br></br>
        <span className="linha">
          {linha1}
          <br></br>
          {linha2}
        </span>
      </p>
    </div>
  );
}

export default titulo;
