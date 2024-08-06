import React from "react";
import Buttons from "../component/Buttons";

import VideoCard from "../component/CenterCard-video";
import MobileAlert from "../component/Alerta";
import Text from "../component/Text-Rect";

import V1 from "public/collection/Mestre_intro.mp4";

import T1 from "public/collection/T4.jpg";

function fadaPage() {
  return (
    <div className="bg-orange-950 flex flex-col md:flex-row h-screen font-custom">
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
              bgColor="bg-orange-950" // Cor de fundo
              textColor="text-white" // Cor do texto
              hoverBgColor="hover:bg-orange-400" // Cor de fundo no hover
              hoverTextColor="hover:text-gray-950" // Cor do texto no hover
            />
            <Buttons
              Texto="Contact"
              link="https://www.example.com"
              bgColor="bg-orange-950" // Cor de fundo
              textColor="text-white" // Cor do texto
              hoverBgColor="hover:bg-orange-400" // Cor de fundo no hover
              hoverTextColor="hover:text-gray-950" // Cor do texto no hover
            />
            <Buttons
              Texto="About"
              link="https://www.example.com"
              bgColor="bg-orange-950" // Cor de fundo
              textColor="text-white" // Cor do texto
              hoverBgColor="hover:bg-orange-400" // Cor de fundo no hover
              hoverTextColor="hover:text-gray-950" // Cor do texto no hover
            />
          </div>
        </div>
        <VideoCard
          titulo={"Mestre"}
          tituloT={"-0.5%"}
          tituloL={"16%"}
          svgWidth={"20%"}
          videoUrl={V1}
          thumbUrl={T1}
          svgColor={"#431407"}
          textColor={"White"}
        />
        <Text
          P1={`O projeto foi a introdução para um canal de YouTube. Comecei desenvolvendo um conceito visual que combinasse com o tema do canal.`}
          P2={`Usei o Blender para modelar e animar os elementos 3D e, em seguida, trabalhei no After Effects para criar e animar a palavra "Mestre". Integrar esses elementos foi desafiador, mas consegui fazer com que tudo se encaixasse bem. Ajustei as animações e os efeitos visuais para criar uma introdução que fosse fluida e atraente.`}
          cortexto={"White"}
        />
      </div>

      {/* Lado Direito */}
      <div className="w-1/6 h-full pt-2 pr-2 flex flex-col grid-rows-2 space-y-2"></div>
    </div>
  );
}

export default fadaPage;
