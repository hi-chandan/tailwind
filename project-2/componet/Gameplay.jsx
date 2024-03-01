import React, { useState } from "react";
import Roledice from "./Roledice";

const Gameplay = () => {
  const array = [1, 2, 3, 4, 5, 6];

  const [seletedNumber, setSelectedNumber] = useState();
  console.log(seletedNumber);
  return (
    <section className="">
      <div className="p-8  w-2/12 flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold">0</h1>
        <p className="font-bold">Total Score</p>
      </div>
      <div className="flex ">
        <div className=" sm:w-3/12 w-4/12 grid justify-end p-3 space-y-4 ">
          <h1 className="font-bold ">Select Number</h1>
          {array.map((value, i) => (
            <button
              className={`border-2 border-black p-2  h-14 w-14 font-bold text-lg ${
                seletedNumber == value
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }
        `}
              onClick={() => setSelectedNumber(value)}
              disabled={seletedNumber == value}
            >
              {value}
            </button>
          ))}
        </div>
        <Roledice />
      </div>
    </section>
  );
};

export default Gameplay;
