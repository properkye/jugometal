"use client";
import React from "react";
import { motion } from "framer-motion";

import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

interface SidemenuProps {
  // open: boolean;
  setOpen: (state: boolean) => void;
}

const Sidemenu: React.FC<SidemenuProps> = ({ setOpen }) => {
  return (
    <motion.aside
      className="w-[100%] h-[100vh] fixed top-0 right-0 bottom-0 bg-white z-[150] md:w-[70vw] xl:w-[900px]"
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {/* Add your content here */}
      <div className="wrapper py-6 relative">
        <AiOutlineClose
          size={30}
          onClick={() => setOpen(!open)}
          className="absolute top-6 right-2 cursor-pointer"
        />

        <div className="border border-[#e9e9e9] w-full mt-20 rounded-lg py-2 px-4 flex justify-between items-center bg-gray-100">
            <input type="text" placeholder="Pretražite proizvode..." className="w-[85%] outline-none bg-inherit"  />
            <CiSearch size={26} />
        </div>

        <div>

        </div>
      </div>
    </motion.aside>
  );
};

export default Sidemenu;
