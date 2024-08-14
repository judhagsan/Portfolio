import React from "react";
import NavBar from "pages/component/Nav.js";

import VideoCard from "../component/CenterCard-video";
import Text from "../component/Text-Rect";

import V1 from "public/collection/Colibri_intro-V1.mp4";

import T1 from "public/collection/T1.jpg";

function fadaPage() {
  return (
    <div className="bg-gray-950 flex flex-col md:flex-row h-screen font-custom">
      {/* Lado Esquerdo */}
      <div className="w-1/6 h-full pt-2 pl-2 pb-2 font-custom flex flex-col"></div>

      {/* Centro */}
      <div className="w-4/6 h-full px-2 pb-2 flex flex-col space-y-2">
        <div className="absolute top-2 left-[25%] z-50">
          <NavBar
            BgColor="bg-black"
            TextColor="text-white"
            HoverBgColor="hover:bg-gray-900"
            HoverTextColor="hover:text-gray-50"
            SvgColor="Black"
            LetrasColor="#FFFFFF"
          />
        </div>
        <VideoCard videoUrl={V1} thumbUrl={T1} />
        <Text
          P1={`A criação da introdução para a startup de drones Colibri foi uma jornada empolgante e desafiadora. Começamos com a definição de um conceito que não apenas representasse a inovação e agilidade da marca, mas que também capturasse a essência de um colibri em voo. O objetivo era transformar esses conceitos em uma animação visualmente impactante e memorável.`}
          P2={`Tudo foi feito apenas com shape layers dentro do After Effects.`}
          cortexto={"White"}
        />
      </div>

      {/* Lado Direito */}
      <div className="w-1/6 h-full pt-2 pr-2 flex flex-col grid-rows-2 space-y-2"></div>
    </div>
  );
}

export default fadaPage;
