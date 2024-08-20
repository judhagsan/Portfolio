import NavBar from "pages/component/Nav.js";

import VideoCard from "../component/CenterCard-video";

import V1 from "public/collection/INtro-Ecos.mp4";

import T1 from "public/collection/T3.jpg";

function Page() {
  return (
    <div className="bg-rose-200 flex flex-col h-screen">
      {/* Centro */}
      <div className="h-full w-full px-2 pb-2 flex flex-col space-y-2 md:mx-auto md:h-3/4 md:w-4/6">
        <div className="absolute ml-2 md:ml-60 top-2 z-50">
          <NavBar
            BgColor="bg-rose-200"
            TextColor="text-black"
            HoverBgColor="hover:bg-rose-900"
            HoverTextColor="hover:text-gray-50"
            SvgColor="#fecdd3"
            LetrasColor="#242424"
          />
        </div>
        <VideoCard videoUrl={V1} thumbUrl={T1} />
      </div>
      <div className="px-2 pb-2 md:grid md:grid-cols-2 gap-4">
        <p className="text-black pb-2 text-justify">
          Criei uma animação para a abertura e transição de temas durante as
          transmissões ao vivo de cultos e eventos religiosos. Utilizando Adobe
          After Effects, elaborei uma identidade visual coesa e atraente que
          reflete os valores e a missão do contexto religioso, garantindo uma
          experiência visual envolvente e profissional para os participantes.
        </p>
        <p className="text-black text-justify">
          I created an animation for the opening and theme transitions during
          live worship streams and religious events. Using Adobe After Effects,
          I crafted a cohesive and engaging visual identity that reflects the
          values and mission of the religious context, ensuring a professional
          and immersive visual experience for participants.
        </p>
      </div>
    </div>
  );
}

export default Page;
