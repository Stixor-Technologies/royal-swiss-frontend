"use client";
import React, { FC, useRef } from "react";
import ReactPlayer from "react-player";

type PlayerProps = {
  isAutoPlay?: boolean;
};

const VidePlayer: FC<PlayerProps> = ({ isAutoPlay }) => {
  const videoPlayerRef = useRef(null);

  return (
    <ReactPlayer
      ref={videoPlayerRef}
      playing={isAutoPlay}
      className=""
      url={"https://www.youtube.com/watch?v=nf1t71nf9Cw"}
      controls={true}
      width="100%"
      height="100%"
    />
  );
};

export default VidePlayer;
