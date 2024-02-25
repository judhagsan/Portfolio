import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import perfil from "pages/imgs/Pixel_eu.png";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <img
            src={perfil}
            className="rounded mx-auto d-block"
            alt="Descrição da Imagem"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
