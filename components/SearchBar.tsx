import React, { useEffect, useState } from "react";
import Link from "next/link";
import Filter from "../assets/filterIcon.svg";
import Image from "next/image";

export default function SearchBar({ separate }: any) {
  const [search, setSearch] = useState(null);

  function goMap() {
    if (search) return `/maps/${search}`;
    return "/maps";
  }

  useEffect(() => {
    document.getElementById("search")!.addEventListener("keypress", (event) => {
      console.log(event.key);
      if (event.key == "Enter") {
        event.preventDefault();
        document.getElementById("searchButton")!.click();
      }
    });
  });
  const FiltersSearch = () => {
    if (separate) {
      return (
        <div className="flex flex-row ml-3 w-fit">
          <a href="#" className="h-full flex items-center">
            <Image src={Filter} layout="fixed" width="30px" height="30px" alt="filter"/>
          </a>
          <Link href={goMap()} passHref>
            <a id="searchButton">
              <div className="bg-theme-orange flex items-center justify-center rounded-full px-5 text-black ml-3 h-full">
                Search
              </div>
            </a>
          </Link>
        </div>
      );
    }
    return <div></div>;
  };
  const SearchButton = ({ etc }: any) => {
    if (!separate) {
      return (
        <div className="bg-theme-orange flex items-center justify-center rounded-full px-5 text-black h-full">
          <Link href={goMap()} passHref>
            <a id="searchButton">Search</a>
          </Link>
        </div>
      );
    }
    return <div></div>;
  };
  return (
    <div className="lg:text-lg montserrat font-semibold flex flex-row text-lg">
      <div className="flex flex-row bg-white w-full justify-between rounded-full">
        <span className=" text-theme-gray w-full">
          <input
            autoComplete="off"
            type="text"
            onChange={(e: any) => {
              setSearch(e.currentTarget.value);
            }}
            id="search"
            placeholder="type a keyword"
            className="w-full rounded-full py-1 px-3 lg:py-1 lg:px-3 focus:outline-none"
          />
        </span>
        <SearchButton />
      </div>
      <FiltersSearch />
    </div>
  );
}
