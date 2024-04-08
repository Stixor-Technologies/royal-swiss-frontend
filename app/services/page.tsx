"use client";
import React, { useEffect, useRef } from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import ServicesList from "@/components/services/services-list/services-list";
import AdvertisementPolicy from "@/components/shared/advertisement-policy/advertisement-policy";
import GetInTouch from "@/components/shared/get-in-touch/get-in-touch";
import Dealers from "@/components/shared/dealers/dealers";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger, DrawSVGPlugin } from "gsap/all";
import { animatePageIn } from "@/utils/transition-animation";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin);

  const serviceSection = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth > 768) {
      ScrollSmoother.create({ smooth: 2, smoothTouch: 0 });
    }
  }, []);

  useEffect(() => {
    animatePageIn();
  }, []);

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
    { scope: serviceSection },
  );

  return (
    <section ref={serviceSection} className="relative z-[1] md:pt-[1.125rem]">
      <div className="absolute -top-16 left-0 right-0 -z-10 mx-auto hidden w-full max-w-[120rem] flex-col justify-center overflow-hidden  lg:top-4 xl:top-2.5 2xl:!top-20 xs:block">
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
            stroke-width="120"
          />
        </svg>
      </div>

      <div className="absolute left-0 right-0 top-44 -z-10 block overflow-hidden xs:hidden">
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
          heading="Professional Services"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          description="Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed tellus turpis."
        />

        <ServicesList />
      </div>
      <AdvertisementPolicy />

      <GetInTouch />
      <Dealers />
    </section>
  );
};

export default Services;
