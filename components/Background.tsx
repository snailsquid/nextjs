import React from "react";

interface Background {
    color:string,
    children:any,
    etc?:string,
}

export default function Background( {color , children , etc}:Background) : JSX.Element{
  let classNames = "fixed h-full w-full -z-10";
  classNames += etc;
  if (color === "white") classNames += " bg-theme-white";
  if (color === "blue") classNames += " bg-theme-blue";
  return <div className={classNames}>{children}</div>;
}
