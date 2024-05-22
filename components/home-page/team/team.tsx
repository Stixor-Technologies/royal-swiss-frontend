import React, { FC, useRef } from "react";
import { TeamMembers } from "@/utils/types/types";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";
import { BASE_URL } from "@/utils/constants";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type TeamProps = {
  team: TeamMembers[];
};

const Team: FC<TeamProps> = ({ team }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
  const teamContainer = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          if (context.conditions) {
            const { isDesktop } = context.conditions;
            if (isDesktop) {
              gsap.set("#path", { visibility: "visible" });
              gsap.set("#path", { drawSVG: "0" });

              ScrollTrigger.create({
                trigger: teamContainer.current,
                start: "top 50%",
                animation: gsap.to("#path", {
                  duration: 2,
                  drawSVG: true,
                  ease: "power2.inOut",
                }),
              });
            }
          }
        },
      );
    },
    { scope: teamContainer, dependencies: [team] },
  );

  return (
    <>
      {team?.length > 0 ? (
        <section
          ref={teamContainer}
          className="relative z-10 mt-10 md:mt-28 lg:mt-56"
        >
          <div className="container px-0">
            <div className="absolute inset-0 -top-60 -z-[10] mx-auto hidden max-w-[120rem] flex-col justify-center xs:flex">
              <svg
                className="w-full"
                height="700"
                viewBox="0 0 1440 319"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="path"
                  opacity="0.3"
                  d="M-14 24.3203C42.9421 24.3203 85.0955 54.2545 116.865 84.6472C132.935 100.021 148.262 117.387 162.748 134.204C166.347 138.382 169.892 142.522 173.415 146.638C184.569 159.667 195.516 172.454 207.336 185.43C267.286 251.249 338.521 309.57 466.532 309.57C611.448 309.57 719.509 243.984 832.229 168.895C839.355 164.148 846.534 159.332 853.774 154.475C956.221 85.7439 1070.61 9 1213.27 9C1298.69 9 1372.94 34.5473 1424.75 59.0258C1450.87 71.3664 1471.92 83.7353 1486.62 93.1476C1493.98 97.8644 1499.8 101.869 1503.91 104.799C1505.97 106.265 1507.61 107.465 1508.8 108.354C1509.05 108.545 1509.29 108.721 1509.5 108.882C1509.79 109.098 1510.04 109.288 1510.25 109.45C1510.44 109.592 1510.59 109.714 1510.72 109.814L1510.9 109.947L1511 110.026"
                  stroke="#EADDA8"
                  stroke-width="110px"
                />
              </svg>
            </div>

            <div className="absolute left-0 right-0 top-24 -z-10 block overflow-hidden xs:hidden">
              <svg
                width="430"
                height="150"
                viewBox="0 0 430 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M331.21 91.5017C290.128 119.013 241.467 150 174.882 150C111.45 150 75.2492 119.157 49.7887 91.0573C45.0287 85.8037 40.4944 80.4785 36.3609 75.6239C35.146 74.1971 33.9657 72.8109 32.8245 71.4792C27.6166 65.4019 23.126 60.3411 18.8013 56.1819C10.0167 47.7337 4.5923 45.6402 0 45.6402V5.605C20.7232 5.605 36.0643 16.5565 47.6262 27.6758C53.4747 33.3003 59.0526 39.6539 64.3248 45.8062C65.6346 47.3347 66.9245 48.8494 68.2069 50.3553C72.2663 55.122 76.2502 59.8002 80.5518 64.5477C102.37 88.6276 128.294 109.965 174.882 109.965C227.622 109.965 266.949 85.9697 307.972 58.4983C310.565 56.7616 313.178 54.9994 315.813 53.2225C353.097 28.077 394.728 0 446.647 0C477.734 0 504.755 9.34658 523.61 18.3021C533.116 22.817 540.777 27.3422 546.127 30.7857C548.808 32.5113 550.925 33.9765 552.421 35.0485C553.17 35.5849 553.765 36.0239 554.198 36.3492C554.291 36.4188 554.377 36.4833 554.455 36.5424C554.559 36.6213 554.65 36.6907 554.727 36.7501C554.795 36.8021 554.853 36.8465 554.9 36.8831L554.963 36.932L555 36.9609C555.005 36.965 555.01 36.969 542.162 52.58C529.314 68.191 529.318 68.1948 529.323 68.1984L529.331 68.205L529.346 68.2161L529.355 68.2231C529.329 68.2038 529.266 68.1553 529.165 68.0794C528.963 67.9277 528.611 67.6672 528.117 67.3131C527.127 66.6044 525.574 65.5256 523.512 64.1986C519.377 61.5366 513.269 57.9212 505.635 54.2955C490.212 46.9698 469.475 40.0352 446.647 40.0352C407.957 40.0352 376.467 61.1529 335.988 88.2989C334.409 89.3576 332.817 90.4255 331.21 91.5017Z"
                  fill="#EADDA8"
                />
              </svg>
            </div>

            <div className="grid sm:grid-cols-[minmax(200px,_900px)_1fr] lg:gap-x-14">
              <div className="!px-4 text-center sm:w-[80%] sm:!px-8 sm:text-left lg:w-full lg:!px-[2.625rem]">
                <h2 className="mb-2 font-righteous text-4xl leading-[2.7rem] text-indigo-blue lg:text-[3.5rem] lg:leading-[4.5rem]">
                  Our Motivated Team
                </h2>
                <p className=" text-[0.813rem] font-light leading-[1.056rem] text-gray lg:text-2xl lg:leading-[1.995rem]">
                  Royal Swiss Housing, a Habib Rafiq (Pvt.) Ltd. project, brings
                  together a team of passionate experts to create exceptional
                  living experiences in Multan.
                </p>
              </div>

              <div className="col-span-2 col-start-1 row-start-3 mt-[1.313rem] flex items-start justify-center gap-3 !px-4 text-black sm:col-span-1 sm:col-start-auto sm:row-start-auto sm:mt-0 sm:justify-end sm:!px-8 lg:gap-6 lg:!px-[2.625rem]">
                <button
                  className="group relative size-[1.953rem] rotate-90 sm:size-10 lg:size-[5rem]"
                  aria-label="Previous page"
                  onClick={() => {
                    swiperRef.current?.slidePrev();
                  }}
                >
                  <div className="relative h-full w-full origin-center overflow-hidden rounded-full bg-indigo-blue duration-300 group-hover:scale-125">
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
                  className="group relative size-[1.953rem] -rotate-90 sm:size-10 lg:size-[5rem]"
                  aria-label="Next page"
                  onClick={() => {
                    swiperRef.current?.slideNext();
                  }}
                >
                  <div className="relative h-full w-full origin-center overflow-hidden rounded-full bg-indigo-blue duration-300 group-hover:scale-125">
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

              <div className="relative col-span-2 mt-3 h-[19.5rem] md:mt-10 md:h-[24.5rem] lg:h-[37.438rem]">
                <div className="absolute left-0 list-none overflow-visible">
                  <Swiper
                    slidesPerView={"auto"}
                    freeMode={true}
                    modules={[FreeMode]}
                    spaceBetween={25}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    className="!px-4 sm:!px-8 lg:!px-[2.625rem]"
                  >
                    {team?.map((member, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          className={`relative max-w-[14.5rem] lg:max-w-[27.125rem]`}
                        >
                          <Image
                            key={index}
                            src={`${BASE_URL}${member?.attributes?.member_image?.data?.attributes?.url}`}
                            alt=""
                            width={500}
                            height={500}
                            className={`aspect-[434/495] rounded-[0.625rem] lg:rounded-[1.993rem]`}
                          />

                          <div className="mt-5 text-center md:mt-7">
                            <h3 className="mb-0.5 text-[0.813rem] font-extrabold leading-[0.975rem] text-indigo-blue md:text-lg lg:mb-2 lg:text-[2rem] lg:leading-[2.391rem] ">
                              {member?.attributes?.member_name}
                            </h3>

                            <h5 className="text-[0.5rem] font-light leading-[0.665rem] text-gray md:text-xs lg:text-[1.37rem] lg:leading-[1.822rem]">
                              {`${member?.attributes?.member_designation} |
                        ${member?.attributes?.member_company}`}
                            </h5>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Team;
