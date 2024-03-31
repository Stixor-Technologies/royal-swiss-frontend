import React, { FC } from "react";

type PageHeaderProps = {
  heading: string;
  tagline: string;
  description?: string;
  forAbout?: boolean;
};

const PageHeader: FC<PageHeaderProps> = ({
  heading,
  tagline,
  description,
  forAbout = false,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 text-rich-black xl:flex-row ${!forAbout ? "justify-between" : "justify-center"}`}
    >
      <div className={`${forAbout && "text-center"}`}>
        <h2 className="mb-4 font-righteous text-[3.125rem] leading-[3.88rem] text-indigo-blue md:mb-2 md:text-[3.479rem] md:leading-[4.32rem]">
          {heading}
        </h2>
        <span className="text-[0.813rem] font-medium  leading-[0.975rem] opacity-50 md:text-lg md:leading-[1.35rem] md:opacity-30">
          {tagline}
        </span>
      </div>
      {!forAbout && (
        <p className="text-left text-[0.813rem] font-light leading-[0.975] md:max-w-[28.688rem] md:text-lg md:leading-[1.35rem] xl:text-right">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
