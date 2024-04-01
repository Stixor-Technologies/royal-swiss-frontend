"use client";
import React, { useRef } from "react";
import ReactPlayer from "react-player";

const VidePlayer = () => {
  const videoPlayerRef = useRef(null);

  return (
    <ReactPlayer
      ref={videoPlayerRef}
      className=""
      url={"https://www.youtube.com/watch?v=nf1t71nf9Cw"}
      controls={true}
      width="100%"
      height="100%"
    />
  );
};

export default VidePlayer;
