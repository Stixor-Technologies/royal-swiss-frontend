"use client";
import React, { useEffect, useState } from "react";
import Gallery from "@/components/home-page/gallery/gallery";
import { getGallery } from "@/utils/api-calls";
import { Images } from "@/utils/types/types";

export default function Home() {
  const [galleryImages, setGalleryImages] = useState<Images[] | []>([]);

  const fetchGallery = async () => {
    const resp = await getGallery();
    if (resp) {
      setGalleryImages(resp?.attributes?.gallery_images?.data);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="relative">
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}
