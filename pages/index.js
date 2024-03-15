import React from "react";
import Corner from "../pages/component/Corner";
import HomeFundo from "../pages/component/HomeFundo";
import imageFundo from "../public/OFR-55.jpg";
import imageLogo from "../public/logo.png";

function Home() {
  return (
    <div>
      <div className="cartao">
        <div className="corner-position">
          <Corner />
        </div>
        <div>
          <HomeFundo image={imageFundo} imageLogo={imageLogo} />
        </div>
      </div>
    </div>
  );
}

export default Home;
