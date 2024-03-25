"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMenuStore } from "../../../../store/menu-store";
import { navBarLinks } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import HamburgerIcon from "../../../../public/icons/hamburger-icon.svg";
import LinkButton from "../../link-button/link-button";

const Sidebar = () => {
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const sideBarMenu = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      if (
        sideBarMenu.current &&
        menuButtonRef.current &&
        !sideBarMenu.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen],
  );

  useEffect(() => {
    window.addEventListener("resize", () => setIsMenuOpen(false));

    return () => {
      window.removeEventListener("resize", () => setIsMenuOpen(false));
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  // Trigger animations for menu open state
  useEffect(() => {
    if (isMenuOpen) {
      if (sideBarMenu.current) {
        gsap.to(sideBarMenu.current, {
          x: -sideBarMenu?.current?.clientWidth,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.5,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    } else {
      if (sideBarMenu.current) {
        gsap.to(sideBarMenu.current, {
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    }
  }, [isMenuOpen]);
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <>
      <div
        ref={sideBarMenu}
        className="fixed right-0 top-0 z-40 -mr-[100vw] h-screen w-screen overflow-y-auto
          will-change-auto min-aspect:-mr-[25vw] min-aspect:w-[25vw]"
      >
        <div className="absolute -z-10 h-full w-full bg-white" />
        <button className="absolute right-[16px] top-[40px]">
          <Image
            src={HamburgerIcon}
            alt=""
            className="md:hide-custom-cursor md:no-custom-cursor md:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </button>
        <div
          className="mx-auto flex h-full w-full flex-col justify-center overflow-y-auto p-4 pb-4 pt-[6vw] 
            min-aspect-9/16:w-3/4 min-aspect:mx-0 min-aspect:h-3/5 min-aspect:w-full min-aspect:justify-center"
        >
          <ul className="space-y-[10vw] text-xl md:text-left  min-aspect:space-y-[2vw]">
            {navBarLinks.map((item) => (
              <li className="px-[1vw]">
                <Link href={"#"}>
                  <p
                    className="mb-[3vw] text-center text-[8vw] text-dark-blue  
    min-aspect:mb-[0.75vw] min-aspect:text-left min-aspect:text-[1.5vw]"
                  >
                    {item?.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <LinkButton
            as={"link"}
            href={"#"}
            text="Contact Us"
            variant="lg"
            styles="!text-[7vw] min-aspect:!text-[1.5vw] h-[11.5vw] min-aspect:!h-[4vw] !font-normal mt-[3vw] min-aspect:mt-[0.75vw]"
          />
        </div>
      </div>

      <div
        ref={overlayRef}
        className={`${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        } fixed top-0 z-30 h-screen w-screen bg-black opacity-0`}
      ></div>
    </>
  );
};

{
  /* <ul className="min-aspect:space-y-[3vw] min-aspect:text-[3vw] space-y-[7vw] px-8 text-[7vw] md:text-left">
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
</ul> */
}

export default Sidebar;
