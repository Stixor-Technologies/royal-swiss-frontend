"use client";
import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

const VidePlayer = () => {
  return (
    <div
    //   className={`group relative overflow-hidden rounded-2xl md:rounded-[2.5rem] md:pt-[54.7%]`}
    >
      <ReactPlayer
        //   ref={videoPlayerRef}
        //   onPlayPause={playPauseHandler}
        //   playing={videoState?.playing}
        // className="clip-path-b bottom-0 left-0 right-0 top-0 !h-full !w-full md:absolute"
        className="clip-path-b bottom-0 left-0 right-0 top-0 !h-full !w-full"
        url={"/teaser-1.MP4"}
        onReady={() => {
          // setVideoLoaded(true);
        }}
      />

      {/* <div className="absolute flex top-3 left-5 items-center justify-center gap-2 md:gap-4 md:top-6 md:left-10">
      <Image src={Arrow} width={25} height={20} alt="name" />
      <span className="text-white text-xs font-avenir-thin md:text-xl">
        {name}
      </span>
    </div>

    <div
      className={`absolute size-[clamp(4rem,12vw,14rem)] rounded-full border-white bg-transparent-white border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center justify-center z-20 transition-all duration-300 backdrop-blur-lg md:border-4 ${
        videoState?.playing &&
        "invisible opacity-0 group-hover:opacity-100 group-hover:visible"
      }`}
    >
      <div className="w-full h-full relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlLang="en"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 400 400"
          className=""
        >
          <title>Circular Text Path</title>
          <defs>
            <path
              id="textcircle"
              d="M190,363
                   a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              transform="rotate(12,250,250)"
            />
          </defs>
          <g className="textcircle w-full h-full bg-green-500">
            <text
              textLength="940"
              className=" font-avenir-bold text-3xl fill-white"
            >
              <textPath
                xlinkHref="#textcircle"
                aria-label="MYSTIC REIGN"
                textLength="940"
              >
                MYSTIC REIGN | MYSTIC REIGN | MYSTIC REIGN |
              </textPath>
            </text>
          </g>
        </svg>

        <button
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          onClick={playPauseHandler}
        >
          {videoState?.playing ? (
            <Image
              src={PauseIcon}
              width={50}
              height={50}
              alt="pause-video"
              priority
            />
          ) : (
            <Image
              src={PlayIcon}
              width={52}
              height={52}
              alt="play-video"
              priority
            />
          )}
        </button>
      </div>
    </div> */}
    </div>
  );
};

export default VidePlayer;
