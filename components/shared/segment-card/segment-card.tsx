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
    <div
      key={segmentInfo?.name}
      className={`flex flex-col items-center border border-light-gray bg-[rgba(245,245,245,0.5)] px-[1.466rem] py-[2.438rem] lg:px-6 lg:py-10 ${forServices ? "rounded-2xl" : "rounded-[0.625rem] rounded-bl-[2.813rem] md:rounded-lg md:rounded-bl-[3.5rem]"}`}
    >
      <Image
        src={`${forServices ? `${BASE_URL}${segmentInfo?.icon}` : segmentInfo?.icon}`}
        alt={`${segmentInfo?.name}-icon`}
        width={92}
        height={92}
        className="w-[4.375rem] max-w-[5.75rem] md:w-full"
      />
      <h3
        className={`my-6 text-center font-semibold text-indigo-blue md:text-[1.625rem] md:leading-[2.1rem] ${forServices ? "text-lg leading-[1.463rem]" : "text-2xl"} leading-[1.95rem]`}
      >
        {segmentInfo?.name}
      </h3>
      <p
        className={`text-center font-light text-gray ${forServices ? "text-[0.813rem] leading-[1.056rem] md:text-lg  md:leading-[1.496rem] xl:mb-[1.125rem]" : "text-base leading-[1.3rem]  md:text-xl md:leading-[1.663rem]"}`}
      >
        {segmentInfo.description}
      </p>
    </div>
  );
};

export default SegmentCard;
