import React from "react";
import NavBar from "pages/component/Nav.js";

import VideoCard from "../component/CenterCard-video";

import V1 from "public/collection/Colibri_intro-V1.mp4";

import T1 from "public/collection/T1.jpg";

function Page() {
  return (
    <div className="bg-gray-950 flex flex-col h-screen">
      {/* Centro */}
      <div className="h-full w-full px-2 pb-2 flex flex-col space-y-2 md:mx-auto md:w-4/6">
        <div className="absolute ml-2 md:ml-60 top-2 z-50">
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
      </div>
      <div className="px-2 pb-2 md:grid md:grid-cols-2 gap-4">
        <p className="text-white pb-2 text-justify">
          A criação da introdução para a startup de drones Colibri foi uma
          jornada empolgante e desafiadora. Começamos com a definição de um
          conceito que não apenas representasse a inovação e agilidade da marca,
          mas que também capturasse a essência de um colibri em voo. O objetivo
          era transformar esses conceitos em uma animação visualmente impactante
          e memorável. Tudo foi feito apenas com shape layers dentro do After
          Effects.
        </p>
        <p className="text-white text-justify">
          Creating the intro for drone startup Colibri was an exciting and
          challenging journey. We started by defining a concept that not only
          represented the brand’s innovation and agility, but also captured the
          essence of a hummingbird in flight. The goal was to transform these
          concepts into a visually striking and memorable animation. Everything
          was done using only shape layers in After Effects.
        </p>
      </div>
    </div>
  );
}

export default Page;
