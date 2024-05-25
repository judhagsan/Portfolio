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
    <div className="fixed text-4xl inset-0 w-screen h-screen bg-red-600 text-white flex items-center justify-center z-50">
      Para uma melhor experiência, acesse do computador.
    </div>
  );
};

export default MobileAlert;
