import React from "react";
import ContactForm from "../components/contact/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="w-full md:max-w-2xl lg:max-w-4xl text-neutral-200 px-5 py-16 flex flex-col gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-2xl font-bold text-center">
        CONTÁCTAME <span className="text-emerald-500">.</span>
      </h1>
      <ContactForm />
    </motion.section>
  );
};

export default Contact;
