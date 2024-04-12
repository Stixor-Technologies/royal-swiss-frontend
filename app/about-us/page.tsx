"use client";
import React, { useEffect, useRef } from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import LinkButton from "@/components/shared/link-button/link-button";
import EssentialMetrics from "@/components/about-us/essential-metrics/essential-metrics";
import Image from "next/image";
import About from "../../public/images/about.png";
import AboutSmall from "../../public/images/about-small.png";
import VideoCard from "@/components/about-us/video-card/video-card";
import VideoPlayer from "@/components/about-us/video-card/video-player";
import AdvertisementPolicy from "@/components/shared/advertisement-policy/advertisement-policy";
import SkillSet from "@/components/shared/skill-set/skill-set";
import GetInTouch from "@/components/shared/get-in-touch/get-in-touch";
import Dealers from "@/components/shared/dealers/dealers";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger, DrawSVGPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { animatePageIn } from "@/utils/transition-animation";

const AboutUs = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin);

  const aboutSection = useRef<HTMLElement | null>(null);

  useEffect(() => {
    animatePageIn();
  }, []);

  useGSAP(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth > 768) {
      ScrollSmoother.create({ smooth: 2, smoothTouch: 0 });
    }
  });

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
              const tl = gsap.timeline({ delay: 0.1 });

              tl.fromTo(
                "#path",
                { drawSVG: "100% 100%" },
                { drawSVG: "0% 100% ", duration: 2, ease: "power2.inOut" },
              );
            }
          }
        },
      );
    },
    { scope: aboutSection },
  );

  return (
    <section ref={aboutSection} className="relative z-[1] md:pt-[1.125rem]">
      <div className="absolute -top-16 left-0 right-0 -z-10 mx-auto hidden w-full max-w-[120rem] flex-col justify-center overflow-hidden md:top-14 lg:top-44 xl:top-60 xs:block">
        <svg
          height={590}
          viewBox="0 0 1530 317"
          fill="none"
          className="-ml-[7%] w-[107%]"
        >
          <path
            id="path"
            opacity="0.3"
            d="M1530 23.3203C1473.06 23.3203 1430.9 53.2545 1399.14 83.6472C1383.07 99.0209 1367.74 116.387 1353.25 133.204C1349.65 137.382 1346.11 141.522 1342.58 145.638C1331.43 158.667 1320.48 171.454 1308.66 184.43C1248.71 250.249 1177.48 308.57 1049.47 308.57C904.552 308.57 796.491 242.984 683.771 167.895C676.645 163.148 669.466 158.332 662.226 153.475C559.779 84.7439 445.388 8 302.726 8C217.306 8 143.06 33.5473 91.251 58.0258C65.132 70.3664 44.0802 82.7353 29.3811 92.1476C22.0151 96.8644 16.1966 100.869 12.0852 103.799C10.0281 105.265 8.39421 106.465 7.20312 107.354C6.94806 107.545 6.71318 107.721 6.49878 107.882C6.2125 108.098 5.96252 108.288 5.74951 108.45C5.56319 108.592 5.40506 108.714 5.27539 108.814L5.10229 108.947L5.00061 109.026"
            stroke="#EADDA8"
            stroke-width="120px"
          />
        </svg>
      </div>

      <div className="absolute left-0 right-0 top-32 -z-10 block overflow-hidden xs:hidden">
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

      <div className="container">
        <PageHeader
          heading="About Us"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          forAbout
        />

        <div className="mt-10 flex flex-col items-center gap-10 md:gap-14 lg:mt-[6.438rem] lg:flex-row">
          <div className="w-full max-w-[38.563rem] overflow-hidden rounded-2xl lg:rounded-none">
            <Image
              src={window?.innerWidth >= 1024 ? About : AboutSmall}
              width={617}
              height={543}
              alt=""
            />
          </div>

          <div className="w-full max-w-[42.688rem]">
            <h2
              className="font-righteous text-[3.125rem] leading-[3.88rem] text-indigo-blue lg:text-4xl xl:max-w-[36rem] xl:text-6xl
            xl:leading-[4.5rem]"
            >
              Royal Swiss Housing - The Icon
            </h2>
            <p className="my-4 text-[0.813rem] font-light leading-[1.056rem] text-rich-black md:text-lg md:leading-tight md:text-gray xl:my-6 xl:text-[1.375rem] xl:leading-[1.829rem]">
              Royal Swiss Housing”, along with our National & Global partners
              brings a vast array of features to revolutionize the housing
              standards in Multan. It brings a unique mix of residential,
              commercial, religious, cultural, and entertainment marvels
              together in harmony with each other
            </p>

            <LinkButton as={"button"} text="Get a Quote" variant="corner" />
          </div>
        </div>

        <EssentialMetrics />

        <div className="mb-10 space-y-10 md:mb-24 xl:space-y-8">
          <VideoCard
            title="Our Products"
            description="The project is planned to be soft-launched with 3.5, 5, 7, 10, 20, 40, and 80 Marla plots (Farm House).In addition, a series of Commercial Plots, Luxury Villas, Low and High-Rise Apartments, Farm Houses, Shops, Offices.And an IT Park is projected to be launched."
          >
            <VideoPlayer />
          </VideoCard>

          <VideoCard
            title="Road Map"
            description="The project will be launched in the first half of 2023 with full fervor and enthusiasm. Allocation of plot numbers to files/inventory provided at soft-launch, through the balloting process.Launching new inventory stock at higher rates. Beginning of the infrastructure development of Main Boulevard, Site Office, Masjid, Park, and the First-Residential Sector."
            isYellow
          >
            <VideoPlayer />
          </VideoCard>

          <VideoCard
            title="Project Delivery"
            description="The possession of the first sector will be handed over within 1.5 years, i.e.2025. Limited inventory of commercial plots will be launched in the market. Limited inventory of residential plots will be launched in the market.The project will be sold through the accredited “Sales Department”, as well as our “Premium Sales Partners”."
            isWhite
          >
            <VideoPlayer />
          </VideoCard>
        </div>
      </div>

      <AdvertisementPolicy />

      <div className="mt-10 md:mt-[6.625rem] md:pb-[3.25rem]">
        <SkillSet />
      </div>

      <div className="-mt-14 lg:mt-0">
        <GetInTouch />
      </div>

      <Dealers />
    </section>
  );
};

export default AboutUs;
