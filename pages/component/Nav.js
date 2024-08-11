import React from "react";
import Buttons from "pages/component/Buttons.js";

function Nav({
  LetrasColor,
  SvgColor,
  BgColor,
  TextColor,
  HoverBgColor,
  HoverTextColor,
}) {
  return (
    <div className="grid grid-cols-3">
      <div className="absolute top-[-10%] left-[7%] w-[20%] z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1016.64 317.51"
          style={{ fill: LetrasColor }}
        >
          <g>
            <path d="M219,214.25h-26.27v-86.44h-26.27v102.12c0,7.25,5.88,13.13,13.13,13.13h52.54c7.25,0,13.14-5.88,13.14-13.14v-102.12h-26.27v86.44Z" />
            <path d="M324.07,127.8h-65.67v115.26h65.67c7.25,0,13.14-5.88,13.14-13.14v-88.99c0-7.25-5.88-13.14-13.14-13.14ZM310.93,214.25h-26.27v-57.63h26.27v57.63Z" />
            <polygon points="402.87 171.03 376.6 171.03 376.6 127.8 350.33 127.8 350.33 243.06 376.6 243.06 376.6 199.84 402.87 199.84 402.87 243.06 429.14 243.06 429.14 127.8 402.87 127.8 402.87 171.03" />
            <path d="M534.21,140.94v89c0,7.25,5.88,13.13,13.13,13.13h52.54c7.25,0,13.14-5.88,13.14-13.13v-58.91h-39.4v28.81h13.14v14.41h-26.27v-57.63h52.54v-28.81h-65.67c-7.25,0-13.13,5.88-13.13,13.13Z" />
            <path d="M626.14,140.94v45.77c0,7.25,5.88,13.13,13.13,13.14h39.4v14.41h-52.54v28.81h65.67c7.25,0,13.14-5.88,13.14-13.14v-45.76c0-7.25-5.88-13.13-13.14-13.13h-39.4v-14.41h52.54v-28.81h-65.67c-7.25,0-13.13,5.88-13.13,13.13Z" />
            <path d="M783.75,127.8h-52.54c-7.25,0-13.13,5.88-13.13,13.13v102.12h26.27v-28.81h26.27v28.81h26.27v-102.12c0-7.25-5.88-13.14-13.14-13.14ZM770.61,185.43h-26.27v-28.81h26.27v28.81Z" />
            <path d="M127.05,98.09h.01v116.16h-26.27v-14.41h-26.27v30.09c0,7.25,5.88,13.13,13.13,13.13h52.54c7.25,0,13.14-5.88,13.14-13.14V69h-26.28v29.09Z" />
            <path d="M862.55,127.8v43.4s-26.27-26.27-26.27-26.27v-17.13h-26.27v115.26h26.27v-57.38l26.27,26.27v31.11h26.27v-102.12c0-7.25-5.88-13.13-13.13-13.13h-13.13Z" />
            <path d="M507.93,127.79h-52.52c-7.26,0-13.14,5.89-13.14,13.15v102.13h26.27v-28.82h26.25v28.82h26.27v-102.14c0-7.25-5.88-13.14-13.14-13.14Z" />
            <path d="M1016.64,94.82v2.68h-45.87c-27.05,0-48.95,21.9-48.95,48.95v45.84h-2.68v-45.84c0-27.05-21.93-48.95-48.95-48.95h-45.84v-2.68h45.84c27.02,0,48.95-21.93,48.95-48.95V0h2.68v45.87c0,27.02,21.9,48.95,48.95,48.95h45.87Z" />
            <path
              style={{ fill: SvgColor }}
              d="M525.56,170.4v1.23h-20.94c-12.35,0-22.35,10.02-22.35,22.4v20.97h-1.22v-20.97c0-12.38-10.01-22.4-22.35-22.4h-20.93v-1.23h20.93c12.34,0,22.35-10.03,22.35-22.4v-20.99h1.22v20.99c0,12.36,10,22.4,22.35,22.4h20.94Z"
            />
          </g>
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1848 290.38"
          style={{ fill: SvgColor }}
        >
          <g>
            <path d="M1178.77,0H0c381.09,0,286.07,281.35,652.25,290.16v.21h17.78s.03,0,.05,0h0s507.85,0,507.85,0h0s.02,0,.03,0h.82C1616.91,289.99,1416.44,0,1848,0h-669.23Z" />
          </g>
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Buttons
          Texto="Work"
          link="https://www.judhagsan.com"
          bgColor={BgColor} // Cor de fundo
          textColor={TextColor} // Cor do texto
          hoverBgColor={HoverBgColor} // Cor de fundo no hover
          hoverTextColor={HoverTextColor} // Cor do texto no hover
        />
        <Buttons
          Texto="Contact"
          link="/contact"
          bgColor={BgColor} // Cor de fundo
          textColor={TextColor} // Cor do texto
          hoverBgColor={HoverBgColor} // Cor de fundo no hover
          hoverTextColor={HoverTextColor} // Cor do texto no hover
        />
        <Buttons
          Texto="About"
          link="/about"
          bgColor={BgColor} // Cor de fundo
          textColor={TextColor} // Cor do texto
          hoverBgColor={HoverBgColor} // Cor de fundo no hover
          hoverTextColor={HoverTextColor} // Cor do texto no hover
        />
      </div>
    </div>
  );
}

export default Nav;
