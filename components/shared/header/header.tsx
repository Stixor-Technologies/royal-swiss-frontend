import React from "react";
import Image from "next/image";
import Hamburger from "./menu/hamburger";
import Sidebar from "./menu/sidebar";
import HeaderLogo from "../../../public/images/header-logo.png";
import { navBarLinks } from "@/utils/utils";
import Link from "next/link";
import LinkButton from "../link-button/link-button";
import { link } from "fs";

const Header = () => {
  return (
    <header className={`py-[37px]`}>
      <div className="container flex h-full items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src={HeaderLogo}
              width={188}
              height={62}
              alt="header-logo"
              // className="w-32 max-w-[201px] lg:w-auto"
            />
          </Link>
        </div>

        <ul className="hidden gap-5 md:flex xl:gap-10">
          {navBarLinks.map((item) => (
            <li key={item?.id}>
              <Link
                href={"#"}
                className={`after:transition-width relative text-sm font-medium leading-[1.375rem] text-dark-blue after:absolute after:-bottom-1 after:left-0 after:h-[0.091rem] after:w-0 after:bg-dark-blue after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full `}
              >
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>

        <LinkButton as={"link"} href={"#"} variant="sm" text="Contact Us" />

        {/* <Hamburger /> */}
      </div>

      {/* <Sidebar /> */}
    </header>
  );
};

export default Header;
