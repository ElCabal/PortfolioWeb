import React from "react";
import Image from "../../assets/images/proyecto-crudo.png";

const CardWork = () => {
  return (
    <div className="bg-gray-900 rounded shadow-lg text-neutral-200 max-w-xs  hover:scale-105 font-quicksand f flex flex-col ">
      <div className=" ">
        <img src={Image} alt="hola" className=" rounded" />
      </div>
      <div className="p-4 flex flex-col justify-between gap-4	">
        <div className="flex flex-col">
          <p className="font-semibold text-center">CRUDO APP</p>
        </div>
        <div className=" flex gap-4 w-full justify-center">
          <button className="btn btn-primary">Ver</button>
          <button className="btn btn-secondary">Github</button>
        </div>
      </div>
    </div>
  );
};

export default CardWork;
