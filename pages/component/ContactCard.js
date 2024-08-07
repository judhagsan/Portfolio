import React, { useState, useEffect } from "react";
import { initEmailJS } from "/lib/emailjs";
import emailjs from "@emailjs/browser";

function Card() {
  const cardStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "2vw",
    overflow: "hidden",
    position: "relative",
  };

  const svgStyle = {
    position: "absolute",
    zIndex: 2,
    width: "26%",
    marginLeft: "4.5%",
    marginTop: "-2%",
  };

  const logoStyle = {
    position: "absolute",
    zIndex: 3,
    width: "13%",
    marginLeft: "11%",
    marginTop: "-1.5%",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Inicialize o EmailJS quando o componente for montado
    initEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2pio95y", // Substitua pelo seu Service ID
        "template_nxtjd3o", // Substitua pelo seu Template ID
        e.target,
        "YiteNY0tAToGYq2mg", // Substitua pela sua Public Key
      )
      .then((result) => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        // Mostrar detalhes do erro
        console.error("Error sending email:", error);
        const errorMessage =
          error?.text || "Message sending failed. Please try again.";
        setStatus(`Message sending failed. Error: ${errorMessage}`);
      });
  };

  return (
    <div style={cardStyle} className="bg-gray-200 mx-0 p-4">
      <div style={logoStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 814.3 174.07"
          style={{ fill: "#242424" }}
        >
          <g>
            <path d="M144.47,145.25h-26.27V58.81h-26.27v102.12c0,7.25,5.88,13.13,13.13,13.13h52.54c7.25,0,13.14-5.88,13.14-13.14V58.81h-26.27v86.44Z" />
            <path d="M249.54,58.81h-65.67v115.26h65.67c7.25,0,13.14-5.88,13.14-13.14v-88.99c0-7.25-5.88-13.14-13.14-13.14ZM236.41,145.25h-26.27v-57.63h26.27v57.63Z" />
            <polygon points="328.35 102.03 302.08 102.03 302.08 58.81 275.81 58.81 275.81 174.06 302.08 174.06 302.08 130.84 328.35 130.84 328.35 174.06 354.61 174.06 354.61 58.81 328.35 58.81 328.35 102.03" />
            <path d="M459.68,71.94v89c0,7.25,5.88,13.13,13.13,13.13h52.54c7.25,0,13.14-5.88,13.14-13.13v-58.91h-39.4v28.81h13.14v14.41h-26.27v-57.63h52.54v-28.81h-65.67c-7.25,0-13.13,5.88-13.13,13.13Z" />
            <path d="M551.62,71.94v45.77c0,7.25,5.88,13.13,13.13,13.14h39.4v14.41h-52.54v28.81h65.67c7.25,0,13.14-5.88,13.14-13.14v-45.76c0-7.25-5.88-13.13-13.14-13.13h-39.4v-14.41h52.54v-28.81h-65.67c-7.25,0-13.13,5.88-13.13,13.13Z" />
            <path d="M709.22,58.81h-52.54c-7.25,0-13.13,5.88-13.13,13.13v102.12h26.27v-28.81h26.27v28.81h26.27v-102.12c0-7.25-5.88-13.14-13.14-13.14ZM696.09,116.43h-26.27v-28.81h26.27v28.81Z" />
            <path d="M52.53,29.09h.01v116.16h-26.27v-14.41H0v30.09c0,7.25,5.88,13.13,13.13,13.13h52.54c7.25,0,13.14-5.88,13.14-13.14V0h-26.28v29.09Z" />
            <path d="M788.03,58.81v43.4s-26.27-26.27-26.27-26.27v-17.13h-26.27v115.26h26.27v-57.38l26.27,26.27v31.11h26.27v-102.12c0-7.25-5.88-13.13-13.13-13.13h-13.13Z" />
            <path d="M433.41,58.79h-52.52c-7.26,0-13.14,5.89-13.14,13.15v102.13h26.27v-28.82h26.25v28.82h26.27v-102.14c0-7.25-5.88-13.14-13.14-13.14Z" />
            <path
              style={{ fill: "#FFFFFF" }}
              d="M451.04,101.41v1.23h-20.94c-12.35,0-22.35,10.02-22.35,22.4v20.97h-1.22v-20.97c0-12.38-10.01-22.4-22.35-22.4h-20.93v-1.23h20.93c12.34,0,22.35-10.03,22.35-22.4v-20.99h1.22v20.99c0,12.36,10,22.4,22.35,22.4h20.94Z"
            />
          </g>
        </svg>
      </div>
      <div style={svgStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1848 290.38"
          style={{ fill: "#fff" }}
        >
          <g>
            <path d="M1178.77,0H0c381.09,0,286.07,281.35,652.25,290.16v.21h17.78s.03,0,.05,0h0s507.85,0,507.85,0h0s.02,0,.03,0h.82C1616.91,289.99,1416.44,0,1848,0h-669.23Z" />
          </g>
        </svg>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl text-center font-medium mt-10">
          Say Hi! And Let's work together.
        </h1>
        <h2 className="text-lg text-center font-normal mb-5">
          hello@judhagsan.com
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border-gray-200 p-4 pe-12 text-lg shadow-sm"
              placeholder="Your Name..."
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border-gray-200 p-4 pe-12 text-lg shadow-sm"
              placeholder="Your Email Address..."
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border-gray-200 p-4 pe-12 text-lg shadow-sm"
              placeholder="Your Message..."
              rows="7"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 w-full bg-gray-950 text-white rounded-xl hover:bg-gray-500 transition-colors duration-300"
          >
            Send
          </button>
          {status && (
            <div
              className={`mt-4 text-sm ${
                status.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Card;
