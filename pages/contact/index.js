// pages/contact.js
import React, { useState } from "react";

import NavBar from "pages/component/Nav.js";
import ContactCard from "../component/ContactCard";

function Contact() {
  return (
    <div className="flex h-screen">
      {/* Seção Central */}
      <div className="w-full h-full md:w-full  flex flex-col items-center pl-2 pr-2 pb-2">
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
        <div className="flex h-full justify-center pt-2 w-full">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default Contact;
