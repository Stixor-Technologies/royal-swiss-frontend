"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMenuStore } from "../../../../store/menu-store";
import { navBarLinks } from "@/utils/utils";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close-icon.svg";
import FooterLogo from "../../../../public/images/footer/logo-footer.png";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/transition-link";

const Sidebar = () => {
  const menuButtonRef = useRef<HTMLLIElement | null>(null);
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
        className="fixed right-0 top-0 z-40 -mr-[100vw] h-screen w-screen overflow-y-auto
          bg-indigo-blue will-change-auto min-aspect:-mr-[40vw] min-aspect:w-[40vw]"
      >
        <div className="absolute -z-10 h-full w-full bg-indigo-blue" />

        <div
          className=" mx-auto h-full w-full flex-col  justify-center overflow-y-auto p-4 
            pb-4 pt-[2.313rem] min-aspect:mx-0 min-aspect:w-full min-aspect:justify-center min-aspect:pt-[6vw]"
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

          <ul className="mt-[12.6vw] space-y-[5.6vw] text-xl md:text-left min-aspect:mt-[4vw] min-aspect:space-y-[1.5vw]">
            {navBarLinks?.map((item) => (
              <li key={item?.id} ref={menuButtonRef}>
                <TransitionLink href={item?.path}>
                  <span
                    className={`from-2% block p-2.5 text-left
                  font-righteous text-[4.7vw] leading-[1.375rem] min-aspect:text-[2.5vw] ${pathUrl === item?.path ? "bg-gradient-to-r from-[#EFCF5A] to-[#AD8F2B] text-indigo-blue" : "text-yellow"} rounded-md`}
                  >
                    {item?.title}
                  </span>
                </TransitionLink>
              </li>
            ))}
          </ul>
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

export default Sidebar;
