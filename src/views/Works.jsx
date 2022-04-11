import React from "react";
import CardWork from "../components/works/CardWork";

const Works = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 place-items-center justify-around pb-20 xl:pb-0 pt-20 lg:pt-28  ">
        <CardWork />
        <CardWork />
        <CardWork />
        <CardWork />
      </div>
    </section>
  );
};

export default Works;
