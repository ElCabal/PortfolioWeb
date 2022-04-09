import React from "react";
import { CgMenuCheese, CgClose } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-gray-800 text-neutral-200 h-20 flex justify-between items-center px-10 md:px-18 relative  ">
      <NavLink to="/" className="text-5xl text-emerald-500 font-nunito">
        LC.
      </NavLink>
      <div className="hidden md:flex gap-10 lg:gap-20 text-1xl font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-emerald-500" : "inactive"
          }
        >
          INICIO
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "text-emerald-500" : "inactive"
          }
        >
          SOBRE MÍ
        </NavLink>
        <NavLink
          to="works"
          className={({ isActive }) =>
            isActive ? "text-emerald-500" : "inactive"
          }
        >
          PROYECTOS
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "text-emerald-500" : "inactive"
          }
        >
          CONTACTO
        </NavLink>
      </div>
      <div className="hidden md:flex text-xl gap-5 ">
        <FaLinkedin className=" cursor-pointer hover:text-amber-600" />
        <GoMarkGithub />
      </div>
      <div className="text-4xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <CgMenuCheese /> : <CgClose />}
      </div>
      {isOpen && (
        <div className="flex flex-col absolute bg-gray-900 w-full top-full left-0 py-28 justify-center items-center gap-16 font-semibold text-xl md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-emerald-500" : "inactive"
            }
            onClick={() => setIsOpen(false)}
          >
            INICIO
          </NavLink>
          <NavLink
            to="about "
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
      )}
    </nav>
  );
};

export default Navbar;
