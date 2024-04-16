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

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const body = document.querySelector("body");
      const projectContainer: HTMLDivElement | null = document.querySelector(
        ".services-container",
      );

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
                    console.log("onLe");
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

  return (
    <>
      {services?.length > 0 ? (
        <section
          ref={homeServicesSection}
          className="mt-[145px] bg-dark-grain-pattern bg-cover bg-no-repeat bg-blend-multiply"
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

          <div className="container relative  flex min-h-screen flex-col">
            <div className="flex flex-col justify-between gap-3 py-7 md:flex-row md:py-[6.5rem] lg:gap-20">
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

            <div className="services-container relative z-20 flex flex-1 flex-col justify-evenly  gap-[clamp(1rem,4vw,5.563rem)]  pb-[0.875rem] md:pb-[5.5rem] lg:pt-6">
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
                          service?.attributes?.backgroundImage?.data?.attributes
                            ?.url,
                        );

                        gsap.to(document.querySelector(".custom-bg-element"), {
                          opacity: 1,
                        });

                        gsap.to(itemRef.current[index], {
                          opacity: 1,
                        });

                        gsap.to(
                          itemRef.current[index].querySelector(".detail-link"),
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
                      href={"#"}
                      key={index}
                      className="detail-link flex translate-y-5 items-center justify-between rounded-full border-[1px] border-white opacity-0 md:gap-4 md:px-[1.875rem] md:py-2"
                    >
                      <p className="text-white md:text-[1.606rem] md:leading-[1.927rem]">
                        Detail
                      </p>

                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" size-[1.188rem]"
                      >
                        <path
                          d="M0.925198 19.9252C0.331601 20.5188 0.331601 21.4812 0.925198 22.0748C1.51879 22.6684 2.48121 22.6684 3.0748 22.0748L0.925198 19.9252ZM22.52 2C22.52 1.16053 21.8395 0.48 21 0.48H7.32C6.48053 0.48 5.8 1.16053 5.8 2C5.8 2.83947 6.48053 3.52 7.32 3.52H19.48V15.68C19.48 16.5195 20.1605 17.2 21 17.2C21.8395 17.2 22.52 16.5195 22.52 15.68V2ZM3.0748 22.0748L22.0748 3.0748L19.9252 0.925198L0.925198 19.9252L3.0748 22.0748Z"
                          fill="#EADDA8"
                        />
                      </svg>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default HomePageServices;
