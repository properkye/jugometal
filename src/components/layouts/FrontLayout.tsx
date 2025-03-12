"use client";
import React, { useState } from "react";
import { FrontLayoutProps } from "@/models/types";
import Header from "../frontend/Header";
import SecNavigation from "../frontend/SecNavigation";
import PrimNavigation from "../frontend/PrimNavigation";
import Footer from "../frontend/Footer";
import { AnimatePresence } from "framer-motion";
import Overlay from "../frontend/Overlay";
import Sidemenu from "../frontend/Sidemenu";

const FrontLayout: React.FC<FrontLayoutProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Header />
      <SecNavigation open={openMenu} setOpen={setOpenMenu} />
      <PrimNavigation />

      <AnimatePresence>
        {openMenu && (
          <>
            <Overlay open={openMenu} setOpen={setOpenMenu} />
            <Sidemenu setOpen={setOpenMenu} />
          </>
        )}
      </AnimatePresence>
      {children}
      <Footer />
    </>
  );
};

export default FrontLayout;
