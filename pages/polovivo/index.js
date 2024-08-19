import React from "react";
import NavBar from "pages/component/Nav.js";
import VideoCard from "../component/CenterCard-video";

import V1 from "public/vivo/02_Vivo_15s_16x9_v5.mp4";
import V2 from "public/vivo/Filme 03_10s_ Com Audio_Online_V9.mp4";

import T1 from "public/vivo/T1.jpg";
import T2 from "public/vivo/T2.jpg";

function Page() {
  return (
    <div className="bg-purple-950 flex flex-col h-screen">
      {/* Centro */}
      <div className="w-full h-full px-2 pb-2 flex flex-col md:px-0 md:pr-2 md:flex-row space-y-2 md:space-x-2">
        <div className="absolute top-2 left-[5%] md:left-[10%] z-50">
          <NavBar
            BgColor="bg-violet-950"
            TextColor="text-white"
            HoverBgColor="hover:bg-violet-100"
            HoverTextColor="hover:text-violet-950"
            SvgColor="#3b0764"
            LetrasColor="#FFFFFF"
          />
        </div>
        <VideoCard videoUrl={V1} thumbUrl={T1} />
        <VideoCard videoUrl={V2} thumbUrl={T2} />
      </div>
      <div className="px-2 pb-2 md:grid md:grid-cols-2 gap-4 text-sm md:text-base">
        <p className="text-white pb-2 text-justify">
          Projeto desenvolvido em parceria com a Sugarcane Filmes para a marca
          Vivo consistiu na criação de uma série de peças de motion design
          voltadas para as campanhas de Natal e Black Friday com a voz da Ivete
          Sangalo. Para atender às diversas necessidades de divulgação, foram
          criadas peças nos seguintes formatos: 1:1 16:9 9:16. Além dos vídeos,
          foram criados banners animados para utilização em lives e websites
          incorporando animações suaves e loops contínuos.
        </p>
        <p className="text-white text-justify">
          A project developed in partnership with Sugarcane Filmes for the Vivo
          brand consists of creating a series of motion design pieces for the
          Christmas and Black Friday campaigns, featuring the voice of Ivete
          Sangalo. To meet the various advertising needs, pieces were created in
          the following formats: 1:1 16:9 9:16. In addition to the videos,
          animated banners were created for use in live broadcasts and websites,
          incorporating smooth animations and continuous loops.
        </p>
      </div>
    </div>
  );
}

export default Page;
