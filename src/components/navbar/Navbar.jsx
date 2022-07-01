import React from "react";
import { CgMenuCheese, CgClose } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import css from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" bg-gradient-to-r from-gray-800 to-gray-900 text-neutral-200 h-24 flex justify-between items-center px-10 md:px-18 relative w-full font-poppins z-50 ">
        <NavLink
          to="/"
          className="text-3xl text-neutral-200 font-bold font-poppins"
        >
          Luis Cabal<span className="text-emerald-500">.</span>
        </NavLink>
        <div className="hidden lg:flex gap-10 lg:gap-20 text-1xl font-semibold">
          <NavLink to="/" className={css.navLink}>
            INICIO
          </NavLink>
          <NavLink to="about" className={css.navLink}>
            SOBRE MÍ
          </NavLink>
          <NavLink to="works" className={css.navLink}>
            PROYECTOS
          </NavLink>
          <NavLink to="contact" className={css.navLink}>
            CONTÁCTO
          </NavLink>
        </div>
        <div className="hidden lg:flex text-xl gap-5 ">
          <a
            href="https://www.linkedin.com/in/luis-felipe-cabal/"
            target={"_blank"}
          >
            <FaLinkedin className="cursor-pointer hover:text-emerald-500" />
          </a>
          <a href="https://github.com/ElCabal" target={"_blank"}>
            <GoMarkGithub className="cursor-pointer hover:text-emerald-500" />
          </a>
        </div>
        <div className="text-4xl lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <CgMenuCheese /> : <CgClose />}
        </div>
      </nav>
      <div
        className={
          !isOpen
            ? "flex flex-col absolute bg-gradient-to-r from-gray-800 to-gray-900 w-full  h-screen text-neutral-200 bottom-full left-0 justify-center items-center gap-16 font-semibold text-xl lg:hidden  transition-all ease-in duration-500 "
            : "flex flex-col absolute bg-gradient-to-r from-gray-800 to-gray-900 w-full h-screen text-neutral-200 transition-all bottom-full translate-y-full ease-in duration-400 z-10 left-0 justify-center items-center gap-16 font-semibold text-xl lg:hidden"
        }
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-emerald-500 " : "inactive"
          }
          onClick={() => setIsOpen(false)}
        >
          INICIO
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "text-emerald-500" : "inactive"
          }
          onClick={() => setIsOpen(false)}
        >
          SOBRE MÍ
        </NavLink>
        <NavLink
          to="works"
          className={({ isActive }) =>
            isActive ? "text-emerald-500" : "inactive"
          }
          onClick={() => setIsOpen(false)}
        >
          PROYECTOS
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "text-emerald-500" : "inactive"
          }
          onClick={() => setIsOpen(false)}
        >
          CONTACTO
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
