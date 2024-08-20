import React from "react";
import NavBar from "pages/component/Nav.js";
import VideoCard from "../component/CenterCard-video";

import V1 from "public/collection/New Intro Polo Vivo.mp4";

import T1 from "public/collection/T5.jpg";

function Page() {
  return (
    <div className="bg-blue-950 flex flex-col h-screen">
      {/* Centro */}
      <div className="h-full w-full px-2 pb-2 flex flex-col space-y-2 md:mx-auto md:h-3/4 md:w-4/6">
        <div className="absolute ml-2 md:ml-60 top-2 z-50">
          <NavBar
            BgColor="bg-blue-950"
            TextColor="text-white"
            HoverBgColor="hover:bg-violet-100"
            HoverTextColor="hover:text-blue-950"
            SvgColor="#172554"
            LetrasColor="#FFFFFF"
          />
        </div>
        <VideoCard videoUrl={V1} thumbUrl={T1} />
      </div>
      <div className="px-2 pb-2 md:grid md:grid-cols-2 gap-4">
        <p className="text-white pb-2 text-justify">
          O projeto foi desenvolvido como uma introdução para um novo canal de
          YouTube. Para alcançar o resultado desejado, utilizei uma abordagem
          híbrida, combinando diferentes técnicas de animação. Misturei a
          animação quadro a quadro com elementos 3D e 2D, integrando essas
          mídias de forma harmoniosa para criar uma apresentação visualmente
          envolvente.
        </p>
        <p className="text-white text-justify">
          The project was created as an introduction for a new YouTube channel.
          To achieve the desired result, I employed a hybrid approach, combining
          various animation techniques. I integrated frame-by-frame animation
          with 3D and 2D elements, blending these media seamlessly to produce a
          visually engaging presentation.
        </p>
      </div>
    </div>
  );
}

export default Page;
