import React from "react";
import Image from "next/image";

const AssociateGroup = () => {
  return (
    <section className="pt-48">
      <div className="container grid justify-items-center xl:grid-rows-[62px_auto_209px_auto]">
        <div className="col-start-1 row-span-3 row-start-1 w-full rounded-[0.938rem] bg-dark-grain-pattern bg-cover bg-no-repeat bg-blend-multiply md:rounded-[1.25rem] lg:rounded-[2.5rem] " />

        <div className="col-start-1 row-start-2 mb-[2.03rem] mt-[0.875rem] px-[1.438rem] text-white sm:my-7 md:my-10 md:px-6 lg:px-[4rem] xl:mb-[3.875rem] xl:mt-0">
          <h2 className="mb-2 font-righteous text-lg leading-[1.35rem] text-yellow md:mb-[1.125rem] md:text-4xl md:leading-[2.7rem]">
            What We Offer
          </h2>
          <p className="text-[0.813rem] font-light leading-[1.056rem] md:text-[1.375rem] md:leading-[1.829rem]">
            It brings a unique mix of residential, commercial, religious,
            cultural, and entertainment marvels together in harmony with each
            other. In addition, we boast a distinguishing array of features. It
            brings a unique mix of residential, commercial, religious, cultural,
            and entertainment marvels together in harmony with each other. In
            addition, we boast a distinguishing array of features
          </p>
        </div>

        <div className="col-start-1 row-span-3 row-start-3 flex items-center justify-center overflow-hidden rounded-2xl bg-yellow md:w-[86.1%] md:rounded-[1.875rem] lg:pl-[4.438rem]">
          <div className="flex w-full items-center justify-between">
            <h3>The Associate and Group</h3>

            <div className="col-span-4 col-start-10 flex items-center gap-2">
              <button
                className="group relative size-[3.875rem] rotate-90"
                aria-label="Previous page"
              >
                <div className="relative h-full w-full origin-center overflow-hidden rounded-full bg-indigo-blue duration-300 group-hover:scale-75">
                  <div className="pointer-events-none absolute inset-0">
                    <svg
                      viewBox="0 0 108 108"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="duration-300 group-hover:translate-y-full group-hover:scale-125"
                    >
                      <line
                        x1="54.3661"
                        y1="36.6357"
                        x2="54.3661"
                        y2="70.6685"
                        stroke="#FFFBF3"
                        stroke-width="1.5"
                      ></line>
                      <path
                        d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                        stroke="#FFFBF3"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute inset-0">
                    <svg
                      viewBox="0 0 108 108"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="-translate-y-full scale-125 duration-300 group-hover:translate-y-0"
                    >
                      <line
                        x1="54.3661"
                        y1="36.6357"
                        x2="54.3661"
                        y2="70.6685"
                        stroke="#FFFBF3"
                        stroke-width="1.5"
                      ></line>
                      <path
                        d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                        stroke="#FFFBF3"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
              <button
                className="group relative size-[3.875rem] -rotate-90"
                aria-label="Next page"
              >
                <div className="relative h-full w-full origin-center overflow-hidden rounded-full bg-indigo-blue duration-300 group-hover:scale-75">
                  <div className="pointer-events-none absolute inset-0">
                    <svg
                      viewBox="0 0 108 108"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="duration-300 group-hover:translate-y-full group-hover:scale-125"
                    >
                      <line
                        x1="54.3661"
                        y1="36.6357"
                        x2="54.3661"
                        y2="70.6685"
                        stroke="#FFFBF3"
                        stroke-width="1.5"
                      ></line>
                      <path
                        d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                        stroke="#FFFBF3"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute inset-0">
                    <svg
                      viewBox="0 0 108 108"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="-translate-y-full scale-125 duration-300 group-hover:translate-y-0"
                    >
                      <line
                        x1="54.3661"
                        y1="36.6357"
                        x2="54.3661"
                        y2="70.6685"
                        stroke="#FFFBF3"
                        stroke-width="1.5"
                      ></line>
                      <path
                        d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057"
                        stroke="#FFFBF3"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* <Image
            src={"/images/skill-certification.png"}
            width={1128}
            height={507}
            alt=""
            priority
            className=""
          /> */}
        </div>
      </div>
    </section>
  );
};

export default AssociateGroup;
