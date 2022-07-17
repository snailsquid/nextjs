import React from "react";
import Logo from "./Logo";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="w-full flex">
      <div className="mx-10 my-5 flex-row justify-between w-full flex items-center">
        <Logo />
        <div className="flex flex-row">
          <Button href="#" hovbold>
            FAQ
          </Button>
          <Button href="#" hovbold>
            Maps
          </Button>
          <Button href="#" hovbold>
            Categories
          </Button>
          <Button href="#" bold fill="theme-orange" color="black">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
