import NavBar from "pages/component/Nav.js";

import VideoCard from "../component/CenterCard-video";

import V1 from "public/collection/Mestre_intro.mp4";

import T1 from "public/collection/T4.jpg";

function Page() {
  return (
    <div className="bg-orange-950 flex flex-col h-screen">
      {/* Centro */}
      <div className="h-full w-full px-2 pb-2 flex flex-col space-y-2 md:mx-auto md:w-4/6">
        <div className="absolute ml-2 md:ml-60 top-2 z-50">
          <NavBar
            BgColor="bg-rose-950"
            TextColor="text-white"
            HoverBgColor="hover:bg-gray-900"
            HoverTextColor="hover:text-gray-50"
            SvgColor="#431407"
            LetrasColor="#FFFFFF"
          />
        </div>
        <VideoCard videoUrl={V1} thumbUrl={T1} />
      </div>
      <div className="px-2 pb-2 md:grid md:grid-cols-2 gap-4">
        <p className="text-white pb-2 text-justify">
          O projeto foi a introdução para um canal de YouTube. Comecei
          desenvolvendo um conceito visual que combinasse com o tema do canal.
          Usei o Blender para modelar e animar os elementos 3D e, em seguida,
          trabalhei no After Effects para criar e animar a palavra "Mestre".
          Integrar esses elementos foi desafiador, mas consegui fazer com que
          tudo se encaixasse bem. Ajustei as animações e os efeitos visuais para
          criar uma introdução que fosse fluida e atraente.
        </p>
        <p className="text-white text-justify">
          The project was an intro for a YouTube channel. I started by
          developing a visual concept that would fit with the channel’s theme. I
          used Blender to model and animate the 3D elements, and then worked in
          After Effects to create and animate the word “Master.” Integrating
          these elements was challenging, but I managed to make it all fit
          together well. I tweaked the animations and visual effects to create
          an intro that was fluid and engaging.
        </p>
      </div>
    </div>
  );
}

export default Page;
