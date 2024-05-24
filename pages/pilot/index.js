import React from "react";
import { useState, useEffect } from "react";
import Card from "../component/Card";
import CenterCard from "../component/CenterCard";

import ImageFundo from "public/Pilot_mech_1.jpg";
import F3 from "public/Pilot_mech_.jpg";
import F4 from "public/Pilot_mech_2.jpg";
import F5 from "public/Pilot_mech_3.jpg";
import F6 from "public/Pilot_mech_4.jpg";
import F7 from "public/Pilot_mech_5.jpg";

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
            imageUrl={F4}
            loaded={cardsLoaded}
            animationType="slide-in-topD"
          />
          <Card
            imageUrl={F5}
            loaded={cardsLoaded}
            animationType="slide-in-leftD"
          />
          <Card
            imageUrl={F6}
            loaded={cardsLoaded}
            animationType="slide-in-downD"
          />
        </div>
      </div>

      {/* para adicionar ao centro*/}
      <div className="w-[98%] h-full pt-2 pl-2 pr-2 pb-2">
        <CenterCard
          loaded={cardsLoaded}
          animationType="slide-in-top"
          titulo={"pilot"}
          tituloT={"-2%"}
          tituloL={"19%"}
          imageUrl={F3}
          P1={` O principal objetivo ao criar este modelo foi promover jogos como Mech Arena e War Robots. A piloto foi desenvolvidA com design futurista e elegante para captar a atenção do público e transmitir uma experiência de jogo emocionante e envolvente.`}
          P2={` Foi desenvolvido um rigg que permite uma variedade de poses e movimentos fluidos, sendo capaz de controlar totalmente suas expressões faciais, comunicando diferentes emoções e sentimentos nas propagandas.`}
          cortexto={"Black"}
        />
      </div>

      {/* para adicionar ao lado Direito */}
      <div className="w-1/4 h-full pt-2 pr-2 pb-0.5 font-custom">
        <div className="w-full h-[50%] grid-rows-2 space-y-2">
          <Card
            imageUrl={ImageFundo}
            loaded={cardsLoaded}
            animationType="slide-in-topD"
          />
          <div className="w-full h-[97%]">
            <Card
              imageUrl={F7}
              loaded={cardsLoaded}
              animationType="slide-in-rightD"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default fadaPage;
