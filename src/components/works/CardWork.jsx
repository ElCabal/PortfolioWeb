import React from "react";
import Image from "../../assets/images/proyecto-crudo.png";

const CardWork = () => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-5 text-neutral-200 max-w-xs h-80 hover:scale-105 font-quicksand font-bold flex flex-col justify-between">
      <div className=" ">
        <img src={Image} alt="hola" className=" rounded-lg" />
      </div>
      <div className="flex flex-col">
        <p>CRUDO APP</p>
        <p className="text-sm"></p>
      </div>
      <div>
        <div className=" flex gap-4 w-full justify-center">
          <button className="btn btn-primary">Ver</button>
          <button className="btn btn-secondary">Github</button>
        </div>
      </div>
    </div>
  );
};

export default CardWork;
