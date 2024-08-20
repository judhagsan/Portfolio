import React from "react";
import Link from "next/link";
import Card from "./component/Card";
import HelloCard from "./component/HelloCard";
import NavBar from "pages/component/Nav.js";

import vivo from "../public/T_project_vivo.gif";
import colibru from "public/Colection.gif";
import frames from "public/Mestre_intro.gif";
import polovivo from "public/Intro_Polo_Vivo.gif";
import sos from "public/SoS_1.gif";
import ecos from "public/Ecos_1.gif";
import shifu from "public/Shifu_intro.gif";
import I2 from "public/judha-guilherme-render-4.jpg";

function Home() {
  return (
    <div className="flex md:h-screen">
      {/* Seção Esquerda */}
      <div className="hidden md:w-1/4 md:h-full pt-2 pl-2 pb-2 md:grid grid-rows-3 gap-2">
        <Link href="/vivo">
          <Card imageUrl={vivo} />
        </Link>
        <Link href="/colibri">
          <Card imageUrl={colibru} />
        </Link>
        <Link href="/mestre">
          <Card imageUrl={frames} />
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

        <div className="w-full h-[25vh] md:flex md:h-full justify-center pt-2 ">
          <HelloCard videoUrl="https://player.vimeo.com/video/950032543?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        </div>
        {/* somente pc */}
        <div className="hidden md:grid grid-cols-2 pt-2 gap-2 w-full h-2/4">
          <Link href="/sos">
            <Card imageUrl={sos} />
          </Link>
          <Card imageUrl={I2} />
        </div>
        {/* somente pc */}
        {/* somente mobile */}
        <div className=" md:hidden grid pt-2 gap-2 w-full h-[130vh]">
          <Link href="/sos">
            <Card imageUrl={sos} />
          </Link>
          <Link href="/vivo">
            <Card imageUrl={vivo} />
          </Link>
          <Link href="/colibri">
            <Card imageUrl={colibru} />
          </Link>
          <Link href="/mestre">
            <Card imageUrl={frames} />
          </Link>
          <Link href="/polovivo">
            <Card imageUrl={polovivo} />
          </Link>
          <Link href="/ecos">
            <Card imageUrl={ecos} />
          </Link>
          <Link href="/shifu">
            <Card imageUrl={shifu} />
          </Link>
        </div>
        {/* somente mobile */}
      </div>

      {/* Seção Direita */}
      <div className="hidden md:grid md:w-1/4 h-full pt-2 pr-2 pb-2 grid-rows-3 gap-2">
        <Link href="/polovivo">
          <Card imageUrl={polovivo} />
        </Link>
        <Link href="/ecos">
          <Card imageUrl={ecos} />
        </Link>
        <Link href="/shifu">
          <Card imageUrl={shifu} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
