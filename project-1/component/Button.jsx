import React from "react";

const Button = ({ icon, text }) => {
  return (
    <div className="p-5 m-10 ml-60">
      <button className=" flex justify-center items-center rounded-lg gap-4 w-1/6  uppercase p-2 bg-black text-white">
        {icon}

        {text}
      </button>
    </div>
  );
};

export default Button;
