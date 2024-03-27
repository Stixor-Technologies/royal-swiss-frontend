import React, { FC } from "react";
import Image from "next/image";
import { SegmentInfo } from "@/utils/types/types";
import { BASE_URL } from "@/utils/constants";

type SegmentCardProps = {
  segmentInfo: SegmentInfo;
  forServices?: boolean;
};

const SegmentCard: FC<SegmentCardProps> = ({
  segmentInfo,
  forServices = false,
}) => {
  return (
    // <div
    //   key={segmentInfo?.name}
    //   className={`flex flex-col items-center border border-light-gray bg-[rgba(245,245,245,0.5)] px-11 py-10 text-center sm:px-6 sm:py-7 md:px-6 md:py-10 ${forServices ? "rounded-2xl" : "rounded-[10px] rounded-bl-[45px] md:rounded-lg md:rounded-bl-[3.5rem]"}`}
    // >
    <div
      key={segmentInfo?.name}
      className={`flex flex-col items-center border border-light-gray bg-[rgba(245,245,245,0.5)] px-[23.46px] py-[39px] lg:px-6 lg:py-10 ${forServices ? "rounded-2xl" : "rounded-[10px] rounded-bl-[45px] md:rounded-lg md:rounded-bl-[3.5rem]"}`}
    >
      <Image
        src={`${forServices ? `${BASE_URL}${segmentInfo?.icon}` : segmentInfo?.icon}`}
        alt={`${segmentInfo?.name}-icon`}
        width={92}
        height={92}
        className="w-[70px] max-w-[92px] md:w-full"
      />
      <h3
        className={`my-6 text-center font-semibold text-indigo-blue md:text-[1.625rem] md:leading-[2.1rem] ${forServices ? "text-lg leading-[23.4px]" : "text-2xl"} leading-[31.2px]`}
      >
        {segmentInfo?.name}
      </h3>
      <p
        className={`text-center font-light text-gray ${forServices ? "text-[13px] leading-[16.9px] md:text-lg  md:leading-[1.496rem] xl:mb-[18px]" : "text-base leading-[20.8px]  md:text-xl md:leading-[1.663rem]"}`}
      >
        {segmentInfo.description}
      </p>
    </div>
  );
};

export default SegmentCard;
