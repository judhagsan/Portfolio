import React from "react";
import NavBar from "pages/component/Nav.js";

import VideoCard from "../component/CenterCard-video";

import V1 from "public/collection/Shifu_intro.mp4";

import T1 from "public/collection/T6.jpg";

function Page() {
  return (
    <div className="bg-neutral-800 flex flex-col h-screen">
      {/* Centro */}
      <div className="h-full w-full px-2 pb-2 flex flex-col space-y-2 md:mx-auto md:h-3/4 md:w-4/6">
        <div className="absolute ml-2 md:ml-60 top-2 z-50">
          <NavBar
            BgColor="bg-neutral-800"
            TextColor="text-white"
            HoverBgColor="hover:bg-gray-900"
            HoverTextColor="hover:text-gray-50"
            SvgColor="#242424"
            LetrasColor="#FFFFFF"
          />
        </div>
        <VideoCard videoUrl={V1} thumbUrl={T1} />
      </div>
      <div className="px-2 pb-2 md:grid md:grid-cols-2 gap-4">
        <p className="text-white pb-2 text-justify">
          Criei uma animação para canais de YouTube e Twitch utilizando o Adobe
          After Effects, com técnicas de animação quadro a quadro. Esse processo
          envolveu a concepção de uma animação visualmente atraente e coesa que
          se alinha com a identidade do canal, melhorando a experiência dos
          espectadores e fortalecendo o engajamento.
        </p>
        <p className="text-white text-justify">
          I created an animation for YouTube and Twitch channels using Adobe
          After Effects, employing frame-by-frame animation techniques. This
          involved designing a visually compelling and cohesive animation that
          aligns with the channel's brand identity, enhancing viewer engagement
          and overall experience.
        </p>
      </div>
    </div>
  );
}

export default Page;
