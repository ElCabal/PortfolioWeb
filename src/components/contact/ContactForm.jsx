import React from "react";

const ContactForm = () => {
  return (
    <form className="bg-gray-900 py-10 px-5 w-full rounded-lg flex flex-col gap-4  ">
      <div>
        <label htmlFor="name" className="block uppercase font-bold">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Escribe tu nombre"
          className=" text-gray-800 placeholder-gray-400 w-full p-2 border-2 mt-2"
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
          className=" text-gray-800 placeholder-gray-400 w-full p-2 border-2 mt-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="block uppercase font-bold">
          DÉJAME UN MENSAJE
        </label>
        <textarea
          id="message"
          type="textarea"
          className=" text-gray-800 placeholder-gray-400 w-full p-2 border-2 mt-2"
          placeholder="Déjame un mensaje te contactaré los más pronto posible"
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
    </form>
  );
};

export default ContactForm;
