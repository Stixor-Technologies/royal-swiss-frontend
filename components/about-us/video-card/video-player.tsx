"use client";
import React from "react";
import ReactPlayer from "react-player";

const VidePlayer = () => {
  return (
    <div>
      <ReactPlayer
        className="clip-path-b bottom-0 left-0 right-0 top-0 !h-full !w-full"
        url={"/teaser-1.MP4"}
        onReady={() => {}}
      />
    </div>
  );
};

export default VidePlayer;
