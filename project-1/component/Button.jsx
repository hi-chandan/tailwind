import React from "react";

const Button = ({ icon, text }) => {
  return (
    <button className=" flex justify-center items-center rounded-lg gap-2 w-full sm:w-60  uppercase p-2 bg-black text-white">
      {icon}

      {text}
    </button>
  );
};

export default Button;
