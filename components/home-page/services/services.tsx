import React, { FC, useEffect, useRef, useState } from "react";
import { ProfessionalServices } from "@/utils/types/types";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { BASE_URL } from "@/utils/constants";
import Link from "next/link";

type ServicesProps = {
  services: ProfessionalServices[];
};

const HomePageServices: FC<ServicesProps> = ({ services }) => {
  const homeServicesSection = useRef<HTMLElement | null>(null);
  const root = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement[]>([]);
  const [service, setService] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState<number>(0);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        pin: true,
        scrub: true,
        endTrigger: document.querySelector(".gallerySection"),
      });

      const servicesItem = gsap.utils.toArray(".service");

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px) and (max-width: 1023px)",
        },
        (context) => {
          if (context.conditions) {
            const { isMobile } = context.conditions;
            servicesItem?.forEach((service, index) => {
              if (service instanceof HTMLElement) {
                gsap.timeline({
                  scrollTrigger: {
                    trigger: service,
                    start: "top 50%",
                    end: `+=${
                      service.offsetHeight +
                      window.innerWidth * (isMobile ? 0.22 : 0.1)
                    } 50%`,
                    onEnter: () => {
                      setService(
                        services[index]?.attributes?.backgroundImage?.data
                          ?.attributes?.url,
                      );
                      gsap.to(document.querySelector(".custom-bg-element"), {
                        opacity: 1,
                      });
                      gsap.to(itemRef.current[index], {
                        opacity: 1,
                      });
                    },
                    onEnterBack: () => {
                      if (index === services.length - 1) {
                        gsap.to(itemRef.current[index], {
                          opacity: 1,
                        });
                      }
                    },
                    onLeaveBack: () => {
                      if (index > 0) {
                        setService(
                          services[index - 1]?.attributes?.backgroundImage?.data
                            ?.attributes?.url,
                        );
                        gsap.to(itemRef.current[index - 1], { opacity: 1 });
                      }
                      gsap.to(itemRef.current[index], {
                        opacity: 0.4,
                      });
                    },
                    onLeave: () => {
                      gsap.to(itemRef.current[index], {
                        opacity: 0.4,
                      });
                    },
                  },
                });
              }
            });

            const projectContainer = document.querySelector(
              ".services-container",
            );

            if (projectContainer instanceof HTMLElement) {
              gsap.timeline({
                scrollTrigger: {
                  trigger: projectContainer,
                  start: "top 50%",
                  end: `+=${
                    projectContainer.offsetHeight +
                    window.innerWidth * (isMobile ? 0.22 : 0.1)
                  } 50%`,

                  onEnterBack: () => {
                    gsap.to(document.querySelector(".custom-bg-element"), {
                      opacity: 1,
                    });
                  },
                  onLeave: () => {
                    gsap.to(document.querySelector(".custom-bg-element"), {
                      opacity: 0,
                    });
                  },
                  onLeaveBack: () => {
                    gsap.to(document.querySelector(".custom-bg-element"), {
                      opacity: 0,
                    });
                  },
                },
              });
            }
          }
        },
      );
    },
    { scope: homeServicesSection, dependencies: [services] },
  );

  useEffect(() => {
    if (services?.length > 0) {
      setService(
        services[0]?.attributes?.backgroundImage?.data?.attributes?.url,
      );
    }
  }, [services]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {services?.length > 0 ? (
        <section
          ref={homeServicesSection}
          className="mt-10 bg-dark-grain-pattern bg-cover bg-no-repeat bg-blend-multiply lg:mt-[11.375rem]"
        >
          {/* Sticky background */}
          <div className="pointer-events-none">
            <div
              ref={root}
              className="custom-bg-element pointer-events-none absolute top-0 z-10 h-screen w-screen opacity-0"
            >
              <div className="bg-no-rep eat absolute z-20 h-screen w-screen bg-dark-grain-pattern bg-cover bg-no-repeat opacity-[100%] bg-blend-multiply">
                {service && (
                  <Image
                    fill
                    src={`${BASE_URL}${service}`}
                    alt=""
                    className="object-cover opacity-20"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="container relative flex min-h-screen flex-col gap-14 sm:gap-0">
            <div className="flex flex-col justify-between gap-3 py-7 sm:py-[6.5rem] md:flex-row lg:gap-20">
              <h2 className="font-righteous text-lg leading-[1.35rem] text-yellow md:min-w-[17.813rem] md:text-xl md:leading-tight lg:text-5xl lg:leading-[3.6rem]">
                Our Services
              </h2>
              <p className="w-full max-w-[51.063rem] text-xs leading-[0.975rem] text-white md:text-sm md:leading-tight lg:text-[1.375rem] lg:leading-[1.829rem]">
                It brings a unique mix of residential, commercial, religious,
                cultural, and entertainment marvels together in harmony with
                each other. In addition, we boast a distinguishing array of
                features
              </p>
            </div>

            <div className=" z-20 pb-[0.875rem]  md:pb-[5.5rem] lg:pt-6">
              <div className="flex gap-2 sm:gap-6">
                <svg
                  width="26"
                  height="529"
                  viewBox="0 0 26 529"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2 mt-2.5 sm:mb-3.5 sm:mt-2.5 md:mb-5 md:mt-4"
                >
                  <path
                    d="M25.5 1H15C7.26801 1 1 7.26801 1 15V514C1 521.732 7.26801 528 15 528H25.5"
                    stroke="#EADDA8"
                    stroke-width="2"
                  />
                </svg>

                <div className="services-container relative flex flex-1 flex-col justify-between gap-[clamp(1rem,4vw,5.563rem)] ">
                  {services?.map((service, index) => {
                    return (
                      <div
                        ref={(el) => {
                          if (el) {
                            itemRef.current[index] = el;
                          }
                        }}
                        key={index}
                        className="service flex w-full items-start justify-between opacity-40"
                      >
                        <div
                          className="cursor-pointer"
                          onMouseEnter={() => {
                            setService(
                              service?.attributes?.backgroundImage?.data
                                ?.attributes?.url,
                            );

                            gsap.to(
                              document.querySelector(".custom-bg-element"),
                              {
                                opacity: 1,
                              },
                            );

                            gsap.to(itemRef.current[index], {
                              opacity: 1,
                            });

                            gsap.to(
                              itemRef.current[index].querySelector(
                                ".detail-link",
                              ),
                              {
                                opacity: 1,
                                y: 0,
                              },
                            );
                          }}
                          onMouseLeave={() => {
                            // determine if mouse is over project container element
                            const projectContainer = document.querySelector(
                              ".services-container",
                            );
                            if (projectContainer instanceof HTMLElement) {
                              if (!projectContainer.matches(":hover")) {
                                gsap.to(
                                  document.querySelector(".custom-bg-element"),
                                  {
                                    opacity: 0,
                                  },
                                );

                                gsap.to(
                                  itemRef.current[index].querySelector(
                                    ".detail-link",
                                  ),
                                  {
                                    opacity: 0,
                                    y: 20,
                                  },
                                );
                              }

                              gsap.to(itemRef.current[index], {
                                opacity: 0.4,
                              });
                            }
                          }}
                        >
                          <h1 className="text-[clamp(1rem,2.8vw,3.8rem)] leading-[clamp(1.2rem,3.4vw,4.3rem)]">
                            {service?.attributes?.name}
                          </h1>
                        </div>

                        <Link
                          href={"/services"}
                          key={index}
                          className="detail-link flex translate-y-5 items-center justify-between gap-2 rounded-full border-[1px] border-white px-[0.559rem] py-[0.149rem] opacity-0 sm:px-4 md:py-0.5 lg:gap-4 lg:px-[1.875rem] lg:py-2"
                        >
                          {windowSize >= 640 ? (
                            <>
                              <p className="text-white md:text-lg lg:text-[1.606rem] lg:leading-[1.927rem]">
                                Detail
                              </p>

                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className=" size-3 md:size-3.5 lg:size-[1.188rem]"
                              >
                                <path
                                  d="M0.925198 19.9252C0.331601 20.5188 0.331601 21.4812 0.925198 22.0748C1.51879 22.6684 2.48121 22.6684 3.0748 22.0748L0.925198 19.9252ZM22.52 2C22.52 1.16053 21.8395 0.48 21 0.48H7.32C6.48053 0.48 5.8 1.16053 5.8 2C5.8 2.83947 6.48053 3.52 7.32 3.52H19.48V15.68C19.48 16.5195 20.1605 17.2 21 17.2C21.8395 17.2 22.52 16.5195 22.52 15.68V2ZM3.0748 22.0748L22.0748 3.0748L19.9252 0.925198L0.925198 19.9252L3.0748 22.0748Z"
                                  fill="#EADDA8"
                                />
                              </svg>
                            </>
                          ) : (
                            <>
                              <svg
                                width="11"
                                height="9"
                                viewBox="0 0 11 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.5435 4.85355C10.7388 4.65829 10.7388 4.34171 10.5435 4.14645L7.36151 0.964466C7.16625 0.769204 6.84967 0.769204 6.65441 0.964466C6.45915 1.15973 6.45915 1.47631 6.65441 1.67157L9.48283 4.5L6.65441 7.32843C6.45915 7.52369 6.45915 7.84027 6.65441 8.03553C6.84967 8.2308 7.16625 8.2308 7.36151 8.03553L10.5435 4.85355ZM0.189941 5H10.1899V4H0.189941V5Z"
                                  fill="white"
                                />
                              </svg>
                            </>
                          )}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default HomePageServices;
