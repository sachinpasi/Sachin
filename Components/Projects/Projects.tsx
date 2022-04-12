import React from "react";
import { Data } from "../../data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className="py-[30px]">
      <h2 className="mb-[60px] text-center font-IvyMode font-semibold text-2xl">
        Projects
      </h2>
      <div className="relative flex flex-wrap h-full justify-between border-b border=[#eeeeee] w-full ">
        {Data.Projects.map(
          ({ Name, Website, Description, Stack, Image }, id) => (
            <ProjectItem
              key={id}
              Name={Name}
              Website={Website}
              Description={Description}
              Stack={Stack}
              src={Image}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
