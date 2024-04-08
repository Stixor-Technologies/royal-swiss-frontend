"use client";
import React, { useEffect, useState } from "react";
import { animatePageIn } from "@/utils/transition-animation";
import HeroSection from "@/components/home-page/hero/hero";
import AssociateGroup from "@/components/home-page/associate-group/associate-group";
import HeroVideo from "@/components/home-page/hero-video/hero-video";
import { AssociatesGroup, Images } from "@/utils/types/types";
import {
  getAssociatesGroup,
  getBannerImages,
  getGallery,
} from "@/utils/api-calls";

export default function Home() {
  const [bannerImages, setBannerImages] = useState<[]>([]);
  const [associatesGroup, setAssociatesGroup] = useState<
    AssociatesGroup[] | []
  >([]);

  const [galleryImages, setGalleryImages] = useState<Images[] | []>([]);

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

  const fetchGallery = async () => {
    const resp = await getGallery();
    if (resp) {
      setGalleryImages(resp?.attributes?.gallery_images?.data);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  useEffect(() => {
    fetchBannerImages();
    fetchAssociatesGroup();
    fetchGallery();
  }, []);

  return (
    <div className=" min-h-screen">
      <HeroSection bannerImages={bannerImages} />
      <AssociateGroup assocGroups={associatesGroup} />
      <HeroVideo />
    </div>
  );
}
