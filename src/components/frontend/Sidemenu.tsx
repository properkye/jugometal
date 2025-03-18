"use client";
import React from "react";
import { motion } from "framer-motion";

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

          {/* accordion */}
        
          <ul className="mt-10">
            <li className="py-2">Traktori</li>
            <li className="py-2">Priključne mašine</li>
            <li className="py-2">Rezervni delovi</li>
          </ul>

          <ul className="mt-10">
            <li className="py-2">O nama</li>
            <li className="py-2">Kontakt</li>
            <li className="py-2">Servis</li>
            <li className="py-2">Subvencije</li>
            <li className="py-2">Akcije</li>
          </ul>

          <ul className="mt-10">
            <li className="py-2">Telefon: 035/312-391 </li>
            <li className="py-2">E-mejl: info@jugometal.co.rs</li>
            <li className="py-2">Adresa: Kneza Miloša 51, 35210</li>

          </ul>

      </div>
    </motion.aside>
  );
};

export default Sidemenu;
