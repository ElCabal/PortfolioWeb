import React from "react";
import HeroTitle from "../components/home/HeroTitle";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.section
      className="flex flex-col bg-gray-800 font-poppins pt-28 lg:py-22 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <HeroTitle />
    </motion.section>
  );
};

export default Home;
