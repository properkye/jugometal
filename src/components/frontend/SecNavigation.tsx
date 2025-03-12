import { SecNavigationProps } from "@/models/types";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SecNavigation: React.FC<SecNavigationProps> = ({ open, setOpen }) => {
  const router = useRouter();
  return (
    <nav className="border-b border-gray-300">
      <div className="wrapper py-6">
        <div className="flex justify-between items-center">
          <div
            className="w-[200px] h-[50px] relative cursor-pointer xl:w-[350px] xl:h-[100px]"
            onClick={() => router.push("/")}
          >
            <Image
              src={"/logo.png"}
              alt="Jugometal Logo"
              fill
              priority={true}
              sizes="(max-width: 1023px) 220px"
              
            />
          </div>

          <div className="flex justify-between gap-2">
            <Hamburger toggled={open} toggle={() => setOpen(!open)} size={22} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecNavigation;
