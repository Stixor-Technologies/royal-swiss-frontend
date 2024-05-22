"use client";
import React, { FC, useRef, useState } from "react";
import { Images } from "@/utils/types/types";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { Thumbs, FreeMode } from "swiper/modules";
import { BASE_URL } from "@/utils/constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

type GalleryProps = {
  galleryImages: Images[];
};

const Gallery: FC<GalleryProps> = ({ galleryImages }) => {
  gsap.registerPlugin(ScrollTrigger);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const gallerySection = useRef<HTMLElement | null>(null);
  const galleryContianer = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to("[data-gallery-heading]", {
        opacity: 1,
        transform: "translateY(0%)",
      })
        .to(
          "[data-gallery-description]",
          {
            opacity: 1,
            duration: 1,
          },
          "<0.3",
        )
        .to(
          galleryContianer.current,
          {
            opacity: 1,
            duration: 1,
          },
          "<0.2",
        );

      ScrollTrigger.create({
        trigger: gallerySection.current,
        start: "top 80%",
        animation: tl,
      });
    },
    { scope: gallerySection, dependencies: [galleryImages] },
  );

  return (
    <>
      {galleryImages?.length > 0 ? (
        <section
          ref={gallerySection}
          className="gallerySection container mt-10 md:mt-[6.875rem]"
        >
          <div className="mx-auto w-full max-w-[70.313rem] text-center">
            <h2
              data-gallery-heading
              className="mb-3 translate-y-full font-righteous text-4xl leading-[2.7rem] text-indigo-blue opacity-0 md:mb-5 md:text-[3.5rem] md:leading-[4.5rem]"
            >
              Our Gallery
            </h2>

            <p
              data-gallery-description
              className="text-[0.813rem] font-light leading-[1.056rem] text-gray opacity-0 md:text-2xl md:leading-[1.995rem]"
            >
              Get inspired by the elegance of our interiors, the serenity of our
              outdoor spaces, and the innovative features that make our
              properties truly exceptional.
            </p>
          </div>

          <div
            ref={galleryContianer}
            className="mt-4 opacity-0 md:mt-[2.875rem]"
          >
            <Swiper
              centeredSlides={true}
              initialSlide={0}
              pagination={false}
              thumbs={{
                swiper: thumbsSwiper,
              }}
              shortSwipes={true}
              longSwipesMs={10000}
              speed={700}
              className="gallery-swiper aspect-[1347/632] h-auto w-full rounded-[0.625rem] lg:rounded-[2rem]"
              modules={[Thumbs, FreeMode]}
            >
              {galleryImages?.map((imageData, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={`${BASE_URL}${imageData?.attributes?.url}`}
                      alt="Carousel Image"
                      fill
                      className="h-full w-full object-cover"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Swiper
              modules={[Thumbs, FreeMode]}
              watchSlidesProgress
              slidesPerView="auto"
              onSwiper={setThumbsSwiper}
              className="thumb-swiper mt-[0.438rem] md:mt-[1.438rem]"
            >
              {galleryImages?.map((imageData, index) => (
                <SwiperSlide
                  key={index}
                  className={
                    "mr-[0.188rem] aspect-[237/128] !w-[4.438rem] cursor-pointer sm:!w-[8.125rem] md:mr-[0.625rem] md:!w-[11rem] lg:!w-[14.813rem]"
                  }
                >
                  <Image
                    src={`${BASE_URL}${imageData?.attributes?.url}`}
                    alt="Thumb Item"
                    fill
                    className="h-full w-full rounded-[0.188rem] object-cover lg:rounded-[0.625rem]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Gallery;
