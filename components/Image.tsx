import React from "react";

export default function Image(prop:{ src:string }) {
  return <img src={prop.src} alt="Background Shaders" />;
}
