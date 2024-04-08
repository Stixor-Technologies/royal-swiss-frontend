"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/shared/page-header/page-header";
import EventCard from "@/components/events/event-card";
import { getEvents } from "@/utils/api-calls";
import { Events } from "@/utils/types/types";
import Spinner from "@/components/shared/spinner/spinner";
import { animatePageIn } from "@/utils/transition-animation";

const Updates = () => {
  const [events, setEvents] = useState<Events[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    animatePageIn();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const resp = await getEvents();
      if (resp) {
        setEvents(resp);
      }
      setLoading(false);
    };
    fetchEvents();
  }, []);
  return (
    <section className=" md:pt-[1.125rem]">
      <div className="container">
        <PageHeader
          heading="News And Updates"
          tagline="Lorem ipsum dolor sit amet consectetur. Velit eu."
          description="Lorem ipsum dolor sit amet consectetur. Mi sed lorem tristique dignissim fermentum volutpat sed aliquet et. Ipsum sit risus sed tellus turpis."
        />

        {loading ? (
          <div className="flex min-h-[50vh]">
            <Spinner />
          </div>
        ) : events?.length > 0 ? (
          <div className="mb-[6.5rem] mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:mb-[6.75rem] md:mt-[4.688rem] lg:gap-x-[3.563rem] lg:gap-y-20">
            {events?.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[60vh] items-center justify-center">
            <h6 className="font-righteous text-3xl tracking-wider text-dark-blue">
              No Events Found
            </h6>
          </div>
        )}
      </div>
    </section>
  );
};

export default Updates;
