import NavBar from "pages/component/Nav.js";

import VideoCard from "../component/CenterCard-video";

import V1 from "public/SOS-03.mp4";

import T1 from "public/SOS.png";

function Page() {
  return (
    <div className="bg-orange-950 flex flex-col h-screen">
      {/* Centro */}
      <div className="h-full w-full px-2 pb-2 flex flex-col space-y-2 md:mx-auto md:h-3/4 md:w-4/6">
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
          A animação foi criada para promover o jogo State of Survival,
          especialmente voltada para as redes sociais na Europa. Devido às
          diretrizes e regras específicas das plataformas, a animação foi
          projetada para minimizar a exibição de sangue e conteúdo violento.
          Desenvolvida inteiramente no Blender, a animação combina visuais
          impactantes com uma abordagem cuidadosa para garantir a conformidade
          com as normas de conteúdo das redes sociais.
        </p>
        <p className="text-white text-justify">
          The animation was created to promote the game State of Survival, with
          a focus on social media platforms in Europe. To adhere to the specific
          guidelines and regulations of these platforms, the animation was
          designed to minimize the display of blood and violent content. Crafted
          entirely in Blender, the animation combines striking visuals with a
          careful approach to ensure compliance with social media content
          policies.
        </p>
      </div>
    </div>
  );
}

export default Page;
