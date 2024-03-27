"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAuthorizedDealers } from "@/utils/api-calls";
import { BASE_URL } from "@/utils/constants";

import Gulf from "../../../public/images/dealers/insaf.png";
import Route1 from "../../../public/images/dealers/route1.png";
import Mursaleen from "../../../public/images/dealers/mursaleen.png";
import RealMate from "../../../public/images/dealers/real-mate.png";
import GulfGreen from "../../../public/images/dealers/gulf-green.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Autoplay } from "swiper/modules";

const Dealers = () => {
  const [dealersData, setDealersData] = useState(null);

  useEffect(() => {
    const fetchDealersData = async () => {
      const resp = await getAuthorizedDealers();
      if (resp) {
        setDealersData(resp);
      }
    };

    fetchDealersData();
  }, []);

  // const dealersData = await getAuthorizedDealers();

  const dealers = [
    { path: Gulf, style: "" },
    { path: Route1, style: "" },
    { path: Mursaleen, style: "" },
    { path: RealMate, style: "" },
    // { path: GulfGreen, style: "" },
    // { path: Gulf, style: "" },
    // { path: Route1, style: "" },
    // { path: Mursaleen, style: "" },
    // { path: RealMate, style: "" },
    // { path: GulfGreen, style: "" },
    // { path: Gulf, style: "" },
    // { path: Route1, style: "" },
    // { path: Mursaleen, style: "" },
    // { path: RealMate, style: "" },
    // { path: GulfGreen, style: "" },
    // { path: Gulf, style: "" },
    // { path: Route1, style: "" },
    // { path: Mursaleen, style: "" },
    // { path: RealMate, style: "" },
    // { path: GulfGreen, style: "" },
    // { path: Gulf, style: "" },
    // { path: Route1, style: "" },
    // { path: Mursaleen, style: "" },
    // { path: RealMate, style: "" },
    // { path: GulfGreen, style: "" },
  ];

  return (
    <div className="container">
      <div className="mx-auto flex flex-col justify-between gap-6 md:flex-row md:gap-[2.5rem] lg:w-[92.78%]">
        <h2 className="w-full max-w-[24.125rem] font-righteous text-4xl leading-[4.5rem] text-indigo-blue md:text-[3.75rem] md:leading-[4.5rem]">
          {/* Authorized Dealers */}

          {dealersData?.title}
        </h2>

        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          modules={[FreeMode, Autoplay]}
          className="dealers-swiper !ml-auto !mr-0 h-[3.75rem] w-full cursor-pointer sm:h-[6.875rem] lg:h-auto lg:max-w-[52rem]"
        >
          {dealersData?.dealer_images?.data?.map((dealerImage, index) => {
            // {dealers?.map((dealerImage, index) => {
            console.log(dealerImage.attributes);
            const hh = `w-[${dealerImage?.attributes?.width}px]`;
            return (
              <SwiperSlide
                key={index}
                className={`relative !flex !w-[3.024rem] !max-w-[6.438rem] items-center sm:!w-full ${index !== 0 ? "ml-[1.6rem] sm:ml-[3.5rem] lg:ml-[4.087rem]" : "xl:ml-[4.087rem]"}`}
                // className={`relative !flex items-center ${index !== 0 ? "ml-[1.6rem] sm:ml-[3.5rem] lg:ml-[4.087rem]" : "lg:ml-[4.087rem]"}`}
                // style={{
                //   maxWidth: "150px",
                //   width: `${dealerImage?.attributes?.width}px`,
                // }}
              >
                <Image
                  key={index}
                  src={`${BASE_URL}${dealerImage?.attributes?.url}`}
                  fill
                  alt=""
                  className="absolute w-full object-contain"
                />
                {/* min-w-[3.75rem] */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Dealers;
