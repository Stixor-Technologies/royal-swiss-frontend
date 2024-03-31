"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/utils/transition-animation";
import { useMenuStore } from "@/store/menu-store";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactNode }) {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  useEffect(() => {
    console.log("animate");
    animatePageIn();
  }, []);

  // useGSAP(() => {
  //   window.scrollTo(0, 0);
  //   if (window.innerWidth > 768) {
  //     ScrollSmoother.create({ smooth: 2, smoothTouch: 0 });
  //   }
  // }, []);

  return (
    <>
      <div
        id="transition-element"
        className="fixed top-0 z-40 h-screen w-screen rounded-b-3xl bg-indigo-blue"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </>
  );
}
