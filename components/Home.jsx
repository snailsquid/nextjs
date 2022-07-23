import React from "react";
import Image from "next/image";
import background from "../assets/background.png";
import Button from "./Button";
export default function Home() {
  return (
    <div className="w-full h-full relative px-10 pb-14 z-10">
      <div className=" -z-10 relative h-full w-full rounded-2xl">
        <div className="w-full relative -z-0 h-full pb-12">
          <div className="-z-20 flex w-full h-full relative bg-black rounded-3xl">
            <div className="absolute drop-shadow-lg ml-5 text-5xl z-20 text-white flex-col w-full h-full top-0 left-0 flex justify-center">
              <div>Searching for a</div>
            <div>
              <span>Multiplayer</span> Map?
            </div>
            <div className="text-lg montserrat font-semibold flex flex-row bg-white w-fit mt-5 rounded-full">
              <span className="px-10 text-theme-gray py-1">type a keyword</span>
              <div href="" className="bg-theme-orange flex rounded-full px-5 text-black"><a cla href="">Search</a></div>
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


const newUrl = '/maps'

const goMap = () => {
  window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl)
}
