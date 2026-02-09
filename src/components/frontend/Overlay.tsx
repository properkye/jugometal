import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface OverlayProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const Overlay: React.FC<OverlayProps> = ({ open, setOpen }) => {
  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (open) {
        event.preventDefault();
      }
    };

    if (open) {
      const width = document.body.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.width = `${width}px`;

      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    } else {
      document.body.style.overflow = "";
      document.body.style.width = "";
      document.removeEventListener("touchmove", handleTouchMove);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.width = "";
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [open]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: "20%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`fixed inset-0 bg-black bg-opacity-80 transition-opacity z-50 duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setOpen(false)} // Zatvara overlay kada se klikne van
    />
  );
};

export default Overlay;
