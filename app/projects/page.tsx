"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import ProjectCard from "@/components/projects/project-card";
import { getProjects } from "@/utils/api-calls";
import { RSProjects } from "@/utils/types/types";

const Projects = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [projects, setProject] = useState<RSProjects[] | []>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const resp = await getProjects();
      if (resp) {
        setProject(resp);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className=" md:pt-[1.125rem]">
      <div className="container">
        <PageHeader
          heading="Our Projects"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          description="Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed tellus turpis."
        />

        {projects.length > 0 && (
          <div className="mt-[3.625rem] grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:mt-[5.313rem]   lg:gap-x-[4.625rem] xl:gap-y-0">
            {projects.map((item, index) => (
              <ProjectCard key={item?.id} project={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
