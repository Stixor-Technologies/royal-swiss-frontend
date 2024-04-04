import React, { useEffect, useRef, useState } from "react";
import { getTeam } from "@/utils/api-calls";
import { TeamMembers } from "@/utils/types/types";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";
import { BASE_URL } from "@/utils/constants";

const Team = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [team, setTeam] = useState<TeamMembers[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeam = async () => {
      const resp = await getTeam();
      if (resp) {
        setTeam(resp);
      }
      setLoading(false);
    };
    fetchTeam();
  }, []);

  return (
    <>
      {team?.length > 0 ? (
        <section className="container relative mt-10 md:mt-56">
          <div className="grid sm:grid-cols-[minmax(200px,_900px)_1fr] lg:gap-x-14">
            <div className="text-center sm:w-[80%] sm:text-left lg:w-full">
              <h2 className="mb-2 font-righteous text-4xl leading-[2.7rem] text-indigo-blue lg:text-[3.5rem] lg:leading-[4.5rem]">
                Our Motivated Team
              </h2>
              <p className=" text-[0.813rem] font-light leading-[1.056rem] text-gray lg:text-2xl lg:leading-[1.995rem]">
                Lorem ipsum dolor sit amet consectetur. Feugiat gravida enim
                feugiat magnis euismod nisi lobortis risus neque. Pellentesque
                fermentum ac odio massa.
              </p>
            </div>

            <div className="col-span-2 col-start-1 row-start-3 mt-[1.313rem] flex items-start justify-center gap-3 text-black sm:col-span-1 sm:col-start-auto sm:row-start-auto sm:mt-0 sm:justify-end">
              <button
                className="group relative size-[1.953rem] rotate-90 sm:size-10 lg:size-[5.375rem]"
                aria-label="Previous page"
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
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
                className="group relative size-[1.953rem] -rotate-90 sm:size-10 lg:size-[5.375rem]"
                aria-label="Next page"
                onClick={() => {
                  swiperRef.current?.slideNext();
                }}
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

            <div className="col-span-2 mt-3 h-[19.5rem] md:mt-10 lg:h-[37.438rem]">
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
        </section>
      ) : null}
    </>
  );
};

export default Team;
