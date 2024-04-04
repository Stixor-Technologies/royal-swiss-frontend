"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import ProjectCard from "@/components/projects/project-card";
import SkillSet from "@/components/shared/skill-set/skill-set";
import Spinner from "@/components/shared/spinner/spinner";
import { getProjects } from "@/utils/api-calls";
import { RSProjects } from "@/utils/types/types";
import GetInTouch from "@/components/shared/get-in-touch/get-in-touch";
import Dealers from "@/components/shared/dealers/dealers";
import { animatePageIn } from "@/utils/transition-animation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const [projects, setProject] = useState<RSProjects[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    animatePageIn();
  }, []);

  useGSAP(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth > 768) {
      ScrollSmoother.create({ smooth: 2, smoothTouch: 0 });
    }
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const resp = await getProjects();
      if (resp) {
        setProject(resp);
      }
      setLoading(false);
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

        {loading ? (
          <div className="flex min-h-[50vh]">
            <Spinner />
          </div>
        ) : (
          projects?.length > 0 && (
            <div className="mt-[3.625rem] grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:mt-[5.313rem]   lg:gap-x-[4.625rem] xl:gap-y-0">
              {projects?.map((item, index) => (
                <ProjectCard key={item?.id} project={item} index={index} />
              ))}
            </div>
          )
        )}
      </div>
      <div className="mt-[2.125rem] sm:mt-[clamp(2.125rem,14.8vw,13.313rem)] md:pb-[3.25rem]">
        <SkillSet />
      </div>

      <div className="-mt-14 lg:mt-0">
        <GetInTouch />
      </div>
      <Dealers />
    </section>
  );
};

export default Projects;
