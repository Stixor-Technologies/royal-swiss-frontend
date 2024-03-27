import React from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import AdvertisementPolicy from "@/components/shared/advertisement-policy/advertisement-policy";

const Services = () => {
  return (
    <section className="min-h-screen bg-milk-white">
      <div className="container">
        <PageHeader
          heading="Professional Services"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          description="Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed tellus turpis."
        />
      </div>
      <AdvertisementPolicy />
    </section>
  );
};

export default Services;
