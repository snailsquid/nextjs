import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import background from "../assets/background.png";
import Link from "next/link";
import SearchBar from "./SearchBar";

const ChangingText = dynamic(() => import("./ChangingText"));

export default function Home() {

  return (
    <div className="w-full h-full relative px-0 sm:px-10 pb-14 z-10">
      <div className=" -z-10 relative h-full w-full">
        <div className="w-full relative -z-0 h-full pb-12">
          <div className="-z-20 flex w-full h-full relative bg-black rounded-xl sm:rounded-3xl">
            <div className="absolute drop-shadow-lg ml-5 text-4xl sm:text-6xl z-20 text-white flex-col w-full h-full top-0 left-0 flex justify-center">
              <div>Searching for</div>
              <div>
                <ChangingText /> Map?
              </div>
              <div className="max-w-lg w-full pr-10">
                <SearchBar/>
              </div>
            </div>
            <Image
              src={background}
              objectFit="cover"
              layout="fill"
              alt="background pic"
              className="absolute z-10 opacity-80 rounded-xl sm:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

