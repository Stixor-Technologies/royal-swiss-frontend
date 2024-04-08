import React, { FC, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import LinkButton from "@/components/shared/link-button/link-button";
import { BASE_URL } from "@/utils/constants";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SplitText } from "gsap/all";

type HeroSectionProps = {
  bannerImages: any[];
};

const HeroSection: FC<HeroSectionProps> = ({ bannerImages }) => {
  gsap.registerPlugin(SplitText);
  const heroSection = useRef<HTMLElement | null>(null);
  const imagesContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });

      gsap.set("#path", { visibility: "visible" });
      gsap.set("#path", { drawSVG: "0" });

      const childSplit = new SplitText("[data-hero-heading]", {
        linesClass: "split-child",
      });

      const parentHeading = new SplitText("[data-hero-heading]", {
        linesClass: "split-parent",
      });

      const splitTagLine = new SplitText("[data-hero-tagline]", {
        linesClass: "split-child",
      });

      const parentTagLine = new SplitText("[data-hero-tagline]", {
        linesClass: "split-parent",
      });

      const splitP = new SplitText("[data-hero-p]", {
        linesClass: "child-parent",
      });

      const parentP = new SplitText("[data-hero-p]", {
        linesClass: "split-parent",
      });

      tl.to("#path", { duration: 2, drawSVG: true, ease: "power2.inOut" })

        .from(
          childSplit.lines,
          {
            duration: 1,
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
          },
          "<0.1",
        )
        .to(
          imagesContainer.current,
          {
            transformOrigin: "bottom left",
            scale: 1,
            ease: "expo.inOut",
            duration: 0.6,
          },
          "<0.1",
        )
        .to(
          "[data-hero-overlay]",
          {
            height: 0,
            ease: "expo.inOut",
            duration: 0.6,
          },
          "<0.4",
        )
        .from(
          splitTagLine.lines,
          {
            duration: 1.5,
            opacity: 0,
            y: "150%",
            transformOrigin: "0% 50% -50",
            ease: "expo",
            stagger: 0.1,
          },
          "<",
        )
        .from(
          splitP.lines,
          {
            duration: 1.5,
            opacity: 0,
            y: "150%",
            ease: "expo",
            stagger: 0.1,
          },
          "<0.5",
        )
        .from(
          "[data-link-button]",
          {
            opacity: 0,
            yPercent: 100,

            duration: 0.8,
          },
          "<0.1",
        );
    },
    { scope: heroSection, dependencies: [bannerImages] },
  );

  return (
    <section ref={heroSection} className=" z-10">
      <div className="container relative z-10 mt-8 flex flex-col lg:flex-row lg:gap-[3.75rem]">
        <div className="absolute inset-0 -z-[10] hidden flex-col justify-center lg:flex">
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

        <div className="lg:w-[49.2%]">
          <h1
            data-hero-heading
            className="overflow-hidden font-righteous text-4xl leading-[2.794rem] text-indigo-blue md:leading-[6.848rem] lg:text-[5.514rem]"
          >
            Royal Swiss Housing
          </h1>
          <h2
            data-hero-tagline
            className="overflow-hidden font-righteous text-[2rem] leading-[2.483rem] text-[#B69832] lg:text-[3.498rem] lg:leading-[4.344rem]"
          >
            A Sustainable Living
          </h2>
          <p
            data-hero-p
            className="mb-5 mt-6 overflow-hidden font-light text-rich-black md:leading-[1.8rem] lg:mb-9 lg:text-2xl"
          >
            Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique
            dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed
            tellus turpis.
          </p>

          <div data-link-button className="">
            <LinkButton as={"button"} text="Get Quote Now" variant="rounded" />
          </div>
        </div>

        <div
          ref={imagesContainer}
          className=" relative origin-bottom-left scale-x-[0.8] scale-y-0 overflow-hidden rounded-[1.25rem] lg:w-[50.8%] lg:rounded-[2.5rem]"
        >
          <Swiper
            grabCursor={true}
            loop={true}
            modules={[Pagination]}
            shortSwipes={true}
            longSwipesMs={10000}
            className="banner-swiper carousel-slider aspect-[690/514] h-full "
          >
            {bannerImages?.map((bannerImage, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={`${BASE_URL}${bannerImage?.attributes?.url}`}
                    alt=""
                    className="object-cover transition-all duration-500 ease-in-out hover:scale-110"
                    fill
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div
            data-hero-overlay
            className=" absolute inset-0 z-10 origin-top bg-indigo-blue"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
