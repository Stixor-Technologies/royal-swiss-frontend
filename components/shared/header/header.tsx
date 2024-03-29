"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./menu/sidebar";
import LinkButton from "../link-button/link-button";
import HeaderLogo from "../../../public/images/header-logo.png";
import HamburgerIcon from "../../../public/icons/hamburger-icon.svg";
import { navBarLinks } from "@/utils/utils";
import { useMenuStore } from "@/store/menu-store";
import { usePathname } from "next/navigation";
import { after } from "node:test";

const Header = () => {
  const pathUrl = usePathname();

  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);
  return (
    <header className={`bg-milk-white pt-[2.313rem] md:pb-0 md:pt-[2.313rem]`}>
      <div className="container flex h-full items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src={HeaderLogo}
              width={188}
              height={62}
              alt="header-logo"
              className="w-[7.938rem] max-w-[11.75rem] sm:w-auto"
            />
          </Link>
        </div>

        <ul className="hidden gap-5 md:flex xl:gap-10">
          {navBarLinks?.slice(0, -1)?.map((item) => (
            <li key={item?.id}>
              <Link
                href={item?.path}
                className={`after:transition-width relative text-sm font-medium leading-[1.375rem] text-dark-blue after:absolute after:-bottom-1 after:left-0 after:h-[0.091rem] after:w-0 after:bg-dark-blue after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full ${pathUrl === item?.path && "after:w-full"}`}
              >
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>

        <LinkButton
          as={"link"}
          href={"/contact-us"}
          variant="sm"
          text="Contact Us"
          styles="hidden md:!inline-flex"
        />

        <button
          type="button"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="md:hide-custom-cursor md:no-custom-cursor md:hidden"
        >
          <Image src={HamburgerIcon} alt="" className="" />
        </button>
      </div>

      <Sidebar />
    </header>
  );
};

export default Header;
