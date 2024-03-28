import React from "react";
import VidePlayer from "./video-player";

const VideoCard = () => {
  return (
    <>
      <div className="flex gap-[6.688rem] rounded-[0.938rem] bg-dark-grain-pattern bg-cover bg-no-repeat px-7 py-6 bg-blend-multiply md:rounded-[2.5rem] md:p-10">
        <div className="w-full max-w-[41.688rem]">
          <h2 className="mb-4 font-righteous text-5xl leading-[3rem] md:text-6xl md:leading-[4.5rem]">
            Our Products
          </h2>

          <div>
            <p className=" text-[0.813rem] font-light leading-[0.975rem] md:text-[1.375rem] md:leading-[1.829rem]">
              The project is planned to be soft-launched with 3.5, 5, 7, 10, 20,
              40, and 80 Marla plots (Farm House).
            </p>

            <p className="my-4 text-[0.813rem] font-light leading-[0.975rem] md:text-[1.375rem] md:leading-[1.829rem]">
              In addition, a series of Commercial Plots, Luxury Villas, Low and
              High-Rise Apartments, Farm Houses, Shops, Offices.
            </p>

            <p className="text-[0.813rem] font-light leading-[0.975rem] md:text-[1.375rem] md:leading-[1.829rem]">
              And an IT Park is projected to be launched.
            </p>
          </div>
        </div>
        <div className="aspect-[5/3] max-w-[31.25rem]">
          <VidePlayer />
        </div>
      </div>

      {/* <VidePlayer /> */}
    </>
  );
};

export default VideoCard;
