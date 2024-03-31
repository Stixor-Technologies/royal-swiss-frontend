"use client";
import React from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import ProjectCard from "@/components/projects/project-card";

const Projects = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className=" md:pt-[1.125rem]">
      <div className="container">
        <PageHeader
          heading="Our Projects"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          description="Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed tellus turpis."
        />

        <div className="mt-[3.625rem] grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:mt-[5.313rem] lg:gap-x-[4.625rem] lg:gap-y-24">
          {arr.map((item, index) => (
            <div
              key={item}
              className={`${index % 2 !== 0 && "sm:mt-10 md:mt-14 lg:mt-[94px]"}`}
            >
              {/* <p className="text-3xl text-black">
                {index} {index % 2}
              </p> */}
              <ProjectCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
