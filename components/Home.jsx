import React from "react";
import Image from "next/image";
import background from "../assets/background.png";
export default function Home() {
  return (
    <div className="w-full h-full relative px-10 pb-5 z-10">
      <div className="bg-white -z-10 relative h-full w-full rounded-3xl">
        <div className="absolute z-20 text-white flex-col w-full h-full top-0 left-0 flex justify-center">
          <div>Searching for</div>
          <div>
            <span>Multiplayer</span> Map?
          </div>
        </div>
        <Image
          src={background}
          objectFit="cover"
          width="100%"
          layout="fill"
          height="100%"
          style={{ borderRadius: 20 }}
        />
      </div>
    </div>
  );
}
