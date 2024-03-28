import SegmentCard from "@/components/shared/segment-card/segment-card";
import { getServices } from "@/utils/api-calls";
import React from "react";

async function getComments() {
  await new Promise((resolve) => setTimeout(resolve, 15000));
  return Array.from({ length: 20 }, (_, index) => "Comment");
}

const ServicesList = async () => {
  const resp = await getServices();

  return (
    <>
      {resp ? (
        <div className="mx-auto mb-[2.2rem] mt-[4.938rem] grid w-full gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(22.625rem,_1fr))] md:mb-[2.75rem] md:mt-[8.5rem] md:gap-6">
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
      ) : null}
    </>
  );
};

export default ServicesList;
