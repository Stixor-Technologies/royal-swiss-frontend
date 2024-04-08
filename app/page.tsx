"use client";
import React, { useEffect, useState } from "react";
import HomePageProjects from "@/components/home-page/projects/projects";
import Gallery from "@/components/home-page/gallery/gallery";
import Team from "@/components/home-page/team/team";
import { getGallery, getProjects } from "@/utils/api-calls";
import { Images, RSProjects } from "@/utils/types/types";

export default function Home() {
  const [projects, setProjects] = useState<RSProjects[] | []>([]);
  const [galleryImages, setGalleryImages] = useState<Images[] | []>([]);

  const fetchProjects = async () => {
    const resp = await getProjects();
    if (resp) {
      setProjects(resp);
    }
  };

  const fetchGallery = async () => {
    const resp = await getGallery();
    if (resp) {
      setGalleryImages(resp?.attributes?.gallery_images?.data);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchGallery();
  }, []);

  return (
    <div className="relative">
      <HomePageProjects projects={projects} />
      <Gallery galleryImages={galleryImages} />
      <Team />
    </div>
  );
}
