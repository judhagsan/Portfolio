import React from "react";

function MyImageComponent() {
  const style = {
    border: "5px solid black", // Define a borda
    borderRadius: "50%",
    width: "200px", // Largura da borda
    height: "200px", // Altura da borda
    objectFit: "none", // Mantém o tamanho original da imagem
  };

  return (
    <div>
      <img src="pages/pixel-perfil.png" style={style} />
    </div>
  );
}

export default MyImageComponent;
