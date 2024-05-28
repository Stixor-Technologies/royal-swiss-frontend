"use client";
import React, { useEffect, useState } from "react";
import ContactForm from "@/components/contact-form/contact-form";
import { getOfficeAddress } from "@/utils/api-calls";
import { Office } from "@/utils/types/types";
import Link from "next/link";
import MapComponent from "@/components/shared/map/map-component";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { animatePageIn } from "@/utils/transition-animation";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const [officeAddress, setOfficeAddress] = useState<Office | null>(null);

  useEffect(() => {
    animatePageIn();
  }, []);

  useEffect(() => {
    const fetchOfficeAddress = async () => {
      const resp = await getOfficeAddress();
      if (resp) {
        setOfficeAddress(resp);
      }
    };
    fetchOfficeAddress();
  }, []);

  useGSAP(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth > 768) {
      ScrollSmoother.create({ smooth: 1, smoothTouch: 0 });
    }
  }, []);

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

    const dayShortNames = dayKeys?.map((key) => key.slice(0, 3));
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
      daysOpen += `${dayShortNames[startIndex]} - ${dayShortNames[6]}`;
    }

    if (daysOpen.endsWith(", ")) {
      daysOpen = daysOpen.slice(0, -2);
    }

    return daysOpen;
  };

  return (
    <div className="container">
      <div className="mx-auto w-full max-w-[62.5rem] pb-[6.5rem] sm:pb-[5.375rem]">
        <h2 className="mb-[2.67rem] text-center font-righteous  text-4xl leading-[2.794rem] text-indigo-blue md:mb-12 md:text-[3.479rem] md:leading-[4.32rem]">
          Contact Us
        </h2>
        <ContactForm />

        {officeAddress && (
          <div className="mt-10 flex flex-col items-center gap-[2.5rem] sm:flex-row sm:gap-[1.875rem] md:mt-[5.271rem]">
            <div className="w-full sm:max-w-[32.563rem]">
              <MapComponent
                location={{
                  lat: officeAddress?.latitude,
                  lng: officeAddress?.longitude,
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

                <address className="text-[0.813rem] not-italic leading-[1.445rem] text-gray md:text-[0.938rem] md:leading-[1.688rem] ">
                  {officeAddress?.address}
                </address>
              </div>

              {/* email */}
              <div>
                <h4 className="mb-[0.268rem] font-righteous text-lg leading-[1.445rem] text-indigo-blue md:mb-[0.313rem] md:text-2xl md:leading-[1.688rem]">
                  Email Address
                </h4>

                <Link
                  href={`mailto:${officeAddress?.email}`}
                  className="text-[0.813rem] leading-[1.445rem] text-gray md:text-[0.938rem] md:leading-[1.688rem]"
                >
                  {officeAddress?.email}
                </Link>
              </div>

              {/* phone number */}
              <div>
                <h4 className="mb-[0.268rem] font-righteous text-lg leading-[1.445rem] text-indigo-blue md:mb-[0.313rem] md:text-2xl md:leading-[1.688rem]">
                  Phone Number
                </h4>

                {officeAddress?.contact_numbers?.slice(-2)?.map((number) => (
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
                {`${displayDays({ days: officeAddress.days })} / ${formatTime(officeAddress?.opening)} - ${formatTime(officeAddress?.closing)} `}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
