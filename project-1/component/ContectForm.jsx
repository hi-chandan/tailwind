import React, { useState } from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";

import { IoCall } from "react-icons/io5";
const ContectForm = () => {
  const [getvalue, setvalue] = useState({
    name: "",
    email: "",
    text: "",
  });

  function inputevent(e) {
    const { name, value } = e.target;

    setvalue((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  }

  function showevent(event) {
    alert(
      `the name is ${getvalue.name} email name is ${getvalue.email} text is ${getvalue.text}`
    );
  }

  return (
    <section className=" flex justify-center">
      <div className="flex sm:w-8/12 w-full flex-col sm:flex-row ">
        <div className=" sm:w-1/2 w-full p-2 space-y-4 flex flex-col items-center justify-center">
          <div className=" flex gap-4 w-full ">
            <Button icon={<MdMessage />} text={"From via Email"} />
            <Button text={" via call"} icon={<IoCall />} />
          </div>
          <button className="border-2 border-black p-2 rounded-lg w-full font-bold flex justify-center items-center gap-2 text-lg">
            <MdMessage />
            VIA EMAIL FORM
          </button>
          <form
            action=""
            onSubmit={showevent}
            className=" w-full flex flex-col items-center justify-center"
          >
            <div className="w-11/12 ">
              <label
                htmlFor="name"
                className="cursor-pointer relative top-3 bg-white left-2"
              >
                NAME
              </label>
              <input
                type="text"
                name="name"
                onChange={inputevent}
                className="w-full p-2 border-2 rounded-sm border-gray-800"
              />
            </div>
            <div className="w-11/12">
              <label
                htmlFor="email"
                className="cursor-pointer relative top-3 bg-white left-2"
              >
                EMAIL
              </label>
              <input
                type="text"
                name="email"
                onChange={inputevent}
                className="w-full p-2 border-2 rounded-sm border-gray-800"
              />
            </div>
            <div className="w-11/12">
              <label
                htmlFor="text"
                className="cursor-pointer relative top-3 bg-white left-2"
              >
                Message
              </label>
              <textarea
                name="text"
                onChange={inputevent}
                className=" w-full h-28 border-2 border-gray-800 rounded-sm p-2"
              />
            </div>
            <div className="w-11/12 flex justify-end">
              <input
                type="submit"
                className="border-2 p-2 w-6/12 bg-black text-white font-bold rounded-md  justify-end"
              />
            </div>
          </form>
        </div>
        <div className="">
          <img src="/images/contact.svg" className="mb-14" alt="" srcset="" />
        </div>
      </div>
    </section>
  );
};

export default ContectForm;
