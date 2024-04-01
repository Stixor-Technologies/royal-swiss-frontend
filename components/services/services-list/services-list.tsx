import SegmentCard from "@/components/shared/segment-card/segment-card";
import { getServices } from "@/utils/api-calls";
import { ProfessionalServices } from "@/utils/types/types";
import React from "react";

const ServicesList = async () => {
  const resp: ProfessionalServices[] = await getServices();
  console.log("res", resp);

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
