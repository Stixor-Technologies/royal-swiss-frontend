"use client";
import React from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import ServicesList from "@/components/services/services-list/services-list";
import AdvertisementPolicy from "@/components/shared/advertisement-policy/advertisement-policy";
import GetInTouch from "@/components/shared/get-in-touch/get-in-touch";
import Dealers from "@/components/shared/dealers/dealers";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useGSAP(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth > 768) {
      ScrollSmoother.create({ smooth: 2, smoothTouch: 0 });
    }
  }, []);

  return (
    <section className="md:pt-[1.125rem]">
      <div className="container">
        <PageHeader
          heading="Professional Services"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          description="Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed tellus turpis."
        />

        <ServicesList />
      </div>
      <AdvertisementPolicy />

      <GetInTouch />
      <Dealers />
    </section>
  );
};

export default Services;
