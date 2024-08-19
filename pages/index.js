import React from "react";
import Link from "next/link";
import Card from "./component/Card";
import HelloCard from "./component/HelloCard";
import NavBar from "pages/component/Nav.js";

import vivo from "../public/T_project_vivo.gif";
import colibru from "public/Colection.gif";
import frames from "public/Mestre_intro.gif";
import polovivo from "public/Intro_Polo_Vivo.gif";
import I1 from "public/judha-guilherme-fish1.jpg";
import I2 from "public/judha-guilherme-render-4.jpg";

function Home() {
  return (
    <div className="flex h-screen font-custom">
      {/* Seção Esquerda */}
      <div className="hidden md:w-1/4 md:h-full pt-2 pl-2 pb-2 md:grid grid-rows-3 gap-2">
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
      <div className="w-full h-full flex flex-col items-center pl-2 pr-2 pb-2 md:w-3/4 md:h-full">
        <div className="absolute top-2 left-[5%] md:left-[25%] z-30">
          <NavBar
            BgColor="bg-white"
            TextColor="text-black"
            HoverBgColor="hover:bg-gray-900"
            HoverTextColor="hover:text-gray-50"
            SvgColor="#FFFFFF"
            LetrasColor="#242424"
          />
        </div>

        <div className="w-full h-2/6 md:flex md:h-full justify-center pt-2 ">
          <HelloCard videoUrl="https://player.vimeo.com/video/950032543?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        </div>
        {/* somente pc */}
        <div className="hidden md:grid grid-cols-2 pt-2 gap-2 w-full h-2/4">
          <Card imageUrl={I1} />
          <Card imageUrl={I2} />
        </div>
        {/* somente pc */}
        {/* somente mobile */}
        <div className=" md:hidden grid pt-2 gap-2 w-full h-full">
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
        {/* somente mobile */}
      </div>

      {/* Seção Direita */}
      <div className="hidden md:grid md:w-1/4 h-full pt-2 pr-2 pb-2 grid-rows-3 gap-2">
        <Link href="/polovivo">
          <Card
            imageUrl={polovivo}
            title="Motion Design"
            titlePositionLeft="6%"
            description="vivo"
            fontSize="2vw"
            descriptionPositionLeft="8%"
            wSvg="15%"
          />
        </Link>
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
      </div>
    </div>
  );
}

export default Home;
