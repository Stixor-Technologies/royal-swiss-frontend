import React from "react";
import VidePlayer from "./video-player";

const VideoCard = () => {
  return (
    <>
      <div className="flex gap-[107px] rounded-[15px] bg-dark-grain-pattern bg-cover bg-no-repeat px-7 py-6 bg-blend-multiply md:rounded-[40px] md:p-10">
        <div className="w-full max-w-[667px]">
          <h2 className="mb-4 font-righteous text-5xl leading-[48px] md:text-6xl md:leading-[72px]">
            Our Products
          </h2>

          <div>
            <p className=" text-[13px] font-light leading-[15.6px] md:text-[22px] md:leading-[29.26px]">
              The project is planned to be soft-launched with 3.5, 5, 7, 10, 20,
              40, and 80 Marla plots (Farm House).
            </p>

            <p className="my-4 text-[13px] font-light leading-[15.6px] md:text-[22px] md:leading-[29.26px]">
              In addition, a series of Commercial Plots, Luxury Villas, Low and
              High-Rise Apartments, Farm Houses, Shops, Offices.
            </p>

            <p className="text-[13px] font-light leading-[15.6px] md:text-[22px] md:leading-[29.26px]">
              And an IT Park is projected to be launched.
            </p>
          </div>
        </div>
        <div className="aspect-[5/3] max-w-[500px]">
          <VidePlayer />
        </div>
      </div>

      {/* <VidePlayer /> */}
    </>
  );
};

export default VideoCard;
