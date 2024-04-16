"use client";
import React, { useEffect, useState } from "react";
import { animatePageIn } from "@/utils/transition-animation";
import HeroSection from "@/components/home-page/hero/hero";
import AssociateGroup from "@/components/home-page/associate-group/associate-group";
import HeroVideo from "@/components/home-page/hero-video/hero-video";
import Gallery from "@/components/home-page/gallery/gallery";
import HomePageProjects from "@/components/home-page/projects/projects";
import HomePageServices from "@/components/home-page/services/services";
import GetInTouch from "@/components/shared/get-in-touch/get-in-touch";
import Dealers from "@/components/shared/dealers/dealers";
import {
  AssociatesGroup,
  Images,
  ProfessionalServices,
  RSProjects,
  TeamMembers,
} from "@/utils/types/types";
import {
  getAssociatesGroup,
  getBannerImages,
  getGallery,
  getProjects,
  getServices,
  getTeam,
} from "@/utils/api-calls";
import Team from "@/components/home-page/team/team";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/all";

export default function Home() {
  gsap.registerPlugin(ScrollSmoother);

  const [bannerImages, setBannerImages] = useState<[]>([]);
  const [associatesGroup, setAssociatesGroup] = useState<
    AssociatesGroup[] | []
  >([]);
  const [galleryImages, setGalleryImages] = useState<Images[] | []>([]);
  const [services, setServices] = useState<ProfessionalServices[] | []>([]);
  const [projects, setProjects] = useState<RSProjects[] | []>([]);
  const [team, setTeam] = useState<TeamMembers[] | []>([]);
  const [loadingHero, setLoading] = useState<boolean>(true);

  useGSAP(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth > 768) {
      ScrollSmoother.create({ smooth: 2, smoothTouch: 0 });
    }
  }, []);

  const fetchBannerImages = async () => {
    const resp = await getBannerImages();
    if (resp) {
      setBannerImages(resp?.banner_images?.data);
    }
    setLoading(false);
    animatePageIn();
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

  const fetchTeam = async () => {
    const resp = await getTeam();
    if (resp) {
      setTeam(resp);
    }
  };

  useEffect(() => {
    fetchBannerImages();
    fetchAssociatesGroup();
    fetchProjects();
    fetchServices();
    fetchGallery();
    fetchTeam();
  }, []);

  return (
    <div className=" min-h-screen">
      <HeroSection isLoading={loadingHero} bannerImages={bannerImages} />
      <AssociateGroup assocGroups={associatesGroup} />
      <HeroVideo />
      <HomePageProjects projects={projects} />
      <HomePageServices services={services} />
      <Gallery galleryImages={galleryImages} />
      <Team team={team} />
      <div className="-mt-[4.625rem] lg:mt-0">
        <GetInTouch />
      </div>
      <Dealers />
    </div>
  );
}
