import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <section className="">
      <div className=" flex  justify-between  items-center w-11/12 pt-5">
        <img src="/images/logo.png" alt="logo" className="sm:ml-16 ml-8" />

        <ul className="flex gap-4   font-bold">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
