import React from "react";
import Image from "next/image";
import background from "../assets/background.png";
export default function Home() {
  return (
    <div className="w-full h-full relative px-10 pb-5 z-10">
      <div className=" -z-10 relative h-full w-full rounded-2xl">
        <div className="absolute drop-shadow-lg ml-5 text-5xl z-20 text-white flex-col w-full h-full top-0 left-0 flex justify-center">
          <div>Searching for</div>
          <div>
            <span>Multiplayer</span> Map?
          </div>
        </div>
        <div className="-z-20 w-full h-full absolute bg-black rounded-3xl">
          <Image
            src={background}
            objectFit="cover"
            width="100%"
            layout="fill"
            height="100%"
            style={{ borderRadius: 24 }}
            alt='background pic'
            className="absolute z-10 opacity-70"
            />
        </div>
      </div>
    </div>
  );
}
