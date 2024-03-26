import ContactForm from "@/components/contact-form/contact-form";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="container">
      <div className="mx-auto flex gap-[62px] lg:w-[92.78%]">
        <h2 className="mb-[1.608rem] w-[49.13%] text-center font-righteous text-[3.125rem] leading-[3.88rem] text-indigo-blue md:mb-12 md:text-[3.479rem] md:leading-[4.32rem]">
          Contact Us
        </h2>
        <ContactForm isComponent />
      </div>
    </div>
  );
};

export default GetInTouch;
