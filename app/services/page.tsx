import React, { Suspense } from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import ServicesList from "@/components/services/services-list/services-list";
import AdvertisementPolicy from "@/components/shared/advertisement-policy/advertisement-policy";
import GetInTouch from "@/components/shared/get-in-touch/get-in-touch";
import Dealers from "@/components/shared/dealers/dealers";
import Spinner from "@/components/shared/spinner/spinner";

const Services = () => {
  return (
    <section className="min-h-screen md:pt-[18px]">
      <div className="container">
        <PageHeader
          heading="Professional Services"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          description="Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed tellus turpis."
        />

        <Suspense
          fallback={
            <div className="flex min-h-[50vh]">
              <Spinner />
            </div>
          }
        >
          {/* @ts-expect-error Server Component */}
          <ServicesList />
        </Suspense>
      </div>
      <AdvertisementPolicy />

      {/* @ts-expect-error Server Component */}
      <GetInTouch />
      <Dealers />
    </section>
  );
};

export default Services;
