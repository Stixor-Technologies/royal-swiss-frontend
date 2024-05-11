import React, { FC, ReactNode } from "react";

type VideoCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  isYellow?: boolean;
  isWhite?: boolean;
};

const VideoCard: FC<VideoCardProps> = ({
  title,
  description,
  children,
  isYellow,
  isWhite,
}) => {
  return (
    <div
      className={`video-card flex flex-col gap-10 rounded-[0.938rem] bg-cover bg-no-repeat px-7 pb-[2.125rem] pt-6 bg-blend-multiply md:rounded-3xl xl:flex-row xl:items-center xl:rounded-[2.5rem] xl:p-10 ${isYellow ? "bg-yellow text-indigo-blue xl:gap-[3.125rem]" : isWhite ? "justify-between bg-white text-indigo-blue" : "justify-between bg-dark-grain-pattern xl:gap-[6.688rem]"}`}
    >
      <div
        className={`w-full ${!isYellow && "xl:max-w-[41.688rem]"} xl:py-5 ${isYellow && "xl:order-1"} `}
      >
        <h2 className="mb-4 font-righteous text-[2.5rem] leading-[3rem] md:text-6xl md:leading-[4.5rem]">
          {title}
        </h2>

        <div>
          <p
            className={`text-[0.813rem] font-light leading-[0.975rem] md:text-[1.375rem] md:leading-[1.829rem] ${(isYellow || isWhite) && "text-gray"}`}
          >
            {description}
          </p>
        </div>
      </div>
      <div
        className={`aspect-[5/3] h-full w-full overflow-hidden rounded-[1rem] xl:max-w-[31.25rem] ${isYellow && "xl:order-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default VideoCard;
