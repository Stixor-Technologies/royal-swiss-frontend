import React, { FC, useRef } from "react";
import Image from "next/image";
import { AssociatesGroup } from "@/utils/types/types";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";
import { BASE_URL } from "@/utils/constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

type AssociateGroupProp = {
  assocGroups: AssociatesGroup[];
};

const AssociateGroup: FC<AssociateGroupProp> = ({ assocGroups }) => {
  gsap.registerPlugin(ScrollTrigger);

  const swiperRef = useRef<SwiperClass | null>(null);
  const groupSection = useRef<HTMLElement | null>(null);
  const groupContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to("[data-offer-heading]", {
        opacity: 1,
        transform: "translateY(0%)",
      }).to(
        "[data-offer-description]",
        {
          opacity: 1,
          duration: 1.4,
          ease: "linear",
        },
        "<0.3",
      );

      ScrollTrigger.create({
        trigger: groupSection.current,
        start: "top 85%",
        animation: tl,
      });
    },
    { scope: groupSection, dependencies: [assocGroups] },
  );

  return (
    <section
      ref={groupSection}
      className=" mt-[5.625rem] lg:mb-4 lg:mt-[11.438rem]"
    >
      <div className="container grid grid-rows-[0px_auto_16.7vw_auto] justify-items-center xl:grid-rows-[62px_auto_270px_auto]">
        <div className="col-start-1 row-span-3 row-start-1 w-full rounded-[0.938rem] bg-dark-grain-pattern bg-cover bg-no-repeat bg-blend-multiply md:rounded-[1.25rem] lg:rounded-[2.5rem]" />

        <div className="col-start-1 row-start-2 mb-[2.03rem] mt-[0.875rem] px-[1.438rem] text-white md:mt-8 md:px-6 lg:mb-[3.875rem] lg:px-[4rem] xl:mt-0">
          <h2
            data-offer-heading
            className="mb-2 translate-y-full font-righteous text-lg leading-[1.35rem] text-yellow opacity-0 md:mb-[1.125rem] md:text-4xl md:leading-[2.7rem]"
          >
            What We Offer
          </h2>
          <p
            data-offer-description
            className="text-[0.813rem] font-light leading-[1.056rem] opacity-0 md:text-[1.375rem] md:leading-[1.829rem]"
          >
            It brings a unique mix of residential, commercial, religious,
            cultural, and entertainment marvels together in harmony with each
            other. In addition, we boast a distinguishing array of features. It
            brings a unique mix of residential, commercial, religious, cultural,
            and entertainment marvels together in harmony with each other. In
            addition, we boast a distinguishing array of features
          </p>
        </div>

        <div
          ref={groupContainer}
          className="relative col-start-1 row-span-3 row-start-3 -mr-[8.6%] w-full items-center justify-center justify-self-end overflow-hidden rounded-[0.938rem] bg-yellow pl-4 md:rounded-[1.25rem] md:pl-9 lg:w-[89.8%] lg:rounded-[2.5rem] lg:pl-12 xl:pl-[4.438rem]"
        >
          {assocGroups?.length > 0 ? (
            <>
              <div className="mb-[1.767rem] mt-[1.813rem] flex items-start justify-between gap-8 pr-[8.6%] md:my-14  xl:mb-[4.061rem] xl:mt-[4.25rem]">
                <h3 className="font-righteous text-lg leading-[1.35rem] text-indigo-blue md:text-4xl md:leading-[2.7rem]">
                  The Associate and Group
                </h3>

                <div className="col-span-4 col-start-10 flex items-center gap-2">
                  <button
                    onClick={() => {
                      swiperRef.current?.slidePrev();
                    }}
                    className="group relative size-[1.828rem] rotate-90 md:size-[3.875rem]"
                    aria-label="Previous slide"
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
                            stroke="#EADDA8"
                            stroke-width="1.5"
                          ></line>
                          <path
                            d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                            stroke="#EADDA8"
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
                            stroke="#EADDA8"
                            stroke-width="1.5"
                          ></line>
                          <path
                            d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                            stroke="#EADDA8"
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
                    className="group relative size-[1.828rem] -rotate-90 md:size-[3.875rem]"
                    aria-label="Next slide"
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
                            stroke="#EADDA8"
                            stroke-width="1.5"
                          ></line>
                          <path
                            d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                            stroke="#EADDA8"
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
                            stroke="#EADDA8"
                            stroke-width="1.5"
                          ></line>
                          <path
                            d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                            stroke="#EADDA8"
                            stroke-width="1.5"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <Swiper
                slidesPerView={"auto"}
                freeMode={true}
                modules={[FreeMode]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="assoc-swiper mb-[2.845rem] w-full cursor-pointer md:mb-16 lg:h-auto xl:mb-[4.5rem]"
              >
                {assocGroups?.map((assocGroup, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className={`relative mr-[1.539rem] !size-[3.409rem] items-center sm:mr-8 sm:!size-14 md:mr-16 md:!size-24 lg:!size-[6.438rem]`}
                    >
                      <Image
                        key={index}
                        src={`${BASE_URL}${assocGroup?.attributes?.icon?.data?.attributes?.url}`}
                        fill
                        alt=""
                        className="absolute w-full object-contain"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          ) : (
            <div className="mb-[1.767rem] mt-[1.813rem] flex items-start justify-between gap-8 pr-[8.6%] md:my-14  xl:mb-[4.061rem] xl:mt-[4.25rem]">
              <p className="text-[0.813rem] leading-[1.056rem] text-indigo-blue md:text-[1.375rem] md:leading-[1.829rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                beatae nihil molestias animi distinctio molestiae cumque
                voluptatibus dignissimos, id commodi sapiente? Accusamus,
                molestiae debitis veritatis maxime deserunt laboriosam odit
                necessitatibus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laborum beatae nihil molestias animi
                distinctio molestiae cumque.
              </p>
            </div>
          )}
        </div>

        <div className="-mr-[8.6%] justify-self-end rounded-b-[0.938rem] bg-dark-grain-pattern bg-cover bg-no-repeat pb-[1.313rem] pl-4 pr-[8.6%] pt-[1.097rem] bg-blend-multiply md:rounded-b-[1.25rem] md:py-6 md:pl-7 lg:-mt-10 lg:rounded-b-[2.5rem] lg:pb-[2.938rem] lg:pl-10 lg:pt-[6.125rem]">
          <Image
            src={"/images/hrl-logo.png"}
            width={260}
            height={114}
            alt="hrl-logo"
            className="max-w-[9.813rem] lg:w-full lg:max-w-[16.25rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default AssociateGroup;
