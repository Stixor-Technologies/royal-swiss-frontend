import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import EventsSample from "../../public/images/events-sample.png";
import LocationMarker from "../../public/icons/location-marker.svg";

const EventCard = () => {
  const imagesList = [1, 2, 3, 4, 5, 6];

  return (
    <div className="my-container flex flex-1 flex-col overflow-hidden rounded-lg">
      <div className="overflow-hidden rounded-lg">
        <div className="slide-container relative z-0 mb-3 overflow-hidden rounded-lg">
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            pagination={true}
            modules={[Pagination]}
            shortSwipes={true}
            longSwipesMs={10000}
            className="event-swiper h-full w-full"
          >
            {imagesList?.map((imageData, index) => (
              <SwiperSlide key={index} className="h-full w-full">
                <Image src={EventsSample} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 flex justify-between md:mt-[2.125rem]">
          <h2 className="line-clamp-1 max-w-full font-righteous text-2xl leading-[1.863rem] text-indigo-blue md:max-w-[70%] md:text-[2rem] md:leading-[2.5rem]">
            Celebrating Success
          </h2>
          <div className="flex items-center gap-2">
            <Image
              src={LocationMarker}
              alt="Location Bar"
              width={12.08}
              height={17.25}
              className="flex-shrink-0"
            />

            <span className="line-clamp-1 text-[0.813rem] leading-[1.398rem] text-indigo-blue md:text-xl md:leading-[1.398rem]">
              Islamabad
            </span>
          </div>
        </div>

        <h3 className="my-4 text-sm font-semibold leading-[1.094rem] text-[#969696] md:text-lg md:leading-[1.406rem]">
          Hosted by{" "}
          <span className="font-normal text-[#333333]">
            ROYAL SWISS HOUSING
          </span>
        </h3>

        <div className="flex flex-col md:gap-2">
          <p className="custom-scrollbar line-clamp-2 h-auto overflow-hidden text-[0.813rem] leading-[1.006rem] text-[#333333] md:text-lg md:leading-[1.406rem]">
            Lorem ipsum dolor sit amet consectetur. Nunc pellentesque nulla
            blandit in amet semper vitae sem tellus. At ultrices pellentesque
            velit.
          </p>

          <button
            className="flex gap-1 text-[0.813rem] leading-[1.006rem] text-indigo-blue md:text-base md:leading-[1.25rem]"
            onClick={() => {
              //   readMoreClick(dataItem);
            }}
          >
            <span className="cursor-pointer">{`Read More >`}</span>
          </button>
        </div>

        <div className="mt-4 flex justify-between underline decoration-slate-900">
          <div className="text-[0.813rem] font-semibold leading-[1.006rem] text-[#333333] md:text-lg md:leading-[1.406rem]">
            Date: <span className="font-normal">16-03-2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
