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
      className={`border-light-gray flex flex-col items-center border bg-[rgba(245,245,245,0.5)] px-6 py-10 text-center ${forServices ? "rounded-2xl" : "rounded-lg rounded-bl-[3.5rem]"}`}
    >
      <Image
        src={segmentInfo.icon}
        alt={`${segmentInfo?.name}-icon`}
        width={92}
        height={92}
      />
      <h3 className="text-indigo-blue my-6 text-[1.625rem] font-semibold leading-[2.1rem]">
        {segmentInfo?.name}
      </h3>
      <p
        className={`text-gray font-light ${forServices ? "text-lg leading-[1.496rem]" : "text-xl leading-[1.663rem]"}`}
      >
        {segmentInfo.description}
      </p>
    </div>
  );
};

export default SegmentCard;
