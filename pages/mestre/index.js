import NavBar from "pages/component/Nav.js";

import VideoCard from "../component/CenterCard-video";

import Text from "../component/Text-Rect";

import V1 from "public/collection/Mestre_intro.mp4";

import T1 from "public/collection/T4.jpg";

function fadaPage() {
  return (
    <div className="bg-orange-950 flex flex-col md:flex-row h-screen font-custom">
      {/* Lado Esquerdo */}
      <div className="w-1/6 h-full pt-2 pl-2 pb-2 font-custom flex flex-col"></div>

      {/* Centro */}
      <div className="w-4/6 h-full px-2 pb-2 flex flex-col space-y-2">
        <div className="absolute top-2 left-[25%] z-50">
          <NavBar
            BgColor="bg-rose-950"
            TextColor="text-white"
            HoverBgColor="hover:bg-gray-900"
            HoverTextColor="hover:text-gray-50"
            SvgColor="#431407"
            LetrasColor="#FFFFFF"
          />
        </div>
        <VideoCard
          videoUrl={V1}
          thumbUrl={T1}
          svgColor={"#431407"}
          textColor={"White"}
        />
        <Text
          P1={`O projeto foi a introdução para um canal de YouTube. Comecei desenvolvendo um conceito visual que combinasse com o tema do canal.`}
          P2={`Usei o Blender para modelar e animar os elementos 3D e, em seguida, trabalhei no After Effects para criar e animar a palavra "Mestre". Integrar esses elementos foi desafiador, mas consegui fazer com que tudo se encaixasse bem. Ajustei as animações e os efeitos visuais para criar uma introdução que fosse fluida e atraente.`}
          cortexto={"White"}
        />
      </div>

      {/* Lado Direito */}
      <div className="w-1/6 h-full pt-2 pr-2 flex flex-col grid-rows-2 space-y-2"></div>
    </div>
  );
}

export default fadaPage;
