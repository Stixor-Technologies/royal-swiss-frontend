import ContactForm from "@/components/contact-form/contact-form";
import { getOfficeAddress } from "@/utils/api-calls";
import { Office } from "@/utils/types/types";
import React from "react";
import MapComponent from "../map/map-component";

const GetInTouch = async () => {
  const { latitude, longitude }: Office = await getOfficeAddress();

  console.log(latitude, longitude);

  return (
    <div className="container">
      <div className="mx-auto flex gap-[30px] lg:w-[92.78%] lg:gap-[52px]">
        {/* <h2 className="mb-[1.608rem] w-[49.13%] text-center font-righteous text-[3.125rem] leading-[3.88rem] text-indigo-blue md:mb-12 md:text-[3.479rem] md:leading-[4.32rem]">
          Contact Us
        </h2> */}

        <div className="w-[49.13%]">
          <MapComponent
            location={{
              lat: latitude,
              lng: longitude,
            }}
          />
        </div>

        <ContactForm isComponent />
      </div>
    </div>
  );
};

export default GetInTouch;
