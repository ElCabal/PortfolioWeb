import React from "react";

import { Link, NavLink } from "react-router-dom";

const HeroTitle = () => {
  return (
    <div className="flex flex-col gap-10 text-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-neutral-200 font-semibold">
      <p className="leading-relaxed">
        Soy <span className="text-emerald-500">Luis Felipe Cabal</span>
        <br />
        Fullstack Developer
      </p>

      <p className="text-xl sm:text-3xl lg:text-4xl ">
        Bienvenido a mi <span className="text-emerald-500">Portfolio</span> Web
      </p>
      <div className="grid gap-2 sm:flex sm:gap-5 justify-center">
        <Link
          to="about"
          className="btn btn-primary flex justify-center items-center"
        >
          CONÓCEME
        </Link>
      </div>
    </div>
  );
};

export default HeroTitle;
