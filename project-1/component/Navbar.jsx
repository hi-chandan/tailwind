import React from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";

const Navbar = () => {
  return (
    <section className="">
      <div className=" flex  justify-between p-2 items-center">
        <img src="/images/logo.png" alt="logo" className="ml-32" />

        <ul className="flex  space-x-14 font-bold mr-20">
          <li>Home</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>

      <div className=" m-auto sm:w-8/12 flex flex-col justify-center space-y-6 mt-10 ">
        <h1 className="text-5xl font-bold">CONTACT US</h1>
        <p className="uppercase text-gray-600 font-medium">
          lets's conntect we'are here to help , and we'd love to Hear from you!
          whethere you have a question, commient just to chat, you can reach out
          to us through the contact form of this page, or by phone, Email,
          social media,
        </p>
      </div>
      <div className=" bg-red-700 ">
        <Button icon={<MdMessage />} text={"VIA support mail"} />
        <Button icon={<MdMessage />} text={"VIA call"} />
      </div>
    </section>
  );
};

export default Navbar;
