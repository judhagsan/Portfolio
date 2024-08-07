// pages/contact.js
import React, { useState } from "react";
import MobileAlert from "../component/Alerta";
import Buttons from "../component/Buttons";
import ContactCard from "../component/ContactCard";

function Contact() {
  return (
    <div className="flex h-screen font-custom">
      <MobileAlert />
      {/* Lado Esquerdo */}
      <div className="w-1/6 h-full pt-2 pl-2 pb-2 font-custom flex flex-col"></div>

      {/* Seção Central */}
      <div className="w-3/4 h-full flex flex-col items-center pl-2 pr-2 pb-2">
        <div className="absolute top-2 left-[37%] z-30">
          <div className="grid grid-cols-3 gap-2">
            <Buttons
              Texto="Work"
              link="https://www.judhagsan.com"
              bgColor="bg-gray-100" // Cor de fundo
              textColor="text-Black" // Cor do texto
            />
            <Buttons
              Texto="Contact"
              link="/contact"
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
          <ContactCard />
        </div>
      </div>
      {/* Lado Direito */}
      <div className="w-1/6 h-full pt-2 pr-2 flex flex-col grid-rows-2 space-y-2"></div>
    </div>
  );
}

export default Contact;
