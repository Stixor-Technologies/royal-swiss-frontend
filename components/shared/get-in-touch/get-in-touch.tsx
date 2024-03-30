"use client";
import ContactForm from "@/components/contact-form/contact-form";
import { getOfficeAddress } from "@/utils/api-calls";
import { Office } from "@/utils/types/types";
import React, { useEffect, useState } from "react";
import MapComponent from "../map/map-component";

const GetInTouch = () => {
  const [officeAddress, setOfficeAddress] = useState<Office | null>(null);
  useEffect(() => {
    const fetchOfficeAddress = async () => {
      const resp = await getOfficeAddress();
      if (resp) {
        setOfficeAddress(resp);
      }
    };
    fetchOfficeAddress();
  }, []);

  // const resp: Office = await getOfficeAddress();

  return (
    <section className="bg-[url('/images/bg-assets/contact-section-mobile.png')] bg-contain bg-[center_top] bg-no-repeat pb-10 pt-[7.17rem] lg:mt-[3.75rem] lg:pb-[5.813rem] lg:pt-[9.188rem] 2xl:bg-cover xs:bg-[url('/images/bg-assets/contact-section-web.png')] xs:bg-left-top">
      <div className="container">
        <div className="mx-auto flex flex-col gap-10 lg:w-[92.78%] lg:gap-[3.25rem] midLg:flex-row">
          <div className="midLg:w-[49.13%]">
            {officeAddress ? (
              <MapComponent
                location={{
                  lat: officeAddress?.latitude,
                  lng: officeAddress?.longitude,
                }}
              />
            ) : (
              <div className="h-full" />
            )}
          </div>

          <ContactForm isComponent />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
