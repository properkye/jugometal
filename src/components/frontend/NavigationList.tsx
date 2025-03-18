import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationList: React.FC = () => {
  return (
    <div className="wrapper flex gap-4 flex-col xl:hidden">
      <Link href={"/traktori"}>
        <div className="border-b flex items-center">
          <div className="h-[100px] w-[100px] relative">
            <Image
              src={"/images/tractor.webp"}
              alt={
                "Jugometal Traktori Svilajnac Srbija, prodaja traktora, rezervni delovi, poljoprivredne masine."
              }
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1 className="text-[1.2rem] font-semibold tracking-tighter">
            Traktori
          </h1>
        </div>
      </Link>

      <Link href={"/prikljucne-masine"}>
        <div className="border-b flex items-center">
          <div className="h-[100px] w-[100px] relative">
            <Image
              src={"/images/masine.webp"}
              alt={
                "Jugometal Traktori Svilajnac Srbija, prodaja traktora, rezervni delovi, poljoprivredne masine."
              }
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1 className="text-[1.2rem] font-semibold tracking-tighter">
            Priključne masine
          </h1>
        </div>
      </Link>

      <Link href={"/rezervni-delovi"}>
        <div className="flex items-center mb-10">
          <div className="h-[100px] w-[100px] relative">
            <Image
              src={"/images/rezervni.png"}
              alt={
                "Jugometal Traktori Svilajnac Srbija, prodaja traktora, rezervni delovi, poljoprivredne masine."
              }
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1 className="text-[1.2rem] font-semibold tracking-tighter">
            Rezervni delovi
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default NavigationList;
