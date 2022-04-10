import React from "react";
import { MdFileDownload } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const HeroTitle = () => {
  return (
    <div className="flex flex-col gap-10 text-center text-[2.7rem] sm:text-6xl lg:text-7xl text-neutral-200 font-quicksand font-bold">
      <p className="leading-relaxed">
        Soy <span className="text-emerald-500">Luis Felipe Cabal</span>
        <br />
        Desarrollador Web
      </p>

      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Bienvenido a mi <span className="text-emerald-500">Portfolio</span> Web
      </p>
      <div className="px-14 gap-3 sm:flex sm:gap-5 justify-center  ">
        <Link to="works" className="btn btn-primary">
          <button className="btn">Ver Proyectos</button>
        </Link>
        <div className="h-2 sm:h-0"></div>
        <button className="btn btn-secondary flex justify-center items-center gap-3 text-emerald-500  ">
          <MdFileDownload />{" "}
          <a
            href=""
            download={"CV Luis Felipe Cabal"}
            className="text-neutral-200"
          >
            Descargar CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default HeroTitle;
