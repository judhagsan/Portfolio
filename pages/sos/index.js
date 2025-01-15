import NavBar from "pages/component/Nav.js";

import HelloCard from "../component/HelloCard";
import Card from "../component/Card";

import V1 from "public/sos-1.png";
import V2 from "public/sos-2.png";
import V3 from "public/sos-3.png";
import V4 from "public/sos-4.png";
import V5 from "public/sos-5.png";
import V6 from "public/sos-6.png";
import V9 from "public/sos-9_1.gif";

function Page() {
  return (
    <div className=" flex flex-col md:flex-row h-screen">
      {/* Centro */}
      <div className="h-full w-full px-2 pb-2 md:flex md:flex-col space-y-2 md:h-screen">
        <div className="absolute ml-2 md:ml-60 top-2 z-50">
          <NavBar
            BgColor="bg-white"
            TextColor="text-black"
            HoverBgColor="hover:bg-gray-900"
            HoverTextColor="hover:text-gray-50"
            SvgColor="#FFFFFF"
            LetrasColor="#242424"
          />
        </div>
        <HelloCard videoUrl="https://player.vimeo.com/video/1047191656?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        <div className="flex flex-row gap-2 md:w-full md:h-[44%]">
          <Card imageUrl={V5} />
          <Card imageUrl={V6} />

          <Card imageUrl={V9} />
        </div>
      </div>
      <div className="pb-2 pt-[1%] items-center gap-4 md:w-[78%] md:h-[95%]">
        <p className=" text-center text-2xl pb-2">State Of Survival</p>
        <p className=" px-2 pb-2 text-justify md:pr-4">
          <i>PT-BR</i> ✦ A animação foi criada para promover o jogo State of
          Survival, especialmente voltada para as redes sociais na Europa.
          Devido às diretrizes e regras específicas das plataformas, a animação
          foi projetada para minimizar a exibição de sangue e conteúdo violento.
          Desenvolvida inteiramente no Blender, a animação combina visuais
          impactantes com uma abordagem cuidadosa para garantir a conformidade
          com as normas de conteúdo das redes sociais.
        </p>
        <p className=" px-2 pb-2 text-justify md:pr-4">
          <i>ENG</i> ✦ The animation was created to promote the game State of
          Survival, with a focus on social media platforms in Europe. To adhere
          to the specific guidelines and regulations of these platforms, the
          animation was designed to minimize the display of blood and violent
          content. Crafted entirely in Blender, the animation combines striking
          visuals with a careful approach to ensure compliance with social media
          content policies.
        </p>
        <p className=" text-center text-2xl pb-2 md:pt-[3.5%]">Style Frame</p>
        <div className="flex flex-col md:flex-row md:pr-2 pb-2 px-2 gap-2 md:px-0 md:w-full md:h-1/3 w-full h-[80%]">
          <Card imageUrl={V1} />
          <Card imageUrl={V2} />
        </div>
        <div className="flex flex-col md:flex-row md:pr-2 px-2 pb-2 md:pb-0 md:px-0 gap-2 md:w-full md:h-1/3 w-full h-[80%]">
          <Card imageUrl={V3} />
          <Card imageUrl={V4} />
        </div>
      </div>
    </div>
  );
}

export default Page;
