"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMenuStore } from "../../../../store/menu-store";
import { navBarLinks } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close-icon.svg";
import LinkButton from "../../link-button/link-button";
import FooterLogo from "../../../../public/images/footer/logo-footer.png";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const sideBarMenu = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const pathUrl = usePathname();

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
        className="min-aspect:-mr-[40vw] min-aspect:w-[40vw] fixed right-0 top-0 z-40 -mr-[100vw] h-screen
          w-screen overflow-y-auto bg-indigo-blue will-change-auto"
      >
        <div className="absolute -z-10 h-full w-full bg-indigo-blue" />

        {/* <div
          className="min-aspect-9/16:w-3/4 min-aspect:mx-0 min-aspect:h-3/5 min-aspect:w-full min-aspect:justify-center mx-auto flex h-full w-full flex-col 
            justify-center overflow-y-auto p-4 pb-4 pt-[6vw]"
        > */}

        <div
          className=" min-aspect:mx-0 min-aspect:w-full min-aspect:justify-center min-aspect:pt-[6vw]  mx-auto h-full w-full 
            flex-col justify-center overflow-y-auto p-4 pb-4 pt-[2.313rem]"
        >
          <div className="flex justify-between">
            <div>
              <Image
                src={FooterLogo}
                width={127}
                height={42}
                alt="header-logo"
              />
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <Image
                src={CloseIcon}
                alt=""
                className="md:hide-custom-cursor md:no-custom-cursor md:hidden"
              />
            </button>
          </div>

          <ul className="min-aspect:space-y-[1.5vw] min-aspect:mt-[4vw] mt-[12.6vw] space-y-[5.6vw] text-xl md:text-left">
            {navBarLinks?.map((item) => (
              <li>
                <Link href={item?.path}>
                  <p
                    className={`min-aspect:text-[2.5vw] from-2%  
       p-2.5 font-righteous text-[4.7vw] leading-[1.375rem] ${pathUrl === item?.path ? "bg-gradient-to-r from-[#EFCF5A] to-[#AD8F2B] text-indigo-blue" : "text-yellow"} rounded-md`}
                  >
                    {item?.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {/* <LinkButton
            as={"link"}
            href={"#"}
            text="Contact Us"
            variant="lg"
            styles="!text-[7vw] min-aspect:!text-[1.5vw] h-[11.5vw] min-aspect:!h-[4vw] !font-normal mt-[3vw] min-aspect:mt-[0.75vw]"
          /> */}
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
