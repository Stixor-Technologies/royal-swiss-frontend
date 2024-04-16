"use client";
import React, { useEffect, useState } from "react";
import { animatePageIn } from "@/utils/transition-animation";
import HeroSection from "@/components/home-page/hero/hero";
import AssociateGroup from "@/components/home-page/associate-group/associate-group";
import HeroVideo from "@/components/home-page/hero-video/hero-video";
import Gallery from "@/components/home-page/gallery/gallery";
import {
  AssociatesGroup,
  Images,
  ProfessionalServices,
  RSProjects,
} from "@/utils/types/types";
import {
  getAssociatesGroup,
  getBannerImages,
  getGallery,
  getProjects,
  getServices,
} from "@/utils/api-calls";
import Team from "@/components/home-page/team/team";
import HomePageProjects from "@/components/home-page/projects/projects";
import HomePageServices from "@/components/home-page/services/services";

export default function Home() {
  const [bannerImages, setBannerImages] = useState<[]>([]);
  const [associatesGroup, setAssociatesGroup] = useState<
    AssociatesGroup[] | []
  >([]);

  const [galleryImages, setGalleryImages] = useState<Images[] | []>([]);
  const [services, setServices] = useState<ProfessionalServices[] | []>([]);

  const [projects, setProjects] = useState<RSProjects[] | []>([]);

  useEffect(() => {
    animatePageIn();
  }, []);

  const fetchBannerImages = async () => {
    const resp = await getBannerImages();
    if (resp) {
      setBannerImages(resp?.banner_images?.data);
    }
  };

  const fetchAssociatesGroup = async () => {
    const resp = await getAssociatesGroup();
    if (resp) {
      setAssociatesGroup(resp);
    }
  };

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

  const fetchServices = async () => {
    const resp = await getServices();
    if (resp) {
      setServices(resp);
    }
  };

  useEffect(() => {
    fetchBannerImages();
    fetchAssociatesGroup();
    fetchProjects();
    fetchServices();
    fetchGallery();
  }, []);

  return (
    <div className=" min-h-screen">
      <HeroSection bannerImages={bannerImages} />
      <AssociateGroup assocGroups={associatesGroup} />
      <HeroVideo />
      <HomePageProjects projects={projects} />
      <HomePageServices services={services} />
      <Gallery galleryImages={galleryImages} />
      <Team />
    </div>
  );
}
