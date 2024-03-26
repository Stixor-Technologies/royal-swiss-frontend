import React from "react";
import ContactForm from "@/components/contact-form/contact-form";
import { getOfficeAddress } from "@/utils/api-calls";
import { Office } from "@/utils/types/types";
import Link from "next/link";
import MapComponent from "@/components/shared/map/map-component";

const Contact = async () => {
  const officeInfo: Office = await getOfficeAddress();

  const formatTime = (time: any) => {
    const date = new Date();
    const [hours, minutes] = time?.split(":");

    date.setHours(hours);
    date.setMinutes(minutes);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const displayDays = ({ days }: { days: any }) => {
    const dayKeys = Object.keys(days).filter((key) => key !== "id");

    const dayShortNames = dayKeys.map((key) => key.slice(0, 3));
    let daysOpen = "";
    let startIndex = null;

    for (let i = 0; i < dayShortNames.length; i++) {
      if (days[dayKeys[i]]) {
        if (startIndex === null) {
          startIndex = i;
        }
      } else {
        if (startIndex !== null) {
          daysOpen += `${dayShortNames[startIndex]}`;
          if (i !== startIndex + 1) {
            daysOpen += ` - ${dayShortNames[i - 1]}`;
          }
          daysOpen += ", ";
          startIndex = null;
        }
      }
    }

    if (startIndex !== null) {
      daysOpen += `${dayShortNames[startIndex]} - ${dayShortNames[5]}`;
    }
    daysOpen = daysOpen.slice(0, -2);

    return daysOpen;
  };

  return (
    <div className="container">
      <div className="mx-auto w-full max-w-[1000px] pb-[104px] sm:pb-[86px]">
        <h2 className="mb-[1.608rem] text-center font-righteous text-[3.125rem] leading-[3.88rem] text-indigo-blue md:mb-12 md:text-[3.479rem] md:leading-[4.32rem]">
          Contact Us
        </h2>
        <ContactForm />

        {officeInfo && (
          <div className="mt-10 flex flex-col items-center gap-[40px] sm:flex-row sm:gap-[1.875rem] md:mt-[84.33px]">
            <div className="w-full sm:max-w-[521px]">
              <MapComponent
                location={{
                  lat: officeInfo?.latitude,
                  lng: officeInfo?.longitude,
                }}
                fromContact
              />
            </div>

            <div className="space-y-[11.3px] md:space-y-[13px]">
              {/* location */}
              <div>
                <h4 className="mb-[4.28px] font-righteous text-lg leading-[23.12px] text-indigo-blue md:mb-[5px] md:text-2xl md:leading-[27px]">
                  Office Location
                </h4>

                <address className="text-[13px] not-italic leading-[23.12px] text-[#444444] md:leading-[27px] ">
                  {officeInfo?.address}
                </address>
              </div>

              {/* email */}
              <div>
                <h4 className="mb-[4.28px] font-righteous text-lg leading-[23.12px] text-indigo-blue md:mb-[5px] md:text-2xl md:leading-[27px]">
                  Email Address
                </h4>

                <Link
                  href={`mailto:${officeInfo?.email}`}
                  className="text-[13px] leading-[23.12px] text-[#444444] md:text-[15px] md:leading-[27px]"
                >
                  {officeInfo?.email}
                </Link>
              </div>

              {/* phone number */}
              <div>
                <h4 className="mb-[4.28px] font-righteous text-lg leading-[23.12px] text-indigo-blue md:mb-[5px] md:text-2xl md:leading-[27px]">
                  Phone Number
                </h4>

                {officeInfo?.contact_numbers?.slice(-2)?.map((number) => (
                  <Link
                    key={number?.id}
                    href={`tel:${number?.contact_number}`}
                    className="block text-[13px] leading-[23.12px] text-[#444444] md:text-[15px] md:leading-[27px]"
                  >
                    {number?.contact_number}
                  </Link>
                ))}
              </div>

              <div className="font-righteous text-lg leading-[23.12px] text-indigo-blue md:mb-[5px] md:text-2xl md:leading-[27px]">
                <span>Open: </span>
                {`${displayDays({ days: officeInfo.days })} / ${formatTime(officeInfo?.opening)} - ${formatTime(officeInfo?.closing)} `}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
