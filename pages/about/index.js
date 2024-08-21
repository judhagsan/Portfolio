// pages/contact.js
import React, { useState } from "react";

import NavBar from "pages/component/Nav.js";
import Card from "../component/Card";
import judha from "/public/Judha.png";
function page() {
  return (
    <div className="flex h-screen">
      {/* Seção Central */}
      <div className="w-full h-full md:w-full  flex flex-col items-center pl-2 pr-2 pb-2">
        <div className="absolute top-2 left-[5%] md:left-[18%] z-30">
          <NavBar
            BgColor="bg-white"
            TextColor="text-black"
            HoverBgColor="hover:bg-gray-900"
            HoverTextColor="hover:text-gray-50"
            SvgColor="#FFFFFF"
            LetrasColor="#242424"
          />
        </div>
        <div className=" items-center pt-2 w-full h-4/6 md:w-2/3 md:h-full md:columns-2">
          <div className="w-full h-5/6 md:w-full md:h-full">
            <Card imageUrl={judha} />
          </div>
          <div className="px-2 pb-2 md:pt-20 items-center gap-4">
            <p className="text-black pb-2 text-justify">
              <i>PT-BR</i> ✦ Sou Judhá Guilherme Santos, um profissional
              especializado em Motion Design 2D e 3D com uma carreira que
              começou em 2016. Desde então, desenvolvi uma sólida experiência na
              criação de conteúdos visuais impactantes e animações envolvente,
              tendo 8 anos de experiência e um portfólio que abrange projetos
              para empresas renomadas como Vivo e Google.
            </p>
            <p className="text-black pb-2 text-justify">
              <i>ENG</i> ✦ I am Judhá Guilherme Santos, a professional
              specialized in Motion Design 2D and 3D with a career that began in
              2016. Since then, I have developed solid experience in creating
              impactful visual content and engaging animations. With 8 years of
              experience and a portfolio that includes projects for renowned
              companies such as Vivo and Google, I bring a wealth of expertise
              to every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
