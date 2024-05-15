import React, { useRef, useState } from "react";
import Image from "next/image";
import LinkButton from "@/components/shared/link-button/link-button";
import PlayIcon from "../../../public/icons/play-icon.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin, ScrollTrigger } from "gsap/all";
import VidePlayer from "@/components/about-us/video-card/video-player";

const HeroVideo = () => {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

  const heroVideoContainer = useRef<HTMLElement | null>(null);
  const thumbnailContainer = useRef<HTMLDivElement | null>(null);
  const thumbnailContainerSmall = useRef<HTMLDivElement | null>(null);
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const { contextSafe } = useGSAP(
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
                trigger: heroVideoContainer.current,
                start: "top 35%",
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
    { scope: heroVideoContainer },
  );

  const playVideo = contextSafe(() => {
    const breakPoint = 1024;

    if (window?.innerWidth >= breakPoint) {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowVideo(true);
          gsap.to(thumbnailContainer.current, {
            display: "none",
            duration: 0.05,
          });
        },
      });

      tl.to("[data-play-icon]", {
        scale: 0,
        duration: 0.4,
        ease: "expo.inOut",
      }).to(
        thumbnailContainer.current,
        {
          paddingRight: 0,
          width: "100%",
          duration: 0.7,
        },
        "+=0.1",
      );
    } else {
      const tlMobile = gsap.timeline({
        onComplete: () => {
          setShowVideo(true);
          gsap.to(thumbnailContainerSmall.current, {
            display: "none",
            duration: 0.05,
          });
        },
      });

      tlMobile.to("[data-play-icon]", {
        scale: 0,
        duration: 0.4,
        ease: "expo.inOut",
      });
    }
  });

  const scrollToSection = contextSafe((targetSection: string) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: targetSection,
      ease: "power2",
    });
  });

  const closeVideoPlayer = contextSafe(() => {
    setShowVideo(false);

    const breakPoint = 1024;

    if (window?.innerWidth >= breakPoint) {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(thumbnailContainer?.current, {
            clearProps: "display",
          });
        },
      });

      tl.to(thumbnailContainer.current, {
        display: "block",
      })
        .to(thumbnailContainer.current, {
          width: "47%",
          paddingRight: "1.875rem",
          duration: 0.7,
        })
        .to(
          "[data-play-icon]",
          {
            scale: 1,
            duration: 0.4,
            ease: "expo.inOut",
          },
          "+=0.1",
        );
    } else {
      const tlMobile = gsap.timeline({
        onComplete: () => {
          gsap.set(thumbnailContainerSmall?.current, {
            clearProps: "display",
          });
        },
      });
      tlMobile
        .to(thumbnailContainerSmall.current, {
          display: "block",
        })
        .to(
          "[data-play-icon]",
          {
            scale: 1,
            duration: 0.4,
            ease: "expo.inOut",
          },
          "<",
        );
    }
  });

  return (
    <section
      ref={heroVideoContainer}
      className="relative z-10 mt-[4.438rem]  lg:-mt-28"
    >
      <div className="absolute -inset-10 -right-80 -z-[10] hidden flex-col justify-center xs:flex">
        <svg
          height="1095"
          viewBox="0 0 1900 695"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            id="path"
            opacity="0.5"
            d="M3 32.1028C3 32.1028 251.929 -41.1926 407.824 67.8463C653.479 239.659 564.251 599.493 782.482 674.182C983.155 742.854 1184.99 518.024 1397.4 525.542C1548.66 530.894 1648.6 615.987 1648.6 615.987"
            stroke="#EADDA8"
            stroke-width="145px"
            stroke-miterlimit="10"
          />
        </svg>
      </div>

      <div className="absolute left-0 right-0 top-40 -z-10 block overflow-hidden xs:hidden">
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

      <div className="container relative z-10 lg:pb-[4.5rem] lg:pt-[9.688rem]">
        <div className="relative mx-auto flex max-w-[40rem] flex-col gap-10 lg:max-w-none">
          <div
            className={`${!showVideo && "pointer-events-none"} relative z-10 aspect-[400/406] overflow-hidden lg:!aspect-[2/0.963] xs:aspect-[3/2]`}
          >
            {showVideo && (
              <div
                data-container-video
                className="z-10 h-full overflow-hidden rounded-[0.938rem] bg-black md:rounded-[1.25rem] lg:rounded-[2.5rem]"
              >
                <VidePlayer isAutoPlay />
                <button
                  onClick={closeVideoPlayer}
                  className="pointer-events-auto absolute right-4 top-4 z-10 cursor-pointer transition-transform duration-500 hover:rotate-90 hover:scale-110 md:right-10 md:top-10"
                >
                  <div className="absolute -inset-2 rounded-full bg-black opacity-30 md:-inset-4" />
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 rotate-45"
                  >
                    <line
                      x1="6.5"
                      x2="6.5"
                      y1="0"
                      y2="13"
                      stroke="white"
                    ></line>
                    <line
                      x1="0"
                      x2="13"
                      y1="6.5"
                      y2="6.5"
                      stroke="white"
                    ></line>
                  </svg>
                </button>
              </div>
            )}
            <div
              data-container-small
              ref={thumbnailContainerSmall}
              className="group pointer-events-auto absolute inset-0 cursor-pointer lg:hidden"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[0.938rem] md:rounded-[1.25rem]">
                <Image
                  src={"/images/sample-image.png"}
                  width="500"
                  height="281"
                  alt=""
                  sizes="100vw"
                  className="aspect-[2/1] h-full w-full origin-center object-cover duration-500 group-hover:scale-105"
                />
                <div
                  data-play-icon
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <button
                    onClick={playVideo}
                    className=" flex size-[3.875rem] items-center justify-center rounded-full bg-[rgba(36,42,45,0.55)]"
                  >
                    <Image
                      src={PlayIcon}
                      alt=""
                      className="ml-1.5 max-w-5 duration-500 group-hover:scale-[0.85]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumnail container for screens greater then 1024 */}
          <div
            ref={thumbnailContainer}
            className="group absolute inset-y-0 left-0 z-20 hidden w-[47%] cursor-pointer lg:block lg:pr-[1.875rem] 2xl:w-6/12"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
              <Image
                src={"/images/sample-image.png"}
                width="500"
                height="281"
                alt=""
                sizes="100vw"
                className="aspect-[2/1] h-full w-full origin-center object-cover duration-500 group-hover:scale-105"
              />

              <div
                data-play-icon
                className="absolute inset-0 flex items-center justify-center"
              >
                <button
                  onClick={playVideo}
                  className="flex size-[5.313rem] items-center justify-center rounded-full bg-[rgba(36,42,45,0.55)] xl:size-[6.25rem]"
                >
                  <Image
                    src={PlayIcon}
                    alt=""
                    className="ml-2 duration-500 group-hover:scale-[0.85]"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Text container */}
          <div className="inset-y-0 right-0 order-first flex flex-col justify-center text-black lg:absolute lg:w-[53%] lg:pl-[1.875rem] 2xl:w-6/12">
            <div className="flex flex-col items-center lg:mr-auto lg:max-w-[597px]">
              <h2 className="text-center font-righteous text-4xl leading-[2.7rem] text-indigo-blue md:text-[3.5rem] md:leading-[4.2rem]">
                Royal Swiss Housing The Icon
              </h2>

              <p className="my-4 text-center font-light text-gray md:my-6 md:text-[1.375rem] md:leading-[1.829rem] ">
                It brings to light our vision to transform Multan’s living
                standards to the best in the world.
              </p>

              <LinkButton
                as={"button"}
                text="Get Quote Now"
                variant="rounded"
                onClick={() => {
                  scrollToSection("#get-in-touch");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
