import React, { FC, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import LocationMarker from "../../public/icons/location-marker.svg";
import { Events } from "@/utils/types/types";
import { BASE_URL } from "@/utils/constants";
import { format } from "date-fns";

type EventProps = {
  event: Events;
};

const EventCard: FC<EventProps> = ({ event }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let truncatedDescription = event?.attributes?.description?.slice(0, 100);
  if (event?.attributes?.description.length > 100) {
    truncatedDescription += "....";
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

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
            className="event-swiper aspect-[646/320] "
          >
            {event?.attributes?.event_images?.data?.map((eventImage, index) => (
              <SwiperSlide key={index} className="w-full">
                <Image
                  src={`${BASE_URL}${eventImage?.attributes?.url}`}
                  alt=""
                  className="transition-all duration-500 ease-in-out hover:scale-110"
                  fill
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 sm:mt-[2.125rem]">
          {/* <h2 className="line-clamp-1 max-w-full font-righteous text-2xl leading-[1.863rem] text-indigo-blue md:max-w-[60%] md:text-[2rem] md:leading-[2.5rem]"> */}
          <h2 className=" max-w-full font-righteous text-2xl leading-[1.863rem] text-indigo-blue md:text-[2rem] md:leading-[2.5rem]">
            {event?.attributes?.title}
          </h2>
          <div className="flex items-center gap-1.5">
            <Image
              src={LocationMarker}
              alt="Location Bar"
              width={12.08}
              height={17.25}
              className="flex-shrink-0"
            />

            <span className="line-clamp-1 text-[0.813rem] leading-[1.398rem] text-indigo-blue md:text-xl md:leading-[1.398rem]">
              {event?.attributes?.location}
            </span>
          </div>
        </div>

        <h3 className="my-4 text-sm font-semibold leading-[1.094rem] text-[#969696] underline decoration-slate-900 underline-offset-[0.375rem] md:text-lg md:leading-[1.406rem]">
          Hosted by{" "}
          <span className="font-normal text-[#333333]">
            {event?.attributes?.host}
          </span>
        </h3>

        <div className="flex flex-col md:gap-2">
          <p className="overflow-hidden text-[0.813rem] leading-[1.006rem] text-[#333333] md:text-lg md:leading-[1.406rem]">
            {showFullDescription
              ? event?.attributes?.description
              : truncatedDescription}
            {!showFullDescription && (
              <button
                className="mt-2 flex gap-1 text-[0.813rem] font-medium leading-[1.006rem] text-indigo-blue md:text-base md:leading-[1.25rem]"
                onClick={toggleDescription}
              >
                <span className="cursor-pointer">{`Read More >`}</span>
              </button>
            )}

            {showFullDescription && (
              <button
                className="mt-2 flex gap-1 text-[0.813rem] font-medium leading-[1.006rem] text-indigo-blue md:text-base md:leading-[1.25rem]"
                onClick={toggleDescription}
              >
                View Less
              </button>
            )}
          </p>
        </div>

        <h3 className="mb-[2px] mt-4">
          <span className="text-[0.813rem] font-semibold leading-[1.006rem] text-[#333333] underline decoration-slate-900 underline-offset-4 md:text-lg md:leading-[1.406rem]">
            Date:{" "}
            <span className="font-normal">
              {`${format(new Date(event?.attributes?.date), "dd-MM-yyyy")}`}
            </span>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default EventCard;
