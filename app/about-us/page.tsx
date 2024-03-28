import React from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import LinkButton from "@/components/shared/link-button/link-button";
import Image from "next/image";
import About from "../../public/images/about.png";

const AboutUs = () => {
  return (
    <section className=" md:pt-[1.125rem]">
      <div className="container">
        <PageHeader
          heading="About Us"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          forAbout
        />

        <div className="flex flex-col items-center gap-10 pt-10 md:mt-[6.438rem] md:gap-14 lg:flex-row">
          <div className=" w-full max-w-[42.688rem] lg:order-1">
            <h2
              className="font-righteous text-[3.125rem] leading-[3.88rem] text-indigo-blue lg:text-4xl xl:max-w-[36rem] xl:text-6xl
            xl:leading-[4.5rem]"
            >
              Royal Swiss Housing - The Icon
            </h2>
            <p className="my-4 text-[0.813rem] font-light leading-[1.056rem] text-rich-black md:text-lg md:leading-tight md:text-gray xl:my-6 xl:text-[1.375rem] xl:leading-[1.829rem]">
              Royal Swiss Housing”, along with our National & Global partners
              brings a vast array of features to revolutionize the housing
              standards in Multan. It brings a unique mix of residential,
              commercial, religious, cultural, and entertainment marvels
              together in harmony with each other
            </p>

            <LinkButton as={"button"} text="Get a Quote" variant="corner" />
          </div>
          <div className="lg:order-0 w-full max-w-[38.563rem]">
            <Image src={About} width={617} height={543} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
