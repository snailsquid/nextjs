import React from "react";

interface button {
  children: any,
  outline?: string,
  fill?:string,
  color?:string,
  href?:string,
  hovbold?:boolean,
  bold?:boolean,
  size?:string,
  etc?:string
}

export default function Button({
  children,
  outline,
  fill,
  color,
  href,
  hovbold,
  bold,
  size,
  etc
}:button) {
  let classNames = "transition-all rounded-xl montserrat ";
  const acl = (props:string) => (classNames += props);
  const otherClass = "hover:-translate-y-1 transition-all";
  if(size){
    if(size=='small') {
      acl(' px-4 py-2 text-m')
    }
  }
  if (color) {
    acl(` text-${color}`);
  } else {
    acl(" text-white");
  }
  if (fill=='theme-orange') {
    acl(` bg-theme-orange`);
  }else{
    acl(' bg-transparent')
  }
  if(etc) {
    acl(etc)
  }
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
