import React from "react";

export default function Background({ color, children, etc }) {
  let classNames = "flex fixed h-full w-full -z-10";
  classNames += etc;
  if (color === "white") classNames += " bg-theme-white";
  if (color === "blue") classNames += " bg-theme-blue";
  return <div className={classNames}>{children}</div>;
}
