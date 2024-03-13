import React from "react";
import Image from "next/image";
import avatar from "public/pixel-perfil.png"; // Importação correta

function Perfil() {
  return (
    <div className="rounded-full overflow-hidden w-40 md:w-52 z-20">
      <Image src={avatar} alt="Perfil" quality={100} />
    </div>
  );
}

export default Perfil;
