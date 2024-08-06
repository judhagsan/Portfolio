import React from "react";
import Buttons from "../component/Buttons";

import VideoCard from "../component/CenterCard-video";
import MobileAlert from "../component/Alerta";
import Text from "../component/Text-Rect";

import V1 from "public/collection/Colibri_intro-V1.mp4";

import T1 from "public/collection/T1.jpg";

function fadaPage() {
  return (
    <div className="bg-gray-950 flex flex-col md:flex-row h-screen font-custom">
      <MobileAlert />

      {/* Lado Esquerdo */}
      <div className="w-1/6 h-full pt-2 pl-2 pb-2 font-custom flex flex-col"></div>

      {/* Centro */}
      <div className="w-4/6 h-full px-2 pb-2 flex flex-col space-y-2">
        <div className="z-50 absolute left-[35.5%] py-2">
          <div className="grid grid-cols-3 gap-2">
            <Buttons
              Texto="Work"
              link="https://www.judhagsan.com"
              bgColor="bg-gray-950" // Cor de fundo
              textColor="text-white" // Cor do texto
              hoverBgColor="hover:bg-gray-400" // Cor de fundo no hover
              hoverTextColor="hover:text-gray-950" // Cor do texto no hover
            />
            <Buttons
              Texto="Contact"
              link="https://www.example.com"
              bgColor="bg-gray-950" // Cor de fundo
              textColor="text-white" // Cor do texto
              hoverBgColor="hover:bg-gray-400" // Cor de fundo no hover
              hoverTextColor="hover:text-gray-950" // Cor do texto no hover
            />
            <Buttons
              Texto="About"
              link="https://www.example.com"
              bgColor="bg-gray-950" // Cor de fundo
              textColor="text-white" // Cor do texto
              hoverBgColor="hover:bg-gray-400" // Cor de fundo no hover
              hoverTextColor="hover:text-gray-950" // Cor do texto no hover
            />
          </div>
        </div>
        <VideoCard
          titulo={"Colibri"}
          tituloT={"-0.5%"}
          tituloL={"16.1%"}
          svgWidth={"20%"}
          videoUrl={V1}
          thumbUrl={T1}
          svgColor={"Black"}
          textColor={"White"}
        />
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
