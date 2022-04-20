import React from "react";
import Image from "../../public/assets/images/aboutme.jpg";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoJavascript, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className=" flex flex-col py-24 justify-center items-center px-5 md:px-0 lg:px-20 text-sm  text-neutral-200">
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
              SOBRE <span className="text-emerald-500">MÍ</span>
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
            <div className="flex flex-wrap   gap-2 md:gap-4 text-5xl ">
              <div className=" hover:scale-125 hover:text-[#E44D26]">
                <AiOutlineHtml5 />
                <p className="text-xs text-center">HTML</p>
              </div>
              <div className=" hover:scale-125 hover:text-[#264de4]">
                <IoLogoCss3 />
                <p className="text-xs text-center">CSS</p>
              </div>
              <div className=" hover:scale-125 hover:text-[#F0DB4F]">
                <IoLogoJavascript />
                <p className="text-xs text-center">JAVASCRIPT</p>
              </div>
              <div className=" hover:scale-125 hover:text-[#61DBFB]">
                <FaReact />
                <p className="text-xs text-center">REACT</p>
              </div>
              <div className=" hover:scale-125 hover:text-[#679E63]">
                <IoLogoNodejs />
                <p className="text-xs text-center">NODEJS</p>
              </div>
              <div className=" hover:scale-125 hover:text-[#38BDF8]">
                <SiTailwindcss />
                <p className="text-xs text-center">TAILWIND</p>
              </div>
              <div className=" hover:scale-125 text-center hover:text-[#7611F6]">
                <FaBootstrap />
                <p className="text-xs text-center">BOOTSTRAP</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:flex sm:gap-5 justify-center">
            <Link to="/works" className="btn btn-primary">
              VER PROYECTOS
            </Link>
            <button className="btn btn-secondary flex justify-center items-center gap-1 text-emerald-500  ">
              <MdFileDownload />
              <a
                href=""
                download={"CV Luis Felipe Cabal"}
                className="text-neutral-200"
              >
                DESCARGAR CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
