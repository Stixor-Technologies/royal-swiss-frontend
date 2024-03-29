"use client";
import React from "react";
import { gsap, DrawSVGPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import VideoCard from "@/components/about-us/video-card/video-card";

export default function Home() {
  gsap.registerPlugin(DrawSVGPlugin);

  useGSAP(() => {
    // gsap.set(".overlay", { bottom: 0, top: "auto", height: 0 });
    // gsap.to(".overlay", {
    //   top: "100%",
    //   ease: "power4.inOut",
    //   delay: 0.25,
    // });
    gsap.set("#path", { visibility: "visible" });
    gsap.set("#path", { drawSVG: "0" });

    const t1 = gsap.timeline();

    t1.to(".overlay", {
      duration: 0.7,
      bottom: "0",
      ease: "expo.inOut",
    });

    t1.to(".overlay", {
      // duration: 1,
      top: "100%",
      ease: "expo.inOut",
      delay: 0.25,
    });

    t1.to("#path", { duration: 1.5, drawSVG: true, ease: "power1.inOut" });
  });

  return (
    <div className="container relative min-h-screen">
      {/* <div className="overlay fixed inset-0 items-center justify-center bg-yellow-dark">
        <div className="overlay-loader size-[50px] bg-dark-blue"></div>
      </div> */}

      {/* <div
        id="page-loader"
        className="overlay fixed inset-x-0 top-0 z-50 h-0 w-full rounded-b-3xl bg-yellow-dark"
      ></div> */}

      <div
        id="page-loader"
        className="overlay fixed inset-x-0 bottom-[100%] top-0 z-50 w-full rounded-b-3xl bg-indigo-blue"
      ></div>

      <div className="mt-128 absolute inset-0 mb-20 hidden flex-col justify-center lg:flex">
        <svg className="pathy w-full" viewBox="0 0 1920 582">
          <defs></defs>
          <path
            id="path"
            className="cls-1 pathy"
            fill="none"
            fill-rule="evenodd"
            stroke="#ff8702"
            stroke-width="150px"
            stroke-miter-limit="10"
            d="m0,103c185,0,237,391,639,391,436,0,643-412,993-412,197,0,349,122,349,122"
            style={{
              strokeDasharray: "none",
              strokeDashoffset: 0,
            }}
          ></path>
        </svg>
      </div>
    </div>
  );
}
