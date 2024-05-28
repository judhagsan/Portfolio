import React from "react";
import Link from "next/link";
import Card from "./component/Card";
import HelloCard from "./component/HelloCard";
import MobileAlert from "./component/Alerta";
import Text from "./component/Text-Rect.js";
import Contacts from "./component/contact.js";

import Elf from "../public/Fairy_Face_3.jpg";
import vivo from "../public/T_project_vivo.gif";
import survive from "../public/LTS-445-JS.jpg";
import pilot from "../public/Pilot_mech_.jpg";
import colection from "public/Colection.gif";
import frames from "public/frames/Walk_on_water.gif";
import I1 from "public/judha-guilherme-fish1.jpg";
import I2 from "public/judha-guilherme-render-4.jpg";

function Home() {
  return (
    <div className="flex flex-row h-screen font-custom">
      <MobileAlert />
      {/* para adicionar ao lado esquerdo */}
      <div className="w-1/4 h-2/6 pt-2 pl-2 grid-rows-3 space-y-2 pb-0.5 font-custom">
        <div className="w-full h-full">
          <Link href={"/vivo"}>
            <Card
              imageUrl={vivo}
              title={"Motion Design"}
              titlePositionLeft={"6%"}
              description={"vivo"}
              fontSize={"2vw"}
              descriptionPositionLeft={"8%"}
              wSvg={"15%"}
            />
          </Link>
        </div>
        <div className="w-full h-full">
          <Link href={"/collection"}>
            <Card
              imageUrl={colection}
              title={"Motion Design"}
              titlePositionLeft={"6%"}
              description={"collection"}
              fontSize={"1.9vw"}
              descriptionPositionLeft={"5.8%"}
              wSvg={"15%"}
            />
          </Link>
        </div>
        <div className="w-full h-full">
          <Link href={"/frames"}>
            <Card
              imageUrl={frames}
              title={"Motion Design"}
              titlePositionLeft={"6%"}
              description={"frames"}
              fontSize={"2vw"}
              descriptionPositionLeft={"7.2%"}
              wSvg={"15%"}
            />
          </Link>
        </div>
      </div>

      {/* para adicionar ao centro*/}
      <div className="w-3/4 h-[66.2%] pt-2 pl-2 pr-2 pb-0.5">
        <div className="z-30 absolute left-[37%]">
          <div className="grid grid-cols-2 gap-2">
            <Contacts Texto="judhagsan@gmail.com" />
            <Contacts Texto="(11) 95092-5372" />
          </div>
        </div>
        <HelloCard
          videoUrl={
            "https://player.vimeo.com/video/950032543?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        />
        <div className=" w-full h-3/6 grid grid-cols-3 pt-2 space-x-2">
          <Card imageUrl={I1} />
          <Text
            P1={
              "Bem-vindo ao meu portfólio! Aqui, apresento projetos desde personagens expressivos até efeitos visuais dinâmicos e paisagens abstratas, cada projeto destaca a arte para criar experiências visuais cativantes. fique a vontade para explorar meus trabalhos."
            }
            cortexto={"Black"}
          />
          <Card imageUrl={I2} />
        </div>
      </div>

      {/* para adicionar ao lado Direito */}
      <div className="w-1/4 h-2/6 pt-2 pr-2 pb-0.5 grid-rows-3 space-y-2 font-custom">
        <div className="w-full h-full">
          <Link href={"/fairy"}>
            <Card
              imageUrl={Elf}
              title={"Character Design"}
              titlePositionLeft={"5.2%"}
              description={"Fairy"}
              fontSize={"2vw"}
              descriptionPositionLeft={"7.7%"}
              wSvg={"15%"}
            />
          </Link>
        </div>
        <div className="w-full h-full">
          <Link href={"/survive"}>
            <Card
              imageUrl={survive}
              title={"Character Design"}
              titlePositionLeft={"5.2%"}
              description={"Survive"}
              fontSize={"2vw"}
              descriptionPositionLeft={"6.8%"}
              wSvg={"15%"}
            />
          </Link>
        </div>
        <div className="w-full h-full">
          <Link href={"/pilot"}>
            <Card
              imageUrl={pilot}
              title={"Character Design"}
              titlePositionLeft={"5.2%"}
              description={"Pilot"}
              fontSize={"2vw"}
              descriptionPositionLeft={"7.7%"}
              wSvg={"15%"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
