import React from "react";
import Card from "../component/Card";
import CenterCard from "../component/CenterCard";
import MobileAlert from "../component/Alerta";

import ImageFundo from "public/Pilot_mech_1.jpg";
import F3 from "public/Pilot_mech_.jpg";
import F4 from "public/Pilot_mech_2.jpg";
import F5 from "public/Pilot_mech_3.jpg";
import F6 from "public/Pilot_mech_4.jpg";
import F7 from "public/Pilot_mech_5.jpg";

function fadaPage() {
  return (
    <div className="bg-neutral-800 flex flex-col md:flex-row h-screen font-custom">
      <MobileAlert />

      {/* Lado Esquerdo */}
      <div className="w-full md:w-1/4 h-full pt-2 pb-2 pl-2 font-custom flex flex-col">
        <div className="flex-grow grid grid-rows-3 gap-2">
          <Card imageUrl={F4} />
          <Card imageUrl={F5} />
          <Card imageUrl={F6} />
        </div>
      </div>

      {/* Centro */}
      <div className="w-full h-full pt-2 pl-2 pr-2 pb-2">
        <CenterCard
          titulo={"pilot"}
          tituloT={"-2%"}
          tituloL={"19%"}
          svgWidth={"26%"}
          imageUrl={F3}
          svgColor={"#262626"}
          textColor={"White"}
          P1={` O principal objetivo ao criar este modelo foi promover jogos como Mech Arena e War Robots. A piloto foi desenvolvida com design futurista e elegante para captar a atenção do público e transmitir uma experiência de jogo emocionante e envolvente.`}
          P2={` Foi desenvolvido um rigg que permite uma variedade de poses e movimentos fluidos, sendo capaz de controlar totalmente suas expressões faciais, comunicando diferentes emoções e sentimentos nas propagandas.`}
          cortexto={"Black"}
        />
      </div>

      {/* Lado Direito */}
      <div className="w-full md:w-1/4 h-full pt-2 pr-2 pb-2 font-custom flex flex-col">
        <div className="flex-grow grid grid-rows-2 gap-2">
          <Card imageUrl={ImageFundo} />
          <Card imageUrl={F7} />
        </div>
      </div>
    </div>
  );
}

export default fadaPage;
