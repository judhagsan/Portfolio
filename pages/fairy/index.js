import React from "react";
import { useState, useEffect } from "react";
import Card from "../component/Card";
import CenterCard from "../component/CenterCard";

import ImageFundo from "public/Fairy_Body.jpg";
import F3 from "public/Fairy_Face_3.jpg";
import F4 from "public/Fairy_Face_4.jpg";
import F5 from "public/Fairy_Face_5.jpg";
import F6 from "public/Fairy_Face_6.jpg";
import F7 from "public/Fairy_Face_7.jpg";

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
      <div className="w-3/4 h-full pt-2 pl-2 pr-2 pb-2">
        <CenterCard
          loaded={cardsLoaded}
          animationType="slide-in-top"
          titulo={"Fairy"}
          tituloT={"-2%"}
          tituloL={"19%"}
          imageUrl={F3}
          P1={` O modelo foi criado para promover jogos de fantasia, o objetivo era
    criar um personagem charmoso e versátil, capaz de capturar a imaginação
    dos jogadores e levar a uma experiência de jogo única e envolvente.`}
          P2={` Mas não é só a aparência que impressiona neste modelo. Criado com
    RiG de alta qualidade, permitindo uma ampla gama de poses e
    movimentos fluidos. Além disso, a fada tem total controle sobre suas
    expressões faciais, desde sorrisos encantadores até olhares desconfiados
    e misteriosos.`}
          P3={` Esse modelo foi usado em anúncios de jogos como Elvenar, Forge of Empires e RAID
          Shadow Legends.`}
          cortexto={"green"}
        />
      </div>

      {/* para adicionar ao lado Direito */}
      <div className="w-1/4 h-full pt-2 pr-2 pb-0.5 font-custom">
        <div className="w-full h-2/3 grid-rows-2 space-y-2">
          <Card
            imageUrl={ImageFundo}
            loaded={cardsLoaded}
            animationType="slide-in-topD"
          />
          <div className="w-full h-[48%]">
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
