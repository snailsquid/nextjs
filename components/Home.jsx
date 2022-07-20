import React from "react";
import Image from "next/image";
import background from "../assets/background.png";
export default function Home() {
  return (
    <div className="w-full h-full relative px-10 pb-14 z-10">
      <div className=" -z-10 relative h-full w-full rounded-2xl">
        <div className="w-full h-full pb-12">
          <div className="-z-20 flex w-full h-full relative bg-black rounded-3xl">
            <div className="absolute drop-shadow-lg ml-5 text-5xl z-20 text-white flex-col w-full h-full top-0 left-0 flex justify-center">
              <div>Searching for a</div>
            <div>
              <span>Multiplayer</span> Map?
            </div>
          </div>
            <Image
              src={background}
              objectFit="cover"
              layout="fill"
              style={{ borderRadius: 24 }}
              alt='background pic'
              className="absolute z-10 opacity-70"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
