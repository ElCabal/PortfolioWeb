import emailjs from "@emailjs/browser";

const ContactForm = () => {
  function sendEmail(e) {
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
          alert("Mensaje enviado con exito! 👍");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }
  return (
    <form
      onSubmit={sendEmail}
      className="bg-gray-900 py-5 px-5 w-full rounded-lg flex flex-col gap-4  "
    >
      <div>
        <label htmlFor="name" className="block uppercase font-bold">
          Nombre
        </label>
        <input
          name="name"
          id="name"
          type="text"
          className=" text-gray-800 placeholder-gray-400 w-full p-2 border-2 mt-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block uppercase font-bold">
          Correo
        </label>
        <input
          name="email"
          id="email"
          type="text"
          className=" text-gray-800 placeholder-gray-400 w-full p-2 border-2 mt-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="block uppercase font-bold">
          DÉJAME UN MENSAJE
        </label>
        <textarea
          name="message"
          id="message"
          type="textarea"
          className=" text-gray-800 placeholder-gray-400 w-full p-2 border-2 mt-2"
        />
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value="ENVIAR"
          className=" w-full  py-2 rounded btn btn-primary"
        />
      </div>
    </form>
  );
};

export default ContactForm;
