"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/transition-animation";

const PageLoader = () => {
  const router = useRouter();

  const handleLoaderAnimation = () => {
    animatePageOut("", router);
  };

  useEffect(() => {
    window.addEventListener("popstate", handleLoaderAnimation);

    return () => {
      window.removeEventListener("popstate", handleLoaderAnimation);
    };
  }, []);

  return (
    <div
      id="transition-element"
      className="fixed inset-x-0 bottom-0 top-0 z-50 flex w-screen items-center justify-center bg-indigo-blue"
    >
      <Image
        id="loader-logo"
        src={Logo}
        width={200}
        height={200}
        alt="Rs-Logo"
      />
    </div>
  );
};

export default PageLoader;
