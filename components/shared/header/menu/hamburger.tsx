"use client";
import { useEffect, useRef, Ref } from "react";
import { gsap } from "gsap";
import { useMenuStore } from "../../../../store/menu-store";
import { useGSAP } from "@gsap/react";

const Hamburger = () => {
  const menuTopRef = useRef<SVGPathElement | null>(null);
  const menuMidRef = useRef<SVGPathElement | null>(null);
  const menuBottomRef = useRef<SVGPathElement | null>(null);

  const tl = useRef<GSAPTimeline>();

  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);

  useEffect(() => {
    isMenuOpen ? tl.current?.play() : tl.current?.reverse();
  }, [isMenuOpen]);

  // useEffect(() => {
  //   // timeline for menu button animation
  //   tl.current = gsap.timeline({ paused: true });
  //   tl.current
  //     .to(menuTopRef.current, { y: "-2px", duration: 0.2 }, "initial")
  //     .to(menuBottomRef.current, { y: "2px", duration: 0.2 }, "initial")
  //     .to(
  //       menuMidRef.current,
  //       { scale: 0.1, transformOrigin: "50% 50%", duration: 0.2 },
  //       "initial",
  //     )
  //     .to(menuTopRef.current, { y: 7, duration: 0.2 }, "rotate")
  //     .to(menuBottomRef.current, { y: -7, duration: 0.2 }, "rotate")
  //     .to(
  //       menuTopRef.current,
  //       {
  //         rotationZ: 45,
  //         transformOrigin: "50% 50%",
  //         scale: 0.8,
  //         duration: 0.2,
  //       },
  //       "rotate",
  //     )
  //     .to(
  //       menuBottomRef.current,
  //       {
  //         rotationZ: -45,
  //         transformOrigin: "50% 50%",
  //         scale: 0.8,
  //         duration: 0.2,
  //       },
  //       "rotate",
  //     );
  // }, []);

  useGSAP(() => {
    // timeline for menu button animation
    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(menuTopRef.current, { y: "-2px", duration: 0.2 }, "initial")
      .to(menuBottomRef.current, { y: "2px", duration: 0.2 }, "initial")
      .to(
        menuMidRef.current,
        { scale: 0.1, transformOrigin: "50% 50%", duration: 0.2 },
        "initial",
      )
      .to(menuTopRef.current, { y: 7, duration: 0.2 }, "rotate")
      .to(menuBottomRef.current, { y: -7, duration: 0.2 }, "rotate")
      .to(
        menuTopRef.current,
        {
          rotationZ: 45,
          transformOrigin: "50% 50%",
          scale: 0.8,
          duration: 0.2,
        },
        "rotate",
      )
      .to(
        menuBottomRef.current,
        {
          rotationZ: -45,
          transformOrigin: "50% 50%",
          scale: 0.8,
          duration: 0.2,
        },
        "rotate",
      );
  });

  return (
    <button
      className="hide-custom-cursor no-custom-cursor group z-50 flex size-9 transform
        items-center justify-center drop-shadow-lg md:hidden"
      type="button"
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      <div
        className={`group-hover:bg-light-purple absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] 
              -translate-x-1/2 -translate-y-1/2 scale-0 transform  rounded-full transition-all duration-500  group-hover:scale-100 group-hover:opacity-60 ${
                !isMenuOpen
                  ? "scale-0 bg-[#3e366b]"
                  : "scale-100 bg-[#3e366b] opacity-10"
              }`}
      />
      <svg
        width="70%"
        height="70%"
        viewBox="0 0 25 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={menuTopRef}
          d="M2 2H23.3049"
          stroke="#0E0446"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          ref={menuMidRef}
          d="M2 9H23.3049"
          stroke="#0E0446"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          ref={menuBottomRef}
          d="M2 16H23.3049"
          stroke="#0E0446"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default Hamburger;
