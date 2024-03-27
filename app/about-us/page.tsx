import React from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import LinkButton from "@/components/shared/link-button/link-button";
import Image from "next/image";
import About from "../../public/images/about.png";

const AboutUs = () => {
  return (
    <section className=" md:pt-[18px]">
      <div className="container">
        <PageHeader
          heading="About Us"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          forAbout
        />

        <div className="flex flex-col items-center gap-10 pt-[40px] md:mt-[103px] md:gap-14 lg:flex-row">
          <div className=" w-full max-w-[683px] py-[0px] lg:order-1">
            <h2
              className="font-righteous text-[50px] leading-[62.08px] text-indigo-blue lg:text-4xl xl:max-w-[576px] xl:text-6xl
            xl:leading-[72px]"
            >
              Royal Swiss Housing - The Icon
            </h2>
            <p className="my-4 text-[13px] font-light leading-[16.9px] text-rich-black md:text-lg md:leading-tight md:text-gray xl:my-6 xl:text-[22px] xl:leading-[29.26px]">
              Royal Swiss Housing”, along with our National & Global partners
              brings a vast array of features to revolutionize the housing
              standards in Multan. It brings a unique mix of residential,
              commercial, religious, cultural, and entertainment marvels
              together in harmony with each other
            </p>

            <LinkButton as={"button"} text="Get a Quote" variant="corner" />
          </div>
          <div className="lg:order-0 w-full max-w-[617px]">
            <Image src={About} width={617} height={543} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
