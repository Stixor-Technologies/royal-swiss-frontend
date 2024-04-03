"use client";
import React, { useEffect, useState } from "react";
import HomePageProjects from "@/components/home-page/projects/projects";
import { getProjects } from "@/utils/api-calls";
import { RSProjects } from "@/utils/types/types";
import { animatePageIn } from "@/utils/transition-animation";

export default function Home() {
  const [projects, setProjects] = useState<RSProjects[] | []>([]);

  useEffect(() => {
    animatePageIn();
  }, []);

  const fetchProjects = async () => {
    const resp = await getProjects();
    if (resp) {
      setProjects(resp);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className="relative min-h-screen">
      <HomePageProjects projects={projects} />
    </div>
  );
}
