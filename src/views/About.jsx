import React from "react";
import Image from "../assets/images/aboutme.jpg";

const About = () => {
  return (
    <section className=" flex flex-col py-20 justify-center items-center px-20 md:px-0 lg:px-20 text-sm   text-neutral-200 font-quicksand">
      <div className="grid lg:flex justify-between items-center md:flex-row-reverse gap-20">
        <div className="grid justify-center ">
          <img
            className="rounded w-80 md: max-w-md "
            src={Image}
            alt="aboutme"
          />
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="grid gap-4">
            <h2 className="font-bold text-xl">SOBRE MÍ </h2>
            <p className="">
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
            <h2 className="font-bold text-xl">HABILIDADES</h2>
            <div className="flex gap-4 ">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <ul>
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>MongoDB</li>
              </ul>
              <ul>
                <li>GIT</li>
                <li>Figma</li>
                <li></li>
              </ul>
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
