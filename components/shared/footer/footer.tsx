import React from "react";
import Image from "next/image";
import FooterLogo from "../../../public/images/footer/logo-footer.png";
import { footerLinks } from "@/utils/utils";
import { Menu, SocialLinks } from "@/utils/types/types";
import Link from "next/link";
import FacebookIcon from "../../../public/icons/social-icons/facebook.svg";
import XIcon from "../../../public/icons/social-icons/x.svg";
import InstagramIcon from "../../../public/icons/social-icons/instagram.svg";
import LinkedinIcon from "../../../public/icons/social-icons/linkedIn.svg";
import SnapChatIcon from "../../../public/icons/social-icons/snapchat.svg";
import YoutubeIcon from "../../../public/icons/social-icons/youtube.svg";

const Footer = () => {
  const socialLink: SocialLinks[] = [
    {
      title: "facebook",
      path: "#",
      iconPath: FacebookIcon,
    },

    {
      title: "twitter",
      path: "#",
      iconPath: XIcon,
    },

    {
      title: "instagram",
      path: "#",
      iconPath: InstagramIcon,
    },

    {
      title: "linkedin",
      path: "#",
      iconPath: LinkedinIcon,
    },

    {
      title: "snapchat",
      path: "#",
      iconPath: SnapChatIcon,
    },

    {
      title: "youtube",
      path: "#",
      iconPath: YoutubeIcon,
    },
  ];

  return (
    <footer className="relative z-10 bg-indigo-blue pb-6 pt-[3.313rem] after:absolute after:inset-0 after:-z-10 after:bg-dark-grain-pattern after:bg-cover after:bg-no-repeat after:opacity-40 after:bg-blend-multiply after:content-['']">
      <div className="container text-white">
        <div className="mx-auto lg:w-[92.78%]">
          <div className="mb-[2.243rem] flex justify-between gap-[111px] ">
            {/* Left Section */}
            <div className="w-full max-w-[426px]">
              <Image
                src={FooterLogo}
                width={402}
                height={123}
                alt="footer-logo"
                className="mb-4"
              />
              <p className="text-lg font-light leading-[1.35rem]">
                Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique
                dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed
                tellus turpis.
              </p>

              <div className="mt-[2.544rem] flex gap-[1.125rem]">
                {socialLink.map((link) => (
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
            <div className="mt-[94px] w-full max-w-[112px]">
              <h3 className="mb-[1.125rem] text-xl font-semibold text-yellow-dark">
                Quick Links
              </h3>
              <ul className="space-y-[7px]">
                {footerLinks?.map((link: Menu) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className="after:transition-width relative text-[0.938rem] leading-[1.688rem] after:absolute after:-bottom-1 after:left-0 after:h-[0.081rem] after:w-0 after:bg-white after:duration-500 after:ease-in-out after:content-[''] hover:after:w-full"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            <div className="mt-[94px] w-full max-w-[404px] space-y-3 pl-[45px]">
              <address className="footer-office-info not-italic">
                <span className="footer-office-info-label">Office: </span>
                House No. 253-D, Northern Bypass, Near Nigana Chowk Multan
              </address>

              <p className="footer-office-info">
                <span className="footer-office-info-label">Email: </span>
                <Link href="mailto:info@royalswisshousing.com">
                  info@royalswisshousing.com
                </Link>
              </p>

              <p className="footer-office-info">
                <span className="footer-office-info-label">Phone: </span>
                <Link href="tel:+92 61 621 6008/9">+92 61 621 6008/9</Link>
              </p>

              <p className="footer-office-info">
                <span className="footer-office-info-label">Phone" </span>
                <Link href="tel:+92-31-111-444-32">+92-31-111-444-32</Link>
              </p>
            </div>
          </div>

          <div className="border-medium-gray border-t" />
          <div className="mx-auto flex max-w-[1055px] justify-between  pt-[0.813rem]">
            <span className="text-spanish-gray text-base leading-[1.8rem]">
              Open: Mon - Sat / 9:00 AM - 6:00 PM
            </span>

            <p className=" text-[0.938rem] leading-[1.688rem]">
              Copyright &copy; {new Date().getFullYear()} | All Rights Reserved
              by <span className="text-yellow-dark">Royal Swiss Housing</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
