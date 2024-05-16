import React, { FC, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin, SplitText, ScrollToPlugin } from "gsap/all";
import LinkButton from "@/components/shared/link-button/link-button";
import { BASE_URL } from "@/utils/constants";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "@/components/shared/spinner/spinner";
import "swiper/css/effect-fade";

type HeroSectionProps = {
  bannerImages: any[];
  isLoading: boolean;
};

const HeroSection: FC<HeroSectionProps> = ({ bannerImages, isLoading }) => {
  gsap.registerPlugin(SplitText, DrawSVGPlugin, ScrollToPlugin);
  const heroSection = useRef<HTMLElement | null>(null);
  const imagesContainer = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const breakPoint = 1024;

      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
          if (context.conditions) {
            const { isDesktop } = context.conditions;

            const childSplit = new SplitText("[data-hero-heading]", {
              linesClass: "split-child",
            });

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const parentHeading = new SplitText("[data-hero-heading]", {
              linesClass: "split-parent",
            });

            const splitTagLine = new SplitText("[data-hero-tagline]", {
              linesClass: "split-child",
            });

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const parentTagLine = new SplitText("[data-hero-tagline]", {
              linesClass: "split-parent",
            });

            const splitP = new SplitText("[data-hero-p]", {
              linesClass: "split-child",
            });

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const parentP = new SplitText("[data-hero-p]", {
              linesClass: "split-parent",
            });

            if (isDesktop) {
              gsap.set("#path", { visibility: "visible" });
              gsap.set("#path", { drawSVG: "0" });
              const tl = gsap.timeline({ delay: 1 });

              tl.to("#path", {
                duration: 2,
                drawSVG: true,
                ease: "power2.inOut",
              })

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
                    yPercent: 50,

                    duration: 0.8,
                  },
                  "<0.1",
                );
            } else {
              const tlMobile = gsap.timeline({ delay: 0.1 });

              tlMobile
                .from(childSplit.lines, {
                  duration: 1,
                  yPercent: 100,
                  opacity: 0,
                  stagger: 0.1,
                })

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
                  "<0.5",
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
                  "<0.1",
                )
                .from(
                  "[data-link-button]",
                  {
                    opacity: 0,
                    yPercent: 50,

                    duration: 0.8,
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
                );
            }
          }
        },
      );
    },
    { scope: heroSection, dependencies: [bannerImages] },
  );

  const scrollToSection = contextSafe((targetSection: string) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: targetSection,
      ease: "power2",
    });
  });

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex min-h-[70vh]">
            <Spinner />
          </div>
        </>
      ) : bannerImages?.length > 0 ? (
        <section ref={heroSection} className="relative z-10">
          <div className="container">
            <div className="absolute inset-0 -top-56 -z-[10] mx-auto hidden max-w-[120rem] flex-col justify-center lg:top-0 xs:!flex">
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

            <div className="absolute left-0 right-0 top-24 -z-10 block overflow-hidden xs:hidden">
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

            <div className="mx-auto flex max-w-[40rem] flex-col gap-10 lg:max-w-none lg:flex-row lg:gap-[3.75rem]">
              <div className="lg:w-[46.2%]">
                <h1
                  data-hero-heading
                  className="overflow-hidden font-righteous text-4xl leading-[2.794rem] text-indigo-blue lg:text-6xl lg:leading-tight xl:text-[5.514rem] xl:leading-[6.848rem]"
                >
                  Royal Swiss Housing
                </h1>
                <h2
                  data-hero-tagline
                  className="overflow-hidden font-righteous text-[2rem] leading-[2.483rem] text-[#B69832] lg:text-4xl lg:leading-tight xl:text-[3.498rem] xl:leading-[4.344rem]"
                >
                  A Sustainable Living
                </h2>
                <p
                  data-hero-p
                  className="mb-5 mt-6 overflow-hidden text-[0.813rem] font-light leading-[1.056rem] text-rich-black lg:mb-6 lg:text-base lg:leading-tight xl:mb-9 xl:text-2xl xl:leading-[1.8rem]"
                >
                  Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique
                  dignissim fermentum volutpat sed aliquet et. Ipsum sit risus
                  sed tellus turpis.
                </p>

                <div data-link-button className="">
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

              <div
                ref={imagesContainer}
                className=" relative origin-bottom-left scale-x-[0.8] scale-y-0 overflow-hidden rounded-[1.25rem] lg:w-[53.8%] lg:rounded-[2.5rem]"
              >
                <Swiper
                  loop={true}
                  effect={"fade"}
                  modules={[Pagination, EffectFade, Autoplay]}
                  speed={1000}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
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
          </div>
        </section>
      ) : null}
    </>
  );
};

export default HeroSection;
