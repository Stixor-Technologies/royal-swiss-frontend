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
      className={`text-rich-black flex ${!forAbout ? "justify-between" : "justify-center"}`}
    >
      <div className={`${forAbout && "text-center"}`}>
        <h2 className="font-righteous text-indigo-blue mb-2 text-[3.479rem] leading-[4.32rem]">
          Our Projects
        </h2>
        <span className="text-lg font-medium leading-[1.35rem] opacity-30">
          Lorem ipsum dolor sit amet consectetur. Velit eu.
        </span>
      </div>
      {!forAbout && (
        <p className="max-w-[28.688rem] font-light leading-[1.35rem]">
          Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique
          dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed
          tellus turpis.
        </p>
      )}
    </div>
  );
};

export default PageHeader;
