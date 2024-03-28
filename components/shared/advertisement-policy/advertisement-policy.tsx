import React from "react";
import { advertisementPolicies } from "@/utils/utils";
import SegmentCard from "../segment-card/segment-card";

const AdvertisementPolicy = () => {
  return (
    <div className="bg-[url('/images/policy-bg-mobile.png')] bg-contain bg-left-top bg-no-repeat sm:bg-[url('/images/policy-bg-web.png')]">
      <div className="container md:pt-[5.188rem] ">
        <div className="mx-auto lg:w-[92.93%]">
          <div className="mx-auto max-w-[69.938rem] text-center">
            <h2 className="mb-4 font-righteous text-[1.875rem] leading-[2.438rem] text-indigo-blue md:mb-[1.125rem] md:text-[3.75rem] md:leading-[4.5rem]">
              Advertisement Policy
            </h2>
            <p className="text-[0.813rem] font-light leading-[1.056rem] text-gray md:text-[1.375rem] md:leading-[1.829rem]">
              The project will be advertised in different sessions through, but
              not limited to, the following mediums: Electronic Media Digital
              Media Print Media Outdoor advertising.
            </p>
          </div>

          <div className="mx-auto mt-10 grid w-full gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(20.625rem,_1fr))] md:mt-[3.375rem] md:gap-6">
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
