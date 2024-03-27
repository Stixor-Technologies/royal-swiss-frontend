import React, { FC } from "react";

type PageHeaderProps = {
  heading: string;
  tagline: string;
  description?: string;
  forAbout?: boolean;
};

// typescript-eslint/no-unused-vars
const PageHeader: FC<PageHeaderProps> = ({
  heading,
  tagline,
  description,
  forAbout = false,
}) => {
  //TODO - console added to avoid lint error, these values will be used later
  return (
    <div
      className={`flex flex-col gap-4 text-rich-black xl:flex-row ${!forAbout ? "justify-between" : "justify-center"}`}
    >
      <div className={`${forAbout && "text-center"}`}>
        <h2 className="mb-4 font-righteous text-[50px] leading-[62.08px] text-indigo-blue md:mb-2 md:text-[3.479rem] md:leading-[4.32rem]">
          {heading}
        </h2>
        <span className="text-[13px] font-medium  leading-[15.6px] opacity-50 md:text-lg md:leading-[1.35rem] md:opacity-30">
          {tagline}
        </span>
      </div>
      {!forAbout && (
        <p className="text-[13px] font-light leading-[15.6px] md:max-w-[28.688rem] md:text-lg md:leading-[1.35rem]">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
