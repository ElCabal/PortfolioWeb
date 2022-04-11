import React from "react";

import CardWork from "../components/works/CardWork";

const Works = () => {
  return (
    <section className=" flex flex-col gap-10 py-16">
      <h2 className="text-center text-2xl text-neutral-200 font-bold">
        MIS PROYECTOS <span className="text-emerald-500">.</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 place-items-center xl:pt-8">
        <CardWork />
        <CardWork />
        <CardWork />
        <CardWork />
      </div>
    </section>
  );
};

export default Works;
