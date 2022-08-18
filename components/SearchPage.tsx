import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Background from "./Background";
import Image from "next/image";
import Moment from "react-moment";

export default function SearchPage({ data }: any) {
  const maps = data.map((map: any) => (
    <div
      key={map.id}
      className="bg-theme-sub-blue w-full flex 2xs:flex-row flex-col rounded-lg px-3 py-3"
    >
      <div className="2xs:w-48 w-full h-32 relative top-0 left-0 z-20">
        <Image
          alt={`${map.title} Thumbnail`}
          src={map.image}
          layout="fill"
          objectFit="cover"
          className="absolute rounded-2xl z-20"
        />
      </div>
      <div className="flex flex-col my-2 2xs:mx-4 mx-1 montserrat">
        <div className="flex-row flex">
          <h1 className="text-white font-extrabold text-2xl flex justify-end">
            {map.title}
          </h1>
          <div className="flex flex-row h-full items-center">
            <div className="text-theme-sub-white ml-2 ">
              by{" "}
              <a
                href="https://www.google.com"
                className="underline underline-offset-1 h-fit"
              >
                {map.builder}
              </a>
            </div>
          </div>
        </div>
        <div className="text-theme-sub-white text-sm relative -top-1">
          <Moment fromNow>{map.created_at}</Moment>
        </div>
        <div className="text-white montserrat font-medium text-sm">
          {map.description}
        </div>
      </div>
    </div>
  ));
  return (
    <Background color="blue">
      <Navbar />
      <div className="mx-5 h-auto">
        <div className="flex flex-row w-full">
          <div className="w-full">
            <div className="p-3 bg-theme-sub-blue rounded-lg">
              <SearchBar separate />
            </div>
            <div className="inline-grid grid-cols-1 grid-flow-row-dense gap-5 my-5 w-full">
              {maps}
            </div>
          </div>
          <div className="bg-theme-sub-blue rounded-lg text-white text-2xl p-3 ml-5 lg:visible lg:relative absolute invisible">
            <span className="px-10">Categories</span>
          </div>
        </div>
        <div className="text-theme-sub-white">Created by hex#7025 © 2022</div>
      </div>
    </Background>
  );
}
