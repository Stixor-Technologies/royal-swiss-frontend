import React, { FC } from "react";
import Image from "next/image";
import { RSProjects } from "@/utils/types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BASE_URL } from "@/utils/constants";

type ProjectsProps = {
  projects: RSProjects[];
};

const HomePageProjects: FC<ProjectsProps> = ({ projects }) => {
  console.log(projects);
  return (
    <section className="container">
      <div className="text-center md:text-left">
        <h2 className="mb-6 font-righteous text-4xl leading-[2.7rem]  text-indigo-blue md:mb-5 md:text-5xl md:leading-[3.6rem]">
          Our Projects
        </h2>

        <p className="text-[0.813rem] font-light leading-[1.056rem] text-gray md:text-[1.375rem] md:leading-[1.829rem]">
          Lorem ipsum dolor sit amet consectetur. Faucibus semper id porta
          egestas mi praesent. In ultrices blandit risus elementum habitant
          ipsum at augue. Amet cursus ornare neque quam. Accumsan neque
          elementum ut nisl diam congue ornare. Pulvinar.
        </p>
      </div>

      <div className="relative mt-10">
        <div className="relative w-full">
          <Swiper
            shortSwipes={true}
            longSwipesMs={10000}
            className="home-projects-swiper aspect-[1360/732] h-auto w-full rounded-[0.625rem] lg:rounded-[2rem]"
            //   modules={[Thumbs, FreeMode]}
          >
            {projects?.map((project, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`${BASE_URL}${project?.attributes?.thumbnail_image?.data?.attributes?.url}`}
                  alt=""
                  fill
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomePageProjects;
