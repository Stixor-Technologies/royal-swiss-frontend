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
      <div className="mx-auto w-full max-w-[62.5rem] pb-[6.5rem] sm:pb-[5.375rem]">
        <h2 className="mb-[1.608rem] text-center font-righteous text-[3.125rem] leading-[3.88rem] text-indigo-blue md:mb-12 md:text-[3.479rem] md:leading-[4.32rem]">
          Contact Us
        </h2>
        <ContactForm />

        {officeInfo && (
          <div className="mt-10 flex flex-col items-center gap-[2.5rem] sm:flex-row sm:gap-[1.875rem] md:mt-[5.271rem]">
            <div className="w-full sm:max-w-[32.563rem]">
              <MapComponent
                location={{
                  lat: officeInfo?.latitude,
                  lng: officeInfo?.longitude,
                }}
                fromContact
              />
            </div>

            <div className="space-y-[0.706rem] md:space-y-[0.813rem]">
              {/* location */}
              <div>
                <h4 className="mb-[0.268rem] font-righteous text-lg leading-[1.445rem] text-indigo-blue md:mb-[0.313rem] md:text-2xl md:leading-[1.688rem]">
                  Office Location
                </h4>

                <address className="text-[0.813rem] not-italic leading-[1.445rem] text-gray md:leading-[1.688rem] ">
                  {officeInfo?.address}
                </address>
              </div>

              {/* email */}
              <div>
                <h4 className="mb-[0.268rem] font-righteous text-lg leading-[1.445rem] text-indigo-blue md:mb-[0.313rem] md:text-2xl md:leading-[1.688rem]">
                  Email Address
                </h4>

                <Link
                  href={`mailto:${officeInfo?.email}`}
                  className="text-[0.813rem] leading-[1.445rem] text-gray md:text-[0.938rem] md:leading-[1.688rem]"
                >
                  {officeInfo?.email}
                </Link>
              </div>

              {/* phone number */}
              <div>
                <h4 className="mb-[0.268rem] font-righteous text-lg leading-[1.445rem] text-indigo-blue md:mb-[0.313rem] md:text-2xl md:leading-[1.688rem]">
                  Phone Number
                </h4>

                {officeInfo?.contact_numbers?.slice(-2)?.map((number) => (
                  <Link
                    key={number?.id}
                    href={`tel:${number?.contact_number}`}
                    className="block text-[0.813rem] leading-[1.445rem] text-gray md:text-[0.938rem] md:leading-[1.688rem]"
                  >
                    {number?.contact_number}
                  </Link>
                ))}
              </div>

              <div className="font-righteous text-lg leading-[1.445rem] text-indigo-blue md:mb-[0.313rem] md:text-2xl md:leading-[1.688rem]">
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