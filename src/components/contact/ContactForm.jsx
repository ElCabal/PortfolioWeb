import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [emailSend, setEmailSend] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function sendEmail(data, e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fmdasyc",
        "template_ic3kv9d",
        e.target,
        "aNBo7SmQN__uVsUqE"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
    setEmailSend(true);
    setTimeout(() => setEmailSend(false), 5000);
  }
  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="bg-gray-900 py-5 px-5 w-full rounded-lg flex flex-col gap-4  "
    >
      <div>
        <label htmlFor="name" className="block uppercase font-bold">
          Nombre
        </label>
        <input
          {...register("name", {
            required: {
              value: true,
              message: "El campo es requerido",
            },
          })}
          name="name"
          id="name"
          type="text"
          placeholder="Nombre"
          className=" text-gray-800 placeholder-gray-400 w-full p-2 border-2 mt-2"
        />
        {errors.name && (
          <div className=" text-red-500">{errors.name.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block uppercase font-bold">
          Correo
        </label>
        <input
          {...register("email", {
            required: {
              value: true,
              message: "El campo es requerido",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "El formato no es correcto",
            },
          })}
          name="email"
          id="email"
          type="text"
          placeholder="correo@gmail.com"
          className=" text-gray-800 placeholder-gray-400 w-full p-2 border-2 mt-2"
        />
        {errors.email && (
          <div className=" text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block uppercase font-bold">
          DÉJAME UN MENSAJE
        </label>
        <textarea
          {...register("message", {
            required: {
              value: true,
              message: "El campo es requerido",
            },
          })}
          name="message"
          id="message"
          type="textarea"
          placeholder="Mensaje"
          className=" text-gray-800 placeholder-gray-400 w-full p-2 border-2 mt-2"
        />
        {errors.message && (
          <div className=" text-red-500">{errors.message.message}</div>
        )}
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value="ENVIAR"
          className=" w-full  py-2 rounded btn btn-primary"
        />
      </div>

      {emailSend && (
        <div className=" text-center text-green-500">
          ¡Mensaje enviado con éxito!
        </div>
      )}
    </form>
  );
};

export default ContactForm;
