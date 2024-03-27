import React, { FC } from "react";
import Image from "next/image";
import { SegmentInfo } from "@/utils/types/types";

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
      className={`flex flex-col items-center border border-light-gray bg-[rgba(245,245,245,0.5)] px-11 py-10 text-center sm:px-6 sm:py-7 md:px-6 md:py-10 ${forServices ? "rounded-2xl" : "rounded-[10px] rounded-bl-[45px] md:rounded-lg md:rounded-bl-[3.5rem]"}`}
    >
      <Image
        src={segmentInfo.icon}
        alt={`${segmentInfo?.name}-icon`}
        width={92}
        height={92}
        className="w-[70px] max-w-[92px] md:w-full"
      />
      <h3 className="my-6 text-2xl font-semibold leading-[31.2px] text-indigo-blue md:text-[1.625rem] md:leading-[2.1rem]">
        {segmentInfo?.name}
      </h3>
      <p
        className={`font-light text-gray ${forServices ? "text-lg leading-[1.496rem]" : "text-base leading-[20.8px]  md:text-xl md:leading-[1.663rem]"}`}
      >
        {segmentInfo.description}
      </p>
    </div>
  );
};

export default SegmentCard;
