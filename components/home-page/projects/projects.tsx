import React, { FC, useRef } from "react";
import Image from "next/image";
import { RSProjects } from "@/utils/types/types";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { BASE_URL } from "@/utils/constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

type ProjectsProps = {
  projects: RSProjects[];
};

const HomePageProjects: FC<ProjectsProps> = ({ projects }) => {
  gsap.registerPlugin(ScrollTrigger);

  const swiperRef = useRef<SwiperClass | null>(null);
  const projectsSection = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to("[data-project-heading]", {
        opacity: 1,
        transform: "translateY(0%)",
      }).to(
        "[data-project-description]",
        {
          opacity: 1,
          duration: 1,
        },
        "<0.3",
      );

      ScrollTrigger.create({
        trigger: projectsSection.current,
        start: "top 80%",
        animation: tl,
      });
    },
    { scope: projectsSection, dependencies: [projects] },
  );

  return (
    <>
      {projects?.length > 0 ? (
        <section
          ref={projectsSection}
          className="container mt-10 lg:mt-[9.063rem]"
        >
          <div className="text-center md:text-left">
            <h2
              data-project-heading
              className="mb-6 translate-y-full font-righteous text-4xl  leading-[2.7rem] text-indigo-blue opacity-0 md:mb-5 md:text-5xl md:leading-[3.6rem]"
            >
              Our Projects
            </h2>

            <p
              data-project-description
              className="text-[0.813rem] font-light leading-[1.056rem] text-gray opacity-0 md:text-[1.375rem] md:leading-[1.829rem]"
            >
              From luxury living (Parco Qasaba Gujrat) to vital infrastructure
              (Layyah-Tunsa Bridge, Multan International Airport), HRL shapes
              Pakistan&apos;s landscape with expertise in diverse projects.
            </p>
          </div>

          <div className="md:[3.875rem] relative mt-10">
            <div className="relative w-full lg:-ml-[7%] 2xl:-ml-[18%]">
              <Swiper
                grabCursor={true}
                loop={true}
                shortSwipes={true}
                longSwipesMs={10000}
                className="home-projects-swiper h-auto w-full overflow-hidden rounded-[0.938rem] md:rounded-[2.5rem]"
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={700}
              >
                {projects?.map((project, index) => (
                  <>
                    <SwiperSlide
                      key={index}
                      className="relative aspect-[1360/732]"
                    >
                      <Image
                        src={`${BASE_URL}${project?.attributes?.thumbnail_image?.data?.attributes?.url}`}
                        alt=""
                        fill
                        className="h-full  w-full object-cover"
                      />

                      <h3 className="absolute bottom-[2.57vw] left-[6.74vw] font-righteous  text-[clamp(1.25rem,4.2vw,3.75rem)] text-white opacity-70">
                        {project?.attributes?.title}
                      </h3>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>

              <div className="absolute top-1/2 z-10  -ml-[1.5vw] flex w-[calc(100%+3vw)] -translate-y-1/2 justify-between lg:-right-[3.375rem] lg:top-[3.438rem] lg:ml-0 lg:w-auto lg:translate-y-0 lg:flex-col lg:gap-4">
                <button
                  onClick={() => {
                    swiperRef.current?.slidePrev();
                  }}
                  className=" group relative size-[1.953rem] rotate-90 sm:size-16 lg:size-[7.188rem]"
                  aria-label="Perevious Image"
                >
                  <div className="relative h-full w-full origin-center overflow-hidden rounded-full bg-indigo-blue duration-300 group-hover:scale-75">
                    <div className="pointer-events-none absolute inset-0">
                      <svg
                        viewBox="0 0 108 108"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="duration-300 group-hover:translate-y-full group-hover:scale-125"
                      >
                        <line
                          x1="54.3661"
                          y1="36.6357"
                          x2="54.3661"
                          y2="70.6685"
                          stroke="#FFFBF3"
                          stroke-width="1.5"
                        ></line>
                        <path
                          d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                          stroke="#FFFBF3"
                          stroke-width="1.5"
                        ></path>
                      </svg>
                    </div>
                    <div className="pointer-events-none absolute inset-0">
                      <svg
                        viewBox="0 0 108 108"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-translate-y-full scale-125 duration-300 group-hover:translate-y-0"
                      >
                        <line
                          x1="54.3661"
                          y1="36.6357"
                          x2="54.3661"
                          y2="70.6685"
                          stroke="#FFFBF3"
                          stroke-width="1.5"
                        ></line>
                        <path
                          d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                          stroke="#FFFBF3"
                          stroke-width="1.5"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    swiperRef.current?.slideNext();
                  }}
                  className="group relative size-[1.953rem] -rotate-90 sm:size-16 lg:size-[7.188rem]"
                  aria-label="Next Image"
                >
                  <div className="relative h-full w-full origin-center overflow-hidden rounded-full bg-indigo-blue duration-300 group-hover:scale-75">
                    <div className="pointer-events-none absolute inset-0">
                      <svg
                        viewBox="0 0 108 108"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="duration-300 group-hover:translate-y-full group-hover:scale-125"
                      >
                        <line
                          x1="54.3661"
                          y1="36.6357"
                          x2="54.3661"
                          y2="70.6685"
                          stroke="#FFFBF3"
                          stroke-width="1.5"
                        ></line>
                        <path
                          d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                          stroke="#FFFBF3"
                          stroke-width="1.5"
                        ></path>
                      </svg>
                    </div>
                    <div className="pointer-events-none absolute inset-0">
                      <svg
                        viewBox="0 0 108 108"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-translate-y-full scale-125 duration-300 group-hover:translate-y-0"
                      >
                        <line
                          x1="54.3661"
                          y1="36.6357"
                          x2="54.3661"
                          y2="70.6685"
                          stroke="#FFFBF3"
                          stroke-width="1.5"
                        ></line>
                        <path
                          d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                          stroke="#FFFBF3"
                          stroke-width="1.5"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default HomePageProjects;
