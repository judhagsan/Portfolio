import React from "react";
import Card from "../component/Card";
import Buttons from "../component/Buttons";

import VideoCard from "../component/CenterCard-video";
import MobileAlert from "../component/Alerta";
import Text from "../component/Text-Rect";

import V1 from "public/vivo/02_Vivo_15s_16x9_v5.mp4";
import V2 from "public/vivo/Filme 03_10s_ Com Audio_Online_V9.mp4";
import V3 from "public/vivo/15s_9x16_2°_V2.mp4";
import V4 from "public/vivo/15s 9x16_V3.mp4";
import V5 from "public/vivo/2_Vivo_15s_1x1_V2.mp4";

import T1 from "public/vivo/T1.jpg";
import T2 from "public/vivo/T2.jpg";
import T3 from "public/vivo/T3.jpg";
import T4 from "public/vivo/T4.jpg";
import T5 from "public/vivo/T5.jpg";
import T6 from "public/vivo/Banner_art.gif";
import T7 from "public/vivo/Banner_768x1080.gif";
import T8 from "public/vivo/1_Vivo_15s_1x1_V2.gif";

function fadaPage() {
  return (
    <div className="bg-purple-950 flex flex-col md:flex-row h-screen font-custom">
      <MobileAlert />

      {/* Lado Esquerdo */}
      <div className="w-1/3 h-full pt-2 pl-2 pb-2 font-custom flex flex-col">
        <div className="flex-grow grid grid-rows-2 gap-2">
          <div className="flex-col grid grid-cols-3 gap-2">
            <Card imageUrl={T7} />
            <div className="col-span-2">
              <Card imageUrl={T8} />
            </div>
          </div>
          <Card imageUrl={T6} />
          <Text
            P1={`Projeto desenvolvido em parceria com a Sugarcane Filmes para a marca Vivo consistiu na criação de uma série de peças de motion design voltadas para as campanhas de Natal e Black Friday com a voz da Ivete Sangalo.`}
            P2={`Para atender às diversas necessidades de divulgação, foram criadas peças nos seguintes formatos: 1:1 16:9 9:16.`}
            P3={`Além dos vídeos, foram criados banners animados para utilização em lives e websites incorporando animações suaves e loops contínuos.`}
            cortexto={"White"}
          />
        </div>
      </div>

      {/* Centro */}
      <div className="w-1/2 h-full px-2 pb-2 flex flex-col space-y-2">
        <div className="z-50 absolute left-[45%] py-2">
          <div className="grid grid-cols-3 gap-2">
            <Buttons
              Texto="Work"
              link="https://www.judhagsan.com"
              bgColor="bg-purple-950" // Cor de fundo
              textColor="text-white" // Cor do texto
              hoverBgColor="hover:bg-purple-400" // Cor de fundo no hover
              hoverTextColor="hover:text-gray-950" // Cor do texto no hover
            />
            <Buttons
              Texto="Contact"
              link="/contact"
              bgColor="bg-purple-950" // Cor de fundo
              textColor="text-white" // Cor do texto
              hoverBgColor="hover:bg-purple-400" // Cor de fundo no hover
              hoverTextColor="hover:text-gray-950" // Cor do texto no hover
            />
            <Buttons
              Texto="About"
              link="https://www.example.com"
              bgColor="bg-purple-950" // Cor de fundo
              textColor="text-white" // Cor do texto
              hoverBgColor="hover:bg-purple-400" // Cor de fundo no hover
              hoverTextColor="hover:text-gray-950" // Cor do texto no hover
            />
          </div>
        </div>
        <VideoCard
          titulo={"Vivo"}
          tituloT={"-1%"}
          tituloL={"21.5%"}
          svgWidth={"32%"}
          videoUrl={V1}
          thumbUrl={T1}
          svgColor={"#3b0764"}
          textColor={"White"}
        />
        <VideoCard videoUrl={V2} thumbUrl={T2} />
      </div>

      {/* Lado Direito */}
      <div className="w-1/3 h-full pt-2 pr-2 flex flex-col grid-rows-2 space-y-2">
        <div className="w-full h-[89%] grid grid-cols-2 gap-2">
          <VideoCard videoUrl={V3} thumbUrl={T3} />
          <VideoCard videoUrl={V4} thumbUrl={T4} />
        </div>
        <div className="w-full h-full pb-2">
          <VideoCard videoUrl={V5} thumbUrl={T5} />
        </div>
      </div>
    </div>
  );
}

export default fadaPage;
