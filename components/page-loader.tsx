"use client";
import React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";

const PageLoader = () => {
  return (
    <div
      id="transition-element"
      className="fixed inset-x-0 bottom-0 top-0 z-50 flex w-screen items-center justify-center rounded-b-3xl bg-indigo-blue"
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
