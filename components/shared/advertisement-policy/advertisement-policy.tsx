import React from "react";
import { advertisementPolicies } from "@/utils/utils";
import SegmentCard from "../segment-card/segment-card";

const AdvertisementPolicy = () => {
  return (
    <div className="bg-[url('/images/policy-bg.png')] bg-contain bg-left-top bg-no-repeat">
      {/* max-w-[78.75rem] */}
      {/* lg:w-[87.5%]  */}
      {/* lg:w-[93.34%] */}

      <div className="container pt-[5.188rem] ">
        <div className="mx-auto lg:w-[92.93%]">
          <div className="mx-auto max-w-[69.938rem] text-center">
            <h2 className="font-righteous text-indigo-blue mb-[1.125rem] text-[3.75rem] leading-[4.5rem]">
              Advertisement Policy
            </h2>
            <p className="text-gray text-[1.375rem] font-light leading-[1.829rem]">
              The project will be advertised in different sessions through, but
              not limited to, the following mediums: Electronic Media Digital
              Media Print Media Outdoor advertising.
            </p>
          </div>

          <div className="mx-auto mt-[3.375rem] grid w-full gap-6 sm:grid-cols-[repeat(auto-fit,_minmax(20.625rem,_1fr))]">
            {advertisementPolicies?.map((policy) => (
              <SegmentCard key={policy.name} segmentInfo={policy} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPolicy;
