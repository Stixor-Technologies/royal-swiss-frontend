import React, { FC } from "react";
import Image from "next/image";
import { RSProjects } from "@/utils/types/types";
import { BASE_URL } from "@/utils/constants";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ProjectProps = {
  project: RSProjects;
  index: number;
};

const ProjectCard: FC<ProjectProps> = ({ project, index }) => {
  return (
    <div
      className={`${index % 2 !== 0 && "self-end sm:mt-10 md:mt-14 lg:mt-[5.875rem]"}`}
    >
      <Swiper
        grabCursor={true}
        pagination={true}
        modules={[Pagination]}
        shortSwipes={true}
        longSwipesMs={10000}
        className="project-swiper carousel-slider mb-10 aspect-[641/445] rounded-[1.25rem] sm:mb-[1.688rem] lg:rounded-[2.5rem]"
      >
        {project?.attributes?.images?.data?.map((projectImage, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={`${BASE_URL}${projectImage?.attributes?.url}`}
                alt=""
                className="transition-all duration-500 ease-in-out hover:scale-110"
                fill
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div>
        <h2 className="font-righteous text-lg leading-[1.397rem] text-indigo-blue midLg:text-4xl midLg:leading-[2.794rem]">
          {project?.attributes?.title}
        </h2>
        <p className="mt-4 text-[0.813rem] font-light leading-[1.056rem] text-rich-black midLg:text-lg midLg:leading-[1.35rem]">
          {project?.attributes?.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
