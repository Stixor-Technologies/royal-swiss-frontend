"use client";
import React from "react";
import Image from "next/image";
import Gulf from "../../../public/images/dealers/insaf.png";
import Route1 from "../../../public/images/dealers/route1.png";
import Mursaleen from "../../../public/images/dealers/mursaleen.png";
import RealMate from "../../../public/images/dealers/real-mate.png";
import GulfGreen from "../../../public/images/dealers/gulf-green.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";

const Dealers = () => {
  const dealers = [
    { path: Gulf, style: "" },
    { path: Route1, style: "" },
    { path: Mursaleen, style: "" },
    { path: RealMate, style: "" },
    { path: GulfGreen, style: "" },
    { path: Gulf, style: "" },
    { path: Route1, style: "" },
    { path: Mursaleen, style: "" },
    { path: RealMate, style: "" },
    { path: GulfGreen, style: "" },
    { path: Gulf, style: "" },
    { path: Route1, style: "" },
    { path: Mursaleen, style: "" },
    { path: RealMate, style: "" },
    { path: GulfGreen, style: "" },
    { path: Gulf, style: "" },
    { path: Route1, style: "" },
    { path: Mursaleen, style: "" },
    { path: RealMate, style: "" },
    { path: GulfGreen, style: "" },
    { path: Gulf, style: "" },
    { path: Route1, style: "" },
    { path: Mursaleen, style: "" },
    { path: RealMate, style: "" },
    { path: GulfGreen, style: "" },
    // { path: Gulf, style: "" },
    // { path: Route1, style: "" },
    // { path: Mursaleen, style: "" },
    // { path: RealMate, style: "" },
    // { path: GulfGreen, style: "" },
  ];

  return (
    <div className="container">
      <div className="mx-auto flex justify-between gap-[2.5rem] lg:w-[92.78%]">
        <h2 className="font-righteous text-indigo-blue w-full max-w-[24.125rem] text-[3.75rem] leading-[4.5rem]">
          Authorized Dealers
        </h2>

        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper !ml-auto !mr-0 max-w-[52rem] cursor-pointer"
        >
          {dealers.map((dealerImage, index) => (
            <SwiperSlide className="relative mr-[4.087rem] !flex !w-[6.438rem] items-center">
              <Image
                key={index}
                src={dealerImage.path}
                alt=""
                className="absolute w-full min-w-[3.75rem]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Dealers;
