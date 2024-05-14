import React from "react";
import Image from "next/image";
import FooterLogo from "../../../public/images/footer/logo-footer.png";
import { footerLinks } from "@/utils/utils";
import { Menu, Office } from "@/utils/types/types";
import { socialLink } from "@/utils/utils";
import Link from "next/link";
import TransitionLink from "@/components/transition-link";
import { getOfficeAddress } from "@/utils/api-calls";

const Footer = async () => {
  const officeAddress: Office = await getOfficeAddress();

  const formatTime = (time: string) => {
    const date = new Date();
    const [hours, minutes] = time?.split(":");
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));
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
    <footer className="relative z-10 bg-indigo-blue pb-[1.25rem] pt-[1.563rem] after:absolute after:inset-0 after:-z-10 after:bg-dark-grain-pattern after:bg-cover after:bg-no-repeat after:opacity-40 after:bg-blend-multiply after:content-[''] sm:pb-6 sm:pt-[3.313rem]">
      <div className="container text-white">
        <div className="mx-auto md:px-0 lg:w-[92.78%]">
          <div className="mb-[2.163rem] flex flex-col flex-wrap gap-[1.169rem] sm:mb-[2.243rem] md:flex-row md:gap-x-[8.125rem] md:gap-y-[3.125rem] xl:gap-[6.938rem] midLg:flex-nowrap midLg:justify-between midLg:gap-[1.875rem] ">
            {/* Left Section */}
            <div className="max-w-[26.625rem] md:w-[50%] midLg:w-full">
              <Image
                src={FooterLogo}
                width={402}
                height={123}
                alt="footer-logo"
                className="mb-4 w-[15.375rem] max-w-[25.125rem] md:w-auto"
              />
              <p className="text-[0.813rem] font-light leading-[0.975rem] sm:text-lg sm:leading-[1.35rem]">
                Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique
                dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed
                tellus turpis.
              </p>

              <div className="mt-[2.544rem] hidden gap-[1.125rem] midLg:flex">
                {socialLink?.map((link) => (
                  <Link
                    key={link?.title}
                    href={link?.path}
                    className="flex size-[2.383rem] items-center justify-center rounded-full bg-white transition-all duration-700 ease-in-out hover:scale-110"
                  >
                    <Image
                      src={link.iconPath}
                      width={19}
                      height={19}
                      alt={`${link?.title}-icon`}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mid Section */}
            <div className="md:order-0 order-1 w-full md:max-w-[7rem] md:self-end midLg:mt-[5.875rem] midLg:self-auto">
              <h3 className="mb-[0.962rem] text-lg font-semibold text-yellow-dark sm:mb-[1.125rem] sm:text-xl">
                Quick Links
              </h3>
              <ul className="flex flex-wrap gap-6 md:block md:space-y-[0.438rem]">
                {footerLinks?.map((link: Menu) => (
                  <li key={link.id}>
                    <TransitionLink href={link?.path}>
                      <span className="after:transition-width relative block text-left text-[0.813rem] leading-[1.443rem] after:absolute after:-bottom-1 after:left-0 after:h-[0.081rem] after:w-0 after:bg-white after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full sm:text-[0.938rem] sm:leading-[1.688rem]">
                        {link?.title}
                      </span>
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            {officeAddress && (
              <div className="order-0 w-full max-w-[25.25rem] space-y-3 md:order-1 lg:pl-[0.625rem] xl:pl-[2.813rem] midLg:mt-[5.875rem]">
                <address className="footer-office-info not-italic">
                  <span className="footer-office-info-label">Office: </span>
                  {officeAddress?.address}
                </address>

                <p className="footer-office-info">
                  <span className="footer-office-info-label">Email: </span>
                  <Link href="mailto:info@royalswisshousing.com">
                    {officeAddress?.email}
                  </Link>
                </p>

                {officeAddress?.contact_numbers
                  ?.slice(-2)
                  ?.map((number, index) => (
                    <p key={index} className="footer-office-info">
                      <span className="footer-office-info-label">Phone: </span>
                      <Link href={`tel:${number?.contact_number}`}>
                        {number?.contact_number}
                      </Link>
                    </p>
                  ))}
              </div>
            )}
          </div>

          <div className="mb-[1.528rem] mt-[2.163rem] flex flex-wrap items-center justify-center gap-[0.962rem] sm:justify-start sm:gap-[1.125rem] midLg:hidden">
            {socialLink.map((link) => (
              <Link
                key={link?.title}
                href={link?.path}
                className="flex size-[2.036rem] items-center justify-center rounded-full bg-white transition-all duration-700 ease-in-out hover:scale-110"
              >
                <Image
                  src={link.iconPath}
                  width={19}
                  height={19}
                  alt={`${link?.title}-icon`}
                />
              </Link>
            ))}
          </div>

          <div className="border-t border-medium-gray" />
          <div
            className={`mx-auto flex max-w-[65.938rem] flex-col items-center ${officeAddress?.days ? "justify-between" : "justify-center"} gap-2 pt-[0.813rem] text-center  midLg:flex-row`}
          >
            <p className="text-[0.625rem] leading-[1.443rem] sm:text-[0.938rem] sm:leading-[1.688rem] midLg:order-1">
              Copyright &copy; {new Date().getFullYear()} | All Rights Reserved
              by{" "}
              <span className="text-[0.5rem] text-yellow-dark sm:text-[0.938rem]">
                Royal Swiss Housing
              </span>
            </p>

            {officeAddress?.days && (
              <span className="midLg:order-0 text-[0.813rem] leading-[1.539rem] text-spanish-gray sm:text-base sm:leading-[1.8rem]">
                Open:{" "}
                {`${displayDays({ days: officeAddress.days })} / ${formatTime(officeAddress?.opening)} - ${formatTime(officeAddress?.closing)} `}
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
