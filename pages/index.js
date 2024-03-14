import React from "react";
import Avatar from "../pages/component/Perfil";
import Card from "../pages/component/Card";
import image from "../public/pixel-perfil.png";

function Home() {
  return (
    <div className="flex flex-col  items-center justify-center h-screen relative">
      <div className="grid grid-cols-2 gap-4">
        <Card image={image} />
        <Card image={image} />
        <Card image={image} />
        <Card image={image} />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Avatar />
      </div>
    </div>
  );
}

export default Home;
