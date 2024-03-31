import React from "react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProjectSample from "../../public/images/project-sample.png";

const ProjectCard = () => {
  const imagesList = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Swiper
        grabCursor={true}
        pagination={true}
        modules={[Pagination]}
        shortSwipes={true}
        longSwipesMs={10000}
        className="project-swiper carousel-slider mb-10 h-full w-full rounded-[2.5rem] sm:mb-[1.688rem]"
      >
        {imagesList?.map((url, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={ProjectSample}
                alt=""
                className="transition-all duration-500 ease-in-out hover:scale-110"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <Image src={ProjectSample} alt="" /> */}

      <div>
        <h2 className="font-righteous text-lg leading-[1.397rem] text-indigo-blue md:text-4xl md:leading-[2.794rem]">
          Parco Qasba Gujrat
        </h2>
        <p className="mt-4 text-[0.813rem] font-light leading-[1.056rem] text-rich-black md:text-lg md:leading-[1.35rem]">
          Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique
          dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed
          tellus turpis. Lorem ipsum dolor sit amet consectetur. Mi sed lorem
          tristique dignissim fermentum volutpat sed aliquet et. Ipsum sit risus
          sed tellus turpis.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
