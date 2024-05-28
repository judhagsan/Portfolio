import React from "react";
import Card from "../component/Card";

import VideoCard from "../component/CenterCard-video";
import MobileAlert from "../component/Alerta";
import Text from "../component/Text-Rect";

import V1 from "public/collection/Colibri_intro-V1.mp4";
import V2 from "public/collection/Hued_intro_1.mp4";
import V3 from "public/collection/INtro-Ecos.mp4";
import V4 from "public/collection/Mestre_intro.mp4";
import V5 from "public/collection/New Intro Polo Vivo.mp4";
import V6 from "public/collection/Shifu_intro.mp4";
import V7 from "public/collection/Online.mp4";

import T1 from "public/collection/T1.jpg";
import T2 from "public/collection/T2.jpg";
import T3 from "public/collection/T3.jpg";
import T4 from "public/collection/T4.jpg";
import T5 from "public/collection/T5.jpg";
import T6 from "public/collection/T6.jpg";
import T7 from "public/collection/T7.jpg";

function fadaPage() {
  return (
    <div className="bg-neutral-800 flex flex-row place-content-center h-screen font-custom">
      <MobileAlert />

      {/* Lado Esquerdo */}
      <div className="w-[29.7%] h-full pt-2 pl-2 pb-2 font-custom flex flex-col space-y-2">
        <VideoCard videoUrl={V4} thumbUrl={T4} />
        <VideoCard videoUrl={V5} thumbUrl={T5} />
        <VideoCard videoUrl={V6} thumbUrl={T6} />
      </div>

      {/* Centro */}
      <div className="w-[30.2%] h-full p-2 flex flex-col space-y-2">
        <VideoCard videoUrl={V1} thumbUrl={T1} />
        <VideoCard videoUrl={V2} thumbUrl={T2} />
        <VideoCard videoUrl={V3} thumbUrl={T3} />
      </div>

      {/* Lado Direito */}
      <div className="w-[28.7%] h-full pt-2 pr-2 pb-2 flex flex-col grid-rows-2 space-y-2">
        <VideoCard videoUrl={V7} thumbUrl={T7} />
      </div>
    </div>
  );
}

export default fadaPage;
