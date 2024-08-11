import React, { useEffect, useState } from "react";

function Contacts({
  Texto,
  link,
  bgColor = "bg-white",
  textColor = "text-black",
  hoverBgColor = "hover:bg-gray-300",
  hoverTextColor = "hover:text-black",
}) {
  return (
    <a
      href={link}
      className={`z-30 h-[70%] mt-1 rounded-full px-2 font-medium text-center transition-colors duration-300 block ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor}`}
    >
      {Texto}
    </a>
  );
}

export default Contacts;
