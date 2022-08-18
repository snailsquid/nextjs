import React from "react";

interface Background {
  color: string;
  children: any;
  etc?: string;
}

export default function Background({
  color,
  children,
  etc,
}: Background): JSX.Element {
  let classNames = "fixed overflow-auto h-full w-full overflow-x-hidden -z-10 scrollbar ";
  if(etc) classNames += etc;
  if (color === "white") classNames += " bg-theme-white";
  if (color === "blue") classNames += " bg-theme-blue";
  return <div className={classNames}>{children}</div>;
}
