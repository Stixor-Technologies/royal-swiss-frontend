"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

const PageLoader = () => {
  //   useGSAP(() => {
  //     const t1 = gsap.timeline();
  //     t1.to(".overlay", {
  //       duration: 0.7,
  //       bottom: "0",
  //       ease: "expo.inOut",
  //     });

  //     t1.to(".overlay", {
  //       top: "100%",
  //       ease: "expo.inOut",
  //       delay: 0.25,
  //     });

  //     t1.to(".overlay", {
  //       bottom: "100%",
  //       top: 0,
  //     });
  //   }, []);

  // useGSAP(() => {
  //   const transitionElement = document.getElementById("transition-element");

  //   if (transitionElement) {
  //     const tl = gsap.timeline();

  //     tl.to(transitionElement, {
  //       duration: 0.7,
  //       bottom: "0",
  //       ease: "expo.inOut",
  //     });

  //     tl.to(transitionElement, {
  //       top: "100%",
  //       ease: "expo.inOut",
  //       delay: 0.25,
  //     });
  //   }
  // });

  return (
    <div
      id="transition-element"
      className="fixed inset-x-0 bottom-0 top-0 z-40 w-screen rounded-b-3xl bg-indigo-blue"
    />
  );
};

export default PageLoader;
