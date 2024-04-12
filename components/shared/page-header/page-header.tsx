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
      className={`flex flex-col items-center gap-3 text-rich-black sm:flex-row sm:items-start sm:gap-11 ${!forAbout ? "justify-between" : "justify-center"}`}
    >
      <div className="flex-1 text-center sm:text-left">
        <h2 className="mb-3 font-righteous text-4xl leading-[2.794rem] text-indigo-blue md:mb-2 md:text-[3.479rem] md:leading-[4.32rem]">
          {heading}
        </h2>
        <span className="block text-[0.813rem] font-medium leading-[0.975rem] opacity-50 md:text-lg md:leading-[1.35rem] md:opacity-30">
          {tagline}
        </span>
      </div>
      {!forAbout && (
        <p className="flex-1  text-center text-[0.813rem] font-light leading-[1.097rem] sm:text-left md:text-lg md:leading-[1.35rem] lg:max-w-[28.688rem] lg:text-right">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
