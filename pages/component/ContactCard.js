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
