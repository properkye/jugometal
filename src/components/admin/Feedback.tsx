"use client";
import { useAdminContext } from "@/context/adminContext";
import React from "react";

import { IoMdClose } from "react-icons/io";

const Feedback: React.FC = () => {
  const { setFeedback, feedback } = useAdminContext();

  return (
    <div className="h-[300px] w-[500px] bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 flex justify-between flex-col rounded-lg z-[1000]">
      {/* Add your content here */}
      <div className="absolute top-6 right-6 cursor-pointer">
        <IoMdClose size={26} onClick={() => setFeedback(false, {})} />
      </div>

      <div>
        <h1 className="text-[2rem] tracking-tighter font-bold">
          {feedback.title}
        </h1>
        <p className="text-[.9rem] tracking-tight text-gray-400 font-thin">
          {feedback.subtitle}
        </p>
      </div>

      <button
        className="text-[.9rem] tracking-tight text-white bg-black rounded-lg mt-10 px-8 py-2 transition duration-300 hover:bg-gray-700"
        onClick={() => feedback.action!()}
      >
        Zatvorite
      </button>
    </div>
  );
};

export default Feedback;
