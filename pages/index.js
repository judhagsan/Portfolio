import React from "react";
import Avatar from "../pages/component/Perfil"; // Importação correta

function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Avatar />
    </div>
  );
}

export default Home;
