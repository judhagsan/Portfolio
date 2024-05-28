import React from "react";

function Contacts({ Texto }) {
  return (
    <div className="bg-white z-30 mt-1 rounded-full px-4 text-center text-[1.5vw] text-black shadow-lg">
      <p>{Texto}</p>
    </div>
  );
}

export default Contacts;
