import React from "react";
import Card from "../component/Card";
import MobileAlert from "../component/Alerta";
import Text from "../component/Text-Rect";

import F1 from "public/frames/Strok_wave.gif";
import F2 from "public/frames/To_Portfolio.gif";
import F3 from "public/frames/Walk_on_water.gif";
import F4 from "public/frames/Walk_run.gif";
import F5 from "public/frames/Crown_Granatus.gif";

function fadaPage() {
  return (
    <div className="bg-neutral-800 flex flex-col md:flex-row h-screen font-custom">
      <MobileAlert />

      {/* Lado Esquerdo */}
      <div className="w-1/3 h-full pt-2 pl-2 pb-2 font-custom flex flex-col">
        <div className="flex-grow grid grid-rows-2 gap-2">
          <Card imageUrl={F3} />
          <Card imageUrl={F4} />
        </div>
      </div>

      {/* Centro */}
      <div className="w-2/3 h-full p-2 flex flex-col space-y-2">
        <Card imageUrl={F1} />
        <Card imageUrl={F2} />
      </div>

      {/* Lado Direito */}
      <div className="w-1/3 h-full pt-2 pr-2 pb-2 font-custom flex flex-col gap-2">
        <Text
          P1={`No desenvolvimento das animações, utilizo uma combinação de técnicas como Frame by Frame que envolvem o Adobe Animate e o Adobe After Effects e 3D. Essas ferramentas são essenciais para criar animações fluidas, detalhadas e visualmente impactantes.`}
          P2={`Cada frame é desenhado com cuidado, garantindo um movimento orgânico e expressivo.`}
          P3={`Em resumo, o domínio dessas técnicas, eleva a qualidade das animações, tornando-as não apenas visualmente atraentes, mas também profundamente envolventes e impactantes.`}
          cortexto={"White"}
        />
        <Card imageUrl={F5} />
      </div>
    </div>
  );
}

export default fadaPage;
