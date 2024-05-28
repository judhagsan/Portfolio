import { useEffect, useState } from "react";

const MobileAlert = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-red-600 text-white z-50">
      <p className="text-2xl text-center font-bold">
        Para uma melhor experiência, vire o celular ou acesse do computador.
      </p>
    </div>
  );
};

export default MobileAlert;
