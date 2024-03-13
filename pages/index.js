import React, { useState } from "react";
import Avatar from "../pages/component/Perfil";
import Card from "../pages/component/Card";
import image from "../public/pixel-perfil.png";
import image2 from "../public/OFR-55.jpg";

function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="flex justify-center items-center h-screen w-screen">
        <Avatar />
      </div>
      <div className="absolute inset-1/2">
        <Card image={image} />
      </div>
    </div>
  );
}

export default Home;
