import React from "react";

const ContactHeader = () => {
  return (
    <section className="flex justify-center ">
      <div className=" sm:w-8/12 w-full   flex flex-col justify-center  space-y-2 mt-10 ">
        <h1 className="text-5xl font-bold">CONTACT US</h1>
        <p className="uppercase text-gray-600 font-medium p-2 ">
          lets's conntect we'are here to help , and we'd love to Hear from you!
          whethere you have a question, commient just to chat, you can reach out
          to us through the contact form of this page, or by phone, Email,
          social media,
        </p>
      </div>
    </section>
  );
};

export default ContactHeader;
