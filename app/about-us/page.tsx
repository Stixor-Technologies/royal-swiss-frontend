import React from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import LinkButton from "@/components/shared/link-button/link-button";
import EssentialMetrics from "@/components/about-us/essential-metrics/essential-metrics";
import Image from "next/image";
import About from "../../public/images/about.png";
import VideoCard from "@/components/about-us/video-card/video-card";
import VideoPlayer from "@/components/about-us/video-card/video-player";
import AdvertisementPolicy from "@/components/shared/advertisement-policy/advertisement-policy";
import SkillSet from "@/components/shared/skill-set/skill-set";
import GetInTouch from "@/components/shared/get-in-touch/get-in-touch";
import Dealers from "@/components/shared/dealers/dealers";

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

        <EssentialMetrics />

        <div className="mb-10 space-y-10 md:mb-24 xl:space-y-8">
          <VideoCard
            title="Our Products"
            description="The project is planned to be soft-launched with 3.5, 5, 7, 10, 20, 40, and 80 Marla plots (Farm House).In addition, a series of Commercial Plots, Luxury Villas, Low and High-Rise Apartments, Farm Houses, Shops, Offices.And an IT Park is projected to be launched."
          >
            <VideoPlayer />
          </VideoCard>

          <VideoCard
            title="Road Map"
            description="The project will be launched in the first half of 2023 with full fervor and enthusiasm. Allocation of plot numbers to files/inventory provided at soft-launch, through the balloting process.Launching new inventory stock at higher rates. Beginning of the infrastructure development of Main Boulevard, Site Office, Masjid, Park, and the First-Residential Sector."
            isYellow
          >
            <VideoPlayer />
          </VideoCard>

          <VideoCard
            title="Project Delivery"
            description="The possession of the first sector will be handed over within 1.5 years, i.e.2025. Limited inventory of commercial plots will be launched in the market. Limited inventory of residential plots will be launched in the market.The project will be sold through the accredited “Sales Department”, as well as our “Premium Sales Partners”."
            isWhite
          >
            <VideoPlayer />
          </VideoCard>
        </div>
      </div>

      <AdvertisementPolicy />

      <div className="mt-10 md:mt-[6.625rem] md:pb-[3.25rem]">
        <SkillSet />
      </div>

      <div className="-mt-14 lg:mt-0">
        <GetInTouch />
      </div>

      <Dealers />
    </section>
  );
};

export default AboutUs;
