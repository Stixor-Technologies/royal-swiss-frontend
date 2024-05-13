"use client";
import { animatePageIn } from "@/utils/transition-animation";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <section className="overflow-hidden px-5 py-20 lg:pb-36">
      <div className="animate_top mx-auto max-w-[518px] text-center">
        <Image
          src="/images/404.svg"
          alt="404"
          className="mb-7.5 mx-auto"
          width={400}
          height={400}
          priority
        />

        <h2 className="mt-8 font-righteous text-3xl leading-tight text-indigo-blue md:text-[2.5rem] md:leading-[4.32rem]">
          This Page Does Not Exist
        </h2>

        <p className="my-5 text-center text-lg font-light leading-tight text-black">
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2.5 rounded-full bg-indigo-blue px-6 py-3 font-medium text-white transition-opacity duration-300 ease-in-out hover:opacity-90"
        >
          Return to Home
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
