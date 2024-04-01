"use client";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VidePlayer = () => {
  const videoPlayerRef = useRef(null);
  const [videoState, setVideoState] = useState({
    playing: false,
  });

  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing });
  };
  return (
    <ReactPlayer
      ref={videoPlayerRef}
      className=""
      playing={videoState?.playing}
      url={"https://www.youtube.com/watch?v=nf1t71nf9Cw"}
      controls={true}
      width="100%"
      height="100%"
    />
  );
};

export default VidePlayer;
