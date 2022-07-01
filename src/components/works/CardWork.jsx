import React from "react";

const CardWork = ({ id, title, image, deploy, repo }) => {
  return (
    <div className="bg-gray-900 rounded shadow-lg text-neutral-200 max-w-xs  hover:scale-105 hover:duration-700 font-quicksand f flex flex-col ">
      <div className=" ">
        <img src={image} alt="work" className=" rounded" />
      </div>
      <div className="p-4 flex flex-col justify-between gap-4	">
        <div className="flex flex-col">
          <p className="font-semibold text-center">{title}</p>
        </div>
        <div className=" flex gap-4 w-full justify-center">
          <a href={deploy} target="_blank" className="btn btn-primary">
            Ver
          </a>
          <a href={repo} target="_blank" className="btn btn-secondary">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardWork;
