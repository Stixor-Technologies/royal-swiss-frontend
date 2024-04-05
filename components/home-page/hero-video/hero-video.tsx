import React, { useRef } from "react";
import Image from "next/image";
import LinkButton from "@/components/shared/link-button/link-button";
import PlayIcon from "../../../public/icons/play-icon.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const HeroVideo = () => {
  gsap.registerPlugin(ScrollTrigger);

  const thumbnailContainer = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP();

  const playVideo = contextSafe(() => {
    console.log("Play Video");
  });

  return (
    <section className="mt-48">
      <div className="container">
        <div className="relative flex flex-col gap-32">
          <div className="round pointer-events-none relative z-10 aspect-[3/2] overflow-hidden lg:aspect-[2/1]"></div>

          <div
            ref={thumbnailContainer}
            className="group absolute inset-y-0 left-0 z-20 hidden w-[47%] cursor-pointer lg:block lg:pr-[1.875rem] 2xl:w-6/12"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
              <picture>
                <source
                  srcset="https://blindsquirrel-staging-media.sfo3.cdn.digitaloceanspaces.com/3cb0a52cdc9d144b418c769cfcbc2d68.webp 2000w, https://blindsquirrel-staging-media.sfo3.cdn.digitaloceanspaces.com/bed02bd9c1815350cd98abb2213ebb65.webp 1600w, https://blindsquirrel-staging-media.sfo3.cdn.digitaloceanspaces.com/f0692c1f93881242d01fba56c319bb24.webp 1000w, https://blindsquirrel-staging-media.sfo3.cdn.digitaloceanspaces.com/8cf186315050f29f88d4d513edc95a07.webp 750w"
                  type="image/webp"
                  sizes="100vw"
                />

                <img
                  loading="true"
                  alt=""
                  src="https://blindsquirrel-staging-media.sfo3.cdn.digitaloceanspaces.com/8cf186315050f29f88d4d513edc95a07.png"
                  srcset="https://blindsquirrel-staging-media.sfo3.cdn.digitaloceanspaces.com/3cb0a52cdc9d144b418c769cfcbc2d68.png 2000w, https://blindsquirrel-staging-media.sfo3.cdn.digitaloceanspaces.com/bed02bd9c1815350cd98abb2213ebb65.png 1600w, https://blindsquirrel-staging-media.sfo3.cdn.digitaloceanspaces.com/f0692c1f93881242d01fba56c319bb24.png 1000w, https://blindsquirrel-staging-media.sfo3.cdn.digitaloceanspaces.com/8cf186315050f29f88d4d513edc95a07.png 750w"
                  width="500"
                  height="281"
                  class="aspect-[2/1] h-full w-full origin-center object-cover duration-500 group-hover:scale-105"
                  sizes="100vw"
                />
              </picture>
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={playVideo}
                  className=" flex size-24 items-center justify-center rounded-full bg-[rgba(36,42,45,0.55)]"
                >
                  <Image src={PlayIcon} alt="" className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="inset-y-0 right-0 order-first flex flex-col justify-center text-black lg:absolute lg:w-[53%] lg:pl-[1.875rem] 2xl:w-6/12">
            <div className="mr-auto flex flex-col items-center lg:max-w-[597px]">
              <h2 className="text-center font-righteous text-4xl text-[3.5rem] leading-[2.7rem] text-indigo-blue md:leading-[4.2rem]">
                Royal Swiss Housing The Icon
              </h2>

              <p className="text-center font-light text-gray md:my-6 md:text-[1.375rem] md:leading-[1.829rem] ">
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
