import React from "react";
import Image from "next/image";

const SkillSet = () => {
  return (
    <div className="container grid justify-items-center xl:grid-rows-[66px_auto_209px_auto]">
      <div className="col-start-1 row-span-3 row-start-1 w-full rounded-[0.625rem] bg-dark-grain-pattern bg-cover bg-no-repeat bg-blend-multiply md:rounded-[1.25rem] lg:rounded-[3.125rem] " />

      <div className="col-start-1 row-start-2 mb-[1.125rem] mt-[0.875rem] px-[1.031rem] text-center text-white sm:mb-7 sm:mt-7 md:mt-10 md:px-6 lg:mb-9 lg:px-[4.375rem] xl:mt-0">
        <h2 className="mb-4 font-righteous text-[1.563rem] leading-[1.875rem] md:text-5xl md:leading-[2.75rem] lg:mb-[1.125rem] lg:text-[3.75rem] lg:leading-[4.5rem]">
          Our Skillset and Experience
        </h2>
        <p className="text-[0.813rem] font-light leading-[0.975rem] md:text-base md:leading-[1.25rem] lg:text-[1.375rem] lg:leading-[1.829rem]">
          The project has been handed over for development to Habib Rafiq (Pvt.)
          Ltd., having an accredited team of dedicated professionals, and a
          proven track record. Having more than 6 decades of experience in real
          estate development and customer satisfaction, the project’s transition
          from plan to reality is a matter of time.
        </p>
      </div>

      <div className="col-start-1 row-span-3 row-start-3 flex items-center justify-center overflow-hidden rounded-2xl md:w-[85%] md:rounded-[1.875rem]">
        <Image
          src={"/images/skill-certification.png"}
          width={1128}
          height={507}
          alt=""
          priority
          className=""
        />
      </div>
    </div>
  );
};

export default SkillSet;
