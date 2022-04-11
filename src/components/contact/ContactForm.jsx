import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-gray-900 py-10 px-5 w-full rounded-lg flex flex-col gap-4 ">
      <div>
        <label htmlFor="name" className="block uppercase font-bold">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Escribe tu nombre"
          className=" placeholder-gray-400 w-full p-2 border-2 mt-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block uppercase font-bold">
          Correo
        </label>
        <input
          id="email"
          type="text"
          placeholder="Escribe tu correo"
          className=" placeholder-gray-400 w-full p-2 border-2 mt-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="block uppercase font-bold">
          DÉJAME UN MENSAJE
        </label>
        <textarea
          id="message"
          type="textarea"
          className=" placeholder-gray-400 w-full p-2 border-2 mt-2"
          placeholder="Describe los síntomas"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className=" w-full sm:max-w-md py-2 rounded btn-primary"
        >
          ENVIAR
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
