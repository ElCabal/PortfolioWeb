import React from "react";
import { MdFileDownload } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const HeroTitle = () => {
  return (
    <div className="flex flex-col gap-10 text-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-neutral-200 font-quicksand font-bold">
      <p className="leading-relaxed">
        Soy <span className="text-emerald-500">Luis Felipe Cabal</span>
        <br />
        Desarrollador Web
      </p>

      <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
        Bienvenido a mi <span className="text-emerald-500">Portfolio</span> Web
      </p>
      <div className="grid gap-2 sm:flex sm:gap-5 justify-center">
        <Link to="works" className="btn btn-primary">
          PROYECTOS
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
  );
};

export default HeroTitle;
