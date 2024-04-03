"use client";
import React from "react";
import { gsap, DrawSVGPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

export default function Home() {
  gsap.registerPlugin(DrawSVGPlugin);

  useGSAP(() => {
    gsap.set("#path", { visibility: "visible" });
    gsap.set("#path", { drawSVG: "0" });

    const t1 = gsap.timeline();

    t1.to(
      "#path",
      { duration: 1.5, drawSVG: true, ease: "power1.inOut" },
      "+=0.5",
    );
  });

  return (
    <div className="relative min-h-screen">
      <div className="mt-128 absolute inset-0 mb-20 hidden flex-col justify-center lg:flex">
        <svg
          className="w-full"
          height="700"
          viewBox="0 0 1440 319"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path"
            opacity="0.3"
            d="M-14 24.3203C42.9421 24.3203 85.0955 54.2545 116.865 84.6472C132.935 100.021 148.262 117.387 162.748 134.204C166.347 138.382 169.892 142.522 173.415 146.638C184.569 159.667 195.516 172.454 207.336 185.43C267.286 251.249 338.521 309.57 466.532 309.57C611.448 309.57 719.509 243.984 832.229 168.895C839.355 164.148 846.534 159.332 853.774 154.475C956.221 85.7439 1070.61 9 1213.27 9C1298.69 9 1372.94 34.5473 1424.75 59.0258C1450.87 71.3664 1471.92 83.7353 1486.62 93.1476C1493.98 97.8644 1499.8 101.869 1503.91 104.799C1505.97 106.265 1507.61 107.465 1508.8 108.354C1509.05 108.545 1509.29 108.721 1509.5 108.882C1509.79 109.098 1510.04 109.288 1510.25 109.45C1510.44 109.592 1510.59 109.714 1510.72 109.814L1510.9 109.947L1511 110.026"
            stroke="#EADDA8"
            stroke-width="110px"
          />
        </svg>
      </div>
    </div>
  );
}
