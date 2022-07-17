import React from "react";

export default function Button({
  children,
  outline,
  fill,
  color,
  href,
  hovbold,
  bold,
}) {
  let classNames = "px-4 py-2 transition-all rounded-xl montserrat ";
  const acl = (props) => (classNames += props);
  const otherClass = "hover:-translate-y-1 transition-all";
  if (color) {
    acl(` text-${color}`);
  } else {
    acl(" text-white");
  }
  if (fill) acl(` bg-${fill}`);
  if (outline) acl(" border");
  if (hovbold) {
    acl(" hover:font-bold");
  } //on hover
  if (bold) acl(" font-bold");
  return (
    <div className={otherClass}>
      <a className={classNames} href={href}>
        {children}
      </a>
    </div>
  );
}
