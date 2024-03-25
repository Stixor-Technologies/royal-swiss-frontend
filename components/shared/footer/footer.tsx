import React from "react";
import Image from "next/image";
import FooterLogo from "../../../public/images/footer/logo-footer.png";
import { footerLinks } from "@/utils/utils";
import { Menu } from "@/utils/types/types";
import Link from "next/link";

const Footer = () => {
  // const socialLink: SocialLinks[] = [
  //   {
  //     title: "facebook",
  //     path: "#",
  //     iconPath: "icons/social-icons/facebook.svg",
  //   },

  //   {
  //     title: "twitter",
  //     path: "#",
  //     iconPath: "icons/social-icons/twitter.svg",
  //   },

  //   {
  //     title: "twitter",
  //     path: "#",
  //     iconPath: "icons/social-icons/twitter.svg",
  //   },
  // ];

  return (
    <footer className="relative z-10 bg-indigo-blue pb-6 pt-[3.313rem] after:absolute after:inset-0 after:-z-10 after:bg-dark-grain-pattern after:bg-cover after:bg-no-repeat after:opacity-40 after:bg-blend-multiply after:content-['']">
      <div className="container flex justify-between gap-[111px] text-white">
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
        </div>

        <div className="mt-[94px] w-full max-w-[112px]">
          <h3 className="mb-[1.125rem] text-xl font-semibold text-yellow-dark">
            Quick Links
          </h3>
          <ul>
            {footerLinks?.map((link: Menu) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className="mb-1.5 text-[0.938rem] leading-[1.688rem]"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[94px] w-full max-w-[404px] pl-[45px]">
          <address className="not-italic">
            <span>Office:</span>
            House No. 253-D, Northern Bypass, Near Nigana Chowk Multan
          </address>

          <p>
            <span>Email</span>
            <Link href="mailto:info@royalswisshousing.com">
              info@royalswisshousing.com
            </Link>
          </p>

          <p>
            <span>Phone</span>
            <Link href="tel:+92 61 621 6008/9">+92 61 621 6008/9</Link>
          </p>

          <p>
            <span>Phone</span>
            <Link href="tel:+92-31-111-444-32">+92-31-111-444-32</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
