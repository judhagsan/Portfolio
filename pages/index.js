import React from "react";
import Link from "next/link";
import Card from "./component/Card";
import HelloCard from "./component/HelloCard";
import MobileAlert from "./component/Alerta";
import Buttons from "./component/Buttons";

import Elf from "../public/Fairy_Face_3.jpg";
import vivo from "../public/T_project_vivo.gif";
import survive from "../public/LTS-445-JS.jpg";
import pilot from "../public/Pilot_mech_.jpg";
import colibru from "public/Colection.gif";
import frames from "public/Mestre_intro.gif";
import I1 from "public/judha-guilherme-fish1.jpg";
import I2 from "public/judha-guilherme-render-4.jpg";

function Home() {
  return (
    <div className="flex h-screen font-custom">
      <MobileAlert />

      {/* Seção Esquerda */}
      <div className="w-1/4 h-full pt-2 pl-2 pb-2 grid grid-rows-3 gap-2">
        <Link href="/vivo">
          <Card
            imageUrl={vivo}
            title="Motion Design"
            titlePositionLeft="6%"
            description="vivo"
            fontSize="2vw"
            descriptionPositionLeft="8%"
            wSvg="15%"
          />
        </Link>
        <Link href="/colibri">
          <Card
            imageUrl={colibru}
            title="Motion Design"
            titlePositionLeft="6%"
            description="collection"
            fontSize="1.9vw"
            descriptionPositionLeft="5.8%"
            wSvg="15%"
          />
        </Link>
        <Link href="/mestre">
          <Card
            imageUrl={frames}
            title="Motion Design"
            titlePositionLeft="6%"
            description="frames"
            fontSize="2vw"
            descriptionPositionLeft="7.2%"
            wSvg="15%"
          />
        </Link>
      </div>

      {/* Seção Central */}
      <div className="w-3/4 h-full flex flex-col items-center pl-2 pr-2 pb-2">
        <div className="absolute top-2 left-[37%] z-30">
          <div className="grid grid-cols-2 gap-2">
            <Buttons
              Texto="Contact"
              link="https://www.example.com"
              bgColor="bg-gray-100" // Cor de fundo
              textColor="text-Black" // Cor do texto
            />
            <Buttons
              Texto="About"
              link="https://www.example.com"
              bgColor="bg-gray-100" // Cor de fundo
              textColor="text-Black" // Cor do texto
            />
          </div>
        </div>

        <div className="flex h-full justify-center pt-2 w-full">
          <HelloCard videoUrl="https://player.vimeo.com/video/950032543?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        </div>

        <div className="grid grid-cols-2 pt-2 gap-2 w-full h-2/4">
          <Card imageUrl={I1} />
          <Card imageUrl={I2} />
        </div>
      </div>

      {/* Seção Direita */}
      <div className="w-1/4 h-full pt-2 pr-2 pb-2 grid grid-rows-3 gap-2">
        <Link href="/fairy">
          <Card
            imageUrl={Elf}
            title="Character Design"
            titlePositionLeft="5.2%"
            description="Fairy"
            fontSize="2vw"
            descriptionPositionLeft="7.7%"
            wSvg="15%"
          />
        </Link>
        <Link href="/survive">
          <Card
            imageUrl={survive}
            title="Character Design"
            titlePositionLeft="5.2%"
            description="Survive"
            fontSize="2vw"
            descriptionPositionLeft="6.8%"
            wSvg="15%"
          />
        </Link>
        <Link href="/pilot">
          <Card
            imageUrl={pilot}
            title="Character Design"
            titlePositionLeft="5.2%"
            description="Pilot"
            fontSize="2vw"
            descriptionPositionLeft="7.7%"
            wSvg="15%"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
