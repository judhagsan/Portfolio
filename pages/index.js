import React from "react";
import Corner from "../pages/component/Corner";
import Corner2 from "../pages/component/Corner-2";
import Card1 from "./component/Card-1";
import Card2 from "../pages/component/Card-2";
import CardInfo from "../pages/component/Card-Info";
import Avatar from "../pages/component/Avatar";
import imageFundo from "../public/OFR-55.jpg";
import imageAvatar from "../public/pixel-perfil.png";

function Home() {
  return (
    <div className="geral">
      <div className="cartao">
        <div className="card-info-position">
          <CardInfo />
          <div className="avatar">
            <Avatar image={imageAvatar} />
          </div>
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
          <Card2 image={imageFundo} />
          <div className="corner-position2">
            <Corner2 />
            <h1
              style={{
                position: "absolute",
                top: 0,
                left: 12,
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              DEV
              <br />
              WORKS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
