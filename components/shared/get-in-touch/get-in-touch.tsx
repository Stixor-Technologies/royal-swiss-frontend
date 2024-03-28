import ContactForm from "@/components/contact-form/contact-form";
import { getOfficeAddress } from "@/utils/api-calls";
import { Office } from "@/utils/types/types";
import React from "react";
import MapComponent from "../map/map-component";

const GetInTouch = async () => {
  const resp: Office = await getOfficeAddress();

  return (
    <section className="xs:bg-[url('/images/bg-assets/contact-section-web.png')] xs:bg-left-top bg-[url('/images/bg-assets/contact-section-mobile.png')] bg-contain bg-[center_top] bg-no-repeat pb-10 pt-[7.17rem] lg:mt-[3.75rem] lg:pb-[5.813rem] lg:pt-[9.188rem] 2xl:bg-cover">
      <div className="container">
        <div className="midLg:flex-row mx-auto flex flex-col gap-10 lg:w-[92.78%] lg:gap-[3.25rem]">
          <div className="midLg:w-[49.13%]">
            {resp ? (
              <MapComponent
                location={{
                  lat: resp?.latitude,
                  lng: resp?.longitude,
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
