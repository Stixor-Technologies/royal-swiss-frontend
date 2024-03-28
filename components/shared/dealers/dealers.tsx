"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAuthorizedDealers } from "@/utils/api-calls";
import { BASE_URL } from "@/utils/constants";
import { DealersData } from "@/utils/types/types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Autoplay } from "swiper/modules";

const Dealers = () => {
  const [dealersData, setDealersData] = useState<DealersData | null>(null);

  useEffect(() => {
    const fetchDealersData = async () => {
      const resp = await getAuthorizedDealers();
      if (resp) {
        setDealersData(resp);
      }
    };

    fetchDealersData();
  }, []);

  const modules = [FreeMode];

  if (dealersData && dealersData?.dealer_images?.data?.length >= 8) {
    modules.push(Autoplay);
  }

  return (
    <>
      {dealersData ? (
        <div className="container mb-[6.5rem] mt-10 md:my-[6.125rem]">
          <div className="mx-auto flex flex-col justify-between gap-6 md:flex-row md:items-center md:gap-[2.5rem] lg:w-[92.78%]">
            <h2 className="w-full text-center font-righteous text-4xl leading-[4.5rem] text-indigo-blue sm:max-w-[24.125rem] sm:text-left md:text-[3.75rem] md:leading-[4.5rem]">
              {dealersData?.title}
            </h2>

            <Swiper
              slidesPerView={"auto"}
              freeMode={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={modules}
              className="dealers-swiper xs:h-[6.875rem] !ml-auto !mr-0 h-[3.75rem] w-full cursor-pointer lg:h-auto lg:max-w-[52rem]"
            >
              {dealersData?.dealer_images?.data?.map((dealerImage, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className={`xs:!w-full relative !flex !w-[3.4rem] !max-w-[6.438rem] items-center sm:!w-full ${index !== 0 ? "xs:mr-10 ml-0 mr-[1.6rem] sm:mr-[3.5rem] lg:!mr-0 lg:ml-[4.087rem]" : "xs:mr-10 ml-0 mr-[1.6rem] sm:mr-[3.5rem] lg:!mr-0 lg:ml-[4.087rem]"}`}
                  >
                    <Image
                      key={index}
                      src={`${BASE_URL}${dealerImage?.attributes?.url}`}
                      fill
                      alt=""
                      className="absolute w-full object-contain"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Dealers;
