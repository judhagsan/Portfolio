import React from "react";
import Corner from "../pages/component/Corner";
import Corner2 from "../pages/component/Corner-2";
import Card1 from "./component/Card-1";
import Card2 from "../pages/component/Card-2";
import Card3 from "../pages/component/Card-3";
import CardInfo from "../pages/component/Card-Info";
import Contact from "../pages/component/Contact";
import TituloCard from "../pages/component/titulo-card";
import imageFundo from "../public/OFR-55.jpg";

function Home() {
  return (
    <div className="geral">
      <div className="cartao">
        <div className="card-info-position">
          <CardInfo />
          <Contact />
        </div>
        <div className="corner-position">
          <Corner />
        </div>
        <div>
          <Card1 image={imageFundo} />
        </div>
      </div>

      <div className="cartao2">
        <div>
          <div className="tituloPositionRight">
            <TituloCard linha1={"Super"} linha2={"Pista"} />
          </div>
          <Card2 image={imageFundo} />
          <div className="corner-position2">
            <Corner2 />
          </div>
        </div>

        <div>
          <div className="tituloPositionLeft">
            <TituloCard linha1={"JL"} linha2={"Moldes"} />
          </div>
          <Card3 image={imageFundo} />
          <div className="corner-position3">
            <Corner2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
