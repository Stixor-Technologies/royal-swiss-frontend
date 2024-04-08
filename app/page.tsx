"use client";
import React, { useEffect, useState } from "react";
import { animatePageIn } from "@/utils/transition-animation";
import HeroSection from "@/components/home-page/hero/hero";
import AssociateGroup from "@/components/home-page/associate-group/associate-group";
import HeroVideo from "@/components/home-page/hero-video/hero-video";
import { AssociatesGroup } from "@/utils/types/types";
import { getAssociatesGroup, getBannerImages } from "@/utils/api-calls";

export default function Home() {
  const [associatesGroup, setAssociatesGroup] = useState<
    AssociatesGroup[] | []
  >([]);

  const [bannerImages, setBannerImages] = useState<[]>([]);

  useEffect(() => {
    animatePageIn();
  }, []);

  const fetchAssociatesGroup = async () => {
    const resp = await getAssociatesGroup();
    if (resp) {
      setAssociatesGroup(resp);
    }
  };

  const fetchBannerImages = async () => {
    const resp = await getBannerImages();
    if (resp) {
      setBannerImages(resp?.banner_images?.data);
    }
  };

  useEffect(() => {
    fetchBannerImages();
    fetchAssociatesGroup();
  }, []);

  return (
    <div className=" min-h-screen">
      <HeroSection bannerImages={bannerImages} />
      <AssociateGroup assocGroups={associatesGroup} />
      <HeroVideo />
    </div>
  );
}
