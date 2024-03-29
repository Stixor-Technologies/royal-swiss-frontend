"use client";
import React from "react";
import ReactPlayer from "react-player";

const VidePlayer = () => {
  return (
    <ReactPlayer
      className=""
      url={"https://www.youtube.com/watch?v=nf1t71nf9Cw"}
      config={{
        youtube: {
          playerVars: { control: 1 },
        },
      }}
      width="100%"
      height="100%"
    />
  );
};

export default VidePlayer;
