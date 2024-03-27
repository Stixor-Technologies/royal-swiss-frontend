import React from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import AdvertisementPolicy from "@/components/shared/advertisement-policy/advertisement-policy";
import { getServices } from "@/utils/api-calls";
import SegmentCard from "@/components/shared/segment-card/segment-card";

const Services = async () => {
  const resp = await getServices();
  console.log(resp);

  return (
    <section className="min-h-screen bg-milk-white">
      <div className="container">
        <PageHeader
          heading="Professional Services"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          description="Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed tellus turpis."
        />

        <div className="mx-auto mb-[35.2px] mt-[79px] grid w-full gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(22.625rem,_1fr))] md:mb-[44px] md:mt-[136px] md:gap-6">
          {resp?.map(({ attributes: service }) => {
            const segmentInfo = {
              icon: service?.icon?.data?.attributes?.url,
              name: service?.name,
              description: service?.description,
            };

            return (
              <SegmentCard
                key={service?.name}
                segmentInfo={segmentInfo}
                forServices
              />
            );
          })}
        </div>
      </div>
      <AdvertisementPolicy />
    </section>
  );
};

export default Services;
