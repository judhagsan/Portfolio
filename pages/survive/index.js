import React from "react";
import Card from "../component/Card";
import CenterCard from "../component/CenterCard";
import MobileAlert from "../component/Alerta";

import F3 from "public/LTS-445-JS.jpg";
import F4 from "public/LTS-444-JS.jpg";
import F5 from "public/LTS-443-JS.jpg";
import F6 from "public/SURVIVOR.jpg";
import F1 from "public/SURVIVOR1.jpg";
import F2 from "public/SURVIVOR2.jpg";
import Z1 from "public/Zombie2.jpg";
import Z2 from "public/Zombie3.jpg";
import Z3 from "public/Zombie4.jpg";

function fadaPage() {
  return (
    <div className="bg-rose-950 flex flex-col md:flex-row h-screen font-custom">
      <MobileAlert />

      {/* Lado Esquerdo */}
      <div className="w-full md:w-1/4 h-full pt-2 pl-2 pb-2 font-custom flex flex-col">
        <div className="flex-grow grid grid-rows-3 gap-2">
          <Card imageUrl={Z3} />
          <Card imageUrl={Z2} />
          <Card imageUrl={Z1} />
        </div>
      </div>

      {/* Centro */}
      <div className="w-full h-full p-2 flex flex-col">
        <CenterCard
          titulo={"survive"}
          tituloT={"-1.5%"}
          tituloL={"17.6%"}
          svgWidth={"26%"}
          imageUrl={F3}
          svgColor={"#4c0519"}
          textColor={"White"}
          P1={` Criados para propaganda de jogos de terror, feitos com Riggs para controle facial e corporal em especial o do zumbi que é capaz de mudar sua forma para possibilitar criação de hordas.`}
          P2={` Esses modelos foram utilizados em propagandas para os games como Left to Survive, State of Survive e outros.`}
          cortexto={"Black"}
        />
        <div className="flex-grow h-3/6 mt-2 grid md:grid-cols-2  gap-2">
          <Card imageUrl={F4} />
          <Card imageUrl={F5} />
        </div>
      </div>

      {/* Lado Direito */}
      <div className="w-full md:w-1/4 h-full pt-2 pr-2 pb-2 font-custom flex flex-col">
        <div className="flex-grow grid grid-rows-3 gap-2">
          <Card imageUrl={F6} />
          <Card imageUrl={F1} />
          <Card imageUrl={F2} />
        </div>
      </div>
    </div>
  );
}

export default fadaPage;
