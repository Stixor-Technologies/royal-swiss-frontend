import SegmentCard from "@/components/shared/segment-card/segment-card";
import Spinner from "@/components/shared/spinner/spinner";
import { getServices } from "@/utils/api-calls";
import { animatePageIn } from "@/utils/transition-animation";
import { ProfessionalServices } from "@/utils/types/types";
import React, { useEffect, useState } from "react";

const ServicesList = () => {
  const [services, setServices] = useState<ProfessionalServices[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchServices = async () => {
      const resp = await getServices();
      if (resp) {
        setServices(resp);
      }
      setLoading(false);
      animatePageIn();
    };
    fetchServices();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex min-h-[50vh]">
          <Spinner />
        </div>
      ) : services.length > 0 ? (
        <div className="mx-auto mb-[2.2rem] mt-[3.875rem] grid w-full gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(22.625rem,_1fr))] md:mb-[2.75rem] md:mt-[8.5rem] md:gap-6">
          {services?.map(({ attributes: service }) => {
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
