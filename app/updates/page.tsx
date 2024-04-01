"use client";
import React from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import EventCard from "@/components/events/event-card";

const Events = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className=" md:pt-[1.125rem]">
      <div className="container">
        <PageHeader
          heading="News And Updates"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          description="Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed tellus turpis."
        />

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:mt-[4.688rem] lg:gap-x-[3.563rem] lg:gap-y-20">
          {arr.map((item, index) => (
            <EventCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
