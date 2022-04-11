import React from "react";
import Image from "../assets/images/aboutme.jpg";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoJavascript, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <section className=" flex flex-col py-24 justify-center items-center px-20 md:px-0 lg:px-20 text-sm  text-neutral-200">
      <div className="grid lg:flex justify-between items-center md:flex-row-reverse gap-20">
        <div className="grid justify-center ">
          <img
            className="rounded w-80 md: max-w-md"
            src={Image}
            alt="aboutme"
          />
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="grid gap-4">
            <h2 className=" pl-2 font-bold text-2xl border-l-4  border-l-emerald-500">
              SOBRE <span className="text-emerald-500">MÍ</span>{" "}
            </h2>
            <p className=" font-light text-lg leading-6">
              Mi nombre es Luis Felipe Cabal, tengo 25 años y me considero una
              <br />
              persona muy determinada y autodidacta. Estoy formandome
              <br />
              actualmente en un bootcamp de programación como desarrollador
              <br />
              fullstack, me ha fascinado el mundo de la tecnología y me
              <br />
              emocionan los retos que puedo encontrar en ella, mi objetivo es
              <br />
              mejorar mis skills continuamente para ser un buen solucionador
              <br />
              problemas.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="pl-2 font-bold text-2xl border-l-4  border-l-emerald-500">
              HABILIDADES
            </h2>
            <div className="flex gap-2 text-5xl ">
              <AiOutlineHtml5 className=" hover:scale-125 hover:text-[#E44D26]" />
              <IoLogoCss3 className=" hover:scale-125 hover:text-[#264de4]" />
              <IoLogoJavascript className=" hover:scale-125 hover:text-[#F0DB4F]" />
              <FaReact className=" hover:scale-125 hover:text-[#61DBFB]" />
              <SiTailwindcss className=" hover:scale-125 hover:text-[#38BDF8]" />
              <IoLogoNodejs className=" hover:scale-125 hover:text-[#679E63]" />
            </div>
          </div>
          <div className="grid gap-4 sm:flex sm:gap-5 justify-center">
            <button className="btn btn-primary">Ver Proyectos</button>
            <button className="btn btn-secondary"> Descargar CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
