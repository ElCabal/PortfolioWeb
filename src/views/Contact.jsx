import React from "react";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <section className="w-full md:max-w-2xl lg:max-w-4xl text-neutral-200 px-5 py-16 flex flex-col gap-10">
      <h1 className="text-2xl font-bold text-center">
        CONTÁCTAME <span className="text-emerald-500">.</span>
      </h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
