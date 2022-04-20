import CardWork from "../components/works/CardWork";
import Projects from "../assets/data/proyectos";

const Works = () => {
  return (
    <section className=" flex flex-col gap-10 py-16 font-poppins">
      <h2 className="text-center text-2xl text-neutral-200 font-bold">
        MIS PROYECTOS <span className="text-emerald-500">.</span>
      </h2>
      <div className=" flex flex-wrap justify-center items-center gap-4 xl:pt-8">
        {Projects.map((item) => {
          return (
            <CardWork
              key={item.id}
              title={item.title}
              image={item.image}
              deploy={item.deploy}
              repo={item.repo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Works;
