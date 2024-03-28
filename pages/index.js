import React from "react";
import Card from "./component/Card";
import HelloCard from "./component/HelloCard";
import ImageFundo from "../public/OFR-55.jpg";
import ImageSuperPista from "../public/P_superpista.jpg";

function Home() {
  return (
    <div className="flex flex-row  h-screen">
      {/* para adicionar ao lado esquerdo */}
      {/* <div className="w-1/4 font-custom"></div> */}
      <div className="w-3/4">
        <HelloCard imageUrl={ImageFundo} />
      </div>
      <div className="w-1/4 font-custom">
        <Card
          imageUrl={ImageFundo}
          title={"Projeto:"}
          titlePositionLeft={"10.2%"}
          description={"JL Moldes"}
          fontSize={"2vw"}
          descriptionPositionLeft={"8.7%"}
          wSvg={"15%"}
        />
        <Card
          imageUrl={ImageSuperPista}
          title={"Projeto:"}
          titlePositionLeft={"10%"}
          description={"Super Pista"}
          fontSize={"1.8vw"}
          descriptionPositionLeft={"8.4%"}
          wSvg={"15%"}
        />
      </div>
    </div>
  );
}

export default Home;
