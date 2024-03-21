import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

function EmailContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica para enviar o e-mail
    console.log("Enviando e-mail para:", email);
    console.log("Nome:", name);
    console.log("Mensagem:", message);
    // Resetar os campos depois de enviar
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <form className="form" onSubmit={handleSubmit}>
        <p>Me mande uma mensagem :D</p>
        <div>
          <input
            type="nome"
            value={name}
            onChange={handleNameChange}
            placeholder="Seu Nome"
            required
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Seu Melhor E-mail"
            required
          />
        </div>
        <TextareaAutosize
          value={message}
          onChange={handleMessageChange}
          placeholder="Digite sua mensagem"
          required
          minRows={3} // Defina o número mínimo de linhas
          maxRows={5} // Defina o número máximo de linhas
        />
        <button type="submit">
          <div>
            <div className="send">
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 220.96 204"
                style={{ fill: "#ff4b68" }}
              >
                <g>
                  <path
                    class="cls-1"
                    d="M165.6,140.1c-9.24.12-18.35.25-27.56.37v12.42h-1.35c-8.27,0-16.54.02-24.81-.03-1.16,0-1.5.33-1.48,1.48.07,3.71.03,7.42.03,11.2-9.29.12-18.49.25-27.77.37v12.46h-40.98v12.9H14.08v-38.13h13.67v-38.16h13.81v-25.95h-13.81v-38.16h-13.67V12.74h27.61v12.9h40.98v12.46c9.28.12,18.47.25,27.77.37,0,3.78.04,7.49-.03,11.2-.02,1.16.32,1.49,1.48,1.48,8.27-.05,16.54-.03,24.81-.03h1.35v12.42c9.2.12,18.31.25,27.56.37v12.4h27.77v-12.67h-27.51v-12.69h-27.58v-12.73h-27.54v-12.73h-27.82v-12.69h-27.62V0H14.06c0,4.23-.01,8.47-.02,12.7H0v38.19h14.05v38.16h13.67v12.91l.03.03-.03.03v12.91h-13.67v38.16H0v38.19h14.04c0,4.23.01,8.47.02,12.7h41.24v-12.79h27.62v-12.69h27.82v-12.73h27.54v-12.73h27.58v-12.69h27.51v-12.67h-27.77v12.4Z"
                  />
                  <path class="cls-1" d="M193.37,127.7h.04v-.03h-.04v.03Z" />
                  <path
                    class="cls-1"
                    d="M207.04,114.98h.03v-.04s-.02,0-.03,0v.04Z"
                  />
                  <path
                    class="cls-1"
                    d="M193.4,127.66h13.63v-12.69h-13.63v12.69Z"
                  />
                  <path
                    class="cls-1"
                    d="M207.07,89.06v12.76l-.04.18.04.18v12.76c4.63,0,9.26.01,13.89.02v-25.92c-4.63,0-9.26.01-13.89.02Z"
                  />
                  <path class="cls-1" d="M193.4,76.34v-.03h-.04v.03h.04Z" />
                  <path
                    class="cls-1"
                    d="M207.07,89.06v-.04h-.03v.04s.02,0,.03,0Z"
                  />
                  <path
                    class="cls-1"
                    d="M207.04,89.02v-12.69h-13.63v12.69h13.63Z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </button>
      </form>
    </div>
  );
}

export default EmailContact;
