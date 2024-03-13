import React from "react";
import Image from "next/image";
import avatar from "public/pixel-perfil.png"; // Importação correta

function Perfil() {
  return (
    // Utiliza classes do Tailwind para borda arredondada, largura, altura e overflow
    <div className="rounded-full overflow-hidden">
      <Image
        className=" h-20 w-20 sm:h-45 sm:w-45 md:h-45 md:w-45 lg:h-45 lg:w-45 xl:h-45 xl:w-45 2xl:h-45 2xl:w-45"
        src={avatar}
        alt="Perfil"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}

export default Perfil;
