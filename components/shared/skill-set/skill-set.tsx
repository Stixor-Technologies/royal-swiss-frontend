import React from "react";
import Image from "next/image";

const SkillSet = () => {
  return (
    <div className="container grid grid-rows-[66px_auto_209px_auto] justify-items-center">
      <div className="col-start-1 row-span-3 row-start-1 w-full rounded-[3.125rem] bg-dark-grain-pattern bg-cover bg-no-repeat bg-blend-multiply " />

      <div className="col-start-1 row-start-2 mb-9 px-[4.375rem] text-center text-white">
        <h2 className="mb-[1.125rem] font-righteous text-[3.75rem] leading-[4.5rem]">
          Our Skillset and Experience
        </h2>
        <p className="text-[1.375rem] font-light leading-[1.829rem]">
          The project has been handed over for development to Habib Rafiq (Pvt.)
          Ltd., having an accredited team of dedicated professionals, and a
          proven track record. Having more than 6 decades of experience in real
          estate development and customer satisfaction, the project’s transition
          from plan to reality is a matter of time.
        </p>
      </div>

      <div className="col-start-1 row-span-3 row-start-3">
        <Image
          src={"/images/skill-certification.png"}
          width={1128}
          height={507}
          alt=""
        />
      </div>
    </div>
  );
};

export default SkillSet;
