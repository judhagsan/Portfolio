import React from "react";
import { useState, useEffect } from "react";
import Card from "../component/Card";
import CenterCard from "../component/CenterCard";

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
  const [cardsLoaded, setCardsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCardsLoaded(true);
    }, 20);

    // Limpando o timeout quando o componente é desmontado
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-row h-screen font-custom">
      {/* para adicionar ao lado Esquerdo */}
      <div className="w-1/4 h-full pt-2 pl-2 font-custom">
        <div className="w-full h-[32.5%] grid-rows-2 space-y-2">
          <Card
            imageUrl={Z3}
            loaded={cardsLoaded}
            animationType="slide-in-topD"
          />
          <Card
            imageUrl={Z2}
            loaded={cardsLoaded}
            animationType="slide-in-leftD"
          />
          <Card
            imageUrl={Z1}
            loaded={cardsLoaded}
            animationType="slide-in-downD"
          />
        </div>
      </div>

      {/* para adicionar ao centro*/}
      <div className="w-[80%] h-[66%] pt-2 pl-2 pr-2 pb-2 space-y-2">
        <CenterCard
          loaded={cardsLoaded}
          animationType="slide-in-top"
          titulo={"survive"}
          tituloT={"-2%"}
          tituloL={"17%"}
          imageUrl={F3}
          P1={` Criados para propaganda de jogos de terror, feitos com Riggs para controle facial e corporal em especial o do zumbi que é capaz de mudar sua forma para possibilitar criação de ordas.`}
          P2={` Esses modelos foram utilizados em propagandas para os games como Left to Survive, State of Survive e outros.`}
          cortexto={"Black"}
        />
        <div className=" w-full h-[51.5%] grid grid-cols-2 space-x-2">
          <Card
            imageUrl={F4}
            loaded={cardsLoaded}
            animationType="slide-in-leftD"
          />
          <Card
            imageUrl={F5}
            loaded={cardsLoaded}
            animationType="slide-in-rightD"
          />
        </div>
      </div>

      {/* para adicionar ao lado Direito */}
      <div className="w-1/4 h-full pt-2 pr-2 pb-0.5 font-custom">
        <div className="w-full h-[32.6%] grid-rows-2 space-y-2">
          <Card
            imageUrl={F6}
            loaded={cardsLoaded}
            animationType="slide-in-topD"
          />
          <div className="w-full h-[100%]">
            <Card
              imageUrl={F1}
              loaded={cardsLoaded}
              animationType="slide-in-rightD"
            />
          </div>
          <div className="w-full h-[100%]">
            <Card
              imageUrl={F2}
              loaded={cardsLoaded}
              animationType="slide-in-downD"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default fadaPage;
