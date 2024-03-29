"use client";
import React, { useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const EssentialMetrics = () => {
  gsap.registerPlugin(ScrollTrigger);
  const metricsContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const slides: HTMLDivElement[] = gsap.utils.toArray(".metric");
      ScrollTrigger.create({
        trigger: metricsContainer.current,
        start: "top 90%",
        animation: gsap.from(slides, {
          textContent: 0,
          duration: 3,
          ease: "circ.inOut",
          snap: { textContent: 10 },
        }),
      });
    },
    { dependencies: [metricsContainer] },
  );

  return (
    <div
      ref={metricsContainer}
      className="mx-auto my-10 flex w-full max-w-[79.563rem] justify-between sm:my-16 lg:mb-[7.813rem] lg:mt-[13.563rem]"
    >
      <div className="about-metric-container ">
        <h5 className="about-metric-number">
          <span className="metric">2750</span>+
        </h5>

        <span className="about-metric-label">Project Completed</span>
      </div>

      <div className=" my-0.5 w-0.5 shrink-0 bg-gradient-to-b from-[rgba(139,139,139,0)] from-0% via-[#8B8B8B] via-40% to-[rgba(139,139,139,0)] to-90%" />

      <div className="about-metric-container">
        <h5 className="about-metric-number">
          <span className="metric">3789</span>+
        </h5>

        <span className="about-metric-label">Partners Worldwide</span>
      </div>

      <div className=" my-0.5 w-0.5 shrink-0 bg-gradient-to-b from-[rgba(139,139,139,0)] from-0% via-[#8B8B8B] via-40% to-[rgba(139,139,139,0)] to-90%" />

      <div className="about-metric-container">
        <h5 className="about-metric-number">
          <span className="metric">400</span>+
        </h5>

        <span className="about-metric-label">Employees</span>
      </div>
    </div>
  );
};

export default EssentialMetrics;
