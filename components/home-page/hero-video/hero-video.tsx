import React, { useRef, useState } from "react";
import Image from "next/image";
import LinkButton from "@/components/shared/link-button/link-button";
import PlayIcon from "../../../public/icons/play-icon.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import VidePlayer from "@/components/about-us/video-card/video-player";

const HeroVideo = () => {
  gsap.registerPlugin(ScrollTrigger);

  const thumbnailContainer = useRef<HTMLDivElement | null>(null);
  const thumbnailContainerSmall = useRef<HTMLDivElement | null>(null);
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const { contextSafe } = useGSAP();

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
    <section className="">
      <div className="container">
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
              />

              {/* <div className="col-span-full col-start-2 flex flex-col gap-8 lg:gap-16 xl:gap-32">
                <h2 className="heading-84-font">
                  Royal Swiss Housing The Icon
                </h2>
              </div>
              <div className="col-span-5 col-start-3 flex flex-col gap-16 lg:col-span-4 lg:col-start-3 lg:gap-32 xl:gap-64 2xl:col-span-3 2xl:col-start-3">
                <div className="prose">
                  <p>
                    It brings to light our vision to transform Multan’s living
                    standards to the best in the world.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;