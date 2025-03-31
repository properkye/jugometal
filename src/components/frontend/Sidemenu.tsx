"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SidemenuProps {
  setOpen: (state: boolean) => void;
}

// Niz traktora
const tractors = [
  { name: "Solis", href: "/traktori/solis" },
  { name: "YTO", href: "/traktori/yto" },
  { name: "Mahindra", href: "/traktori/mahindra" },
  { name: "IMT", href: "/traktori/imt" },
  { name: "Carraro", href: "/traktori/carraro" },
  { name: "John Deere", href: "/traktori/john-deere" },
  { name: "Belarus", href: "/traktori/belarus" },
];

// Niz priključnih mašina
const prikljucneMasine = [
  "Balirke",
  "Kosačice",
  "Sakupljači",
  "Utovarivači",
  "Freze",
  "Plugovi",
  "Sejalice",
  "Prskalice",
  "Rasipači",
  "Setvospremači",
  "Atomizeri",
  "Mulčari",
  "Prikolice",
  "Cisterne",
  "Rasturači",
].map((name) => ({
  name,
  href: `/prikljucne-masine/${name
    .toLowerCase()
    .replace(/š/g, "s")
    .replace(/č/g, "c")
    .replace(/ć/g, "c")
    .replace(/ž/g, "z")
    .replace(/đ/g, "dj")
    .replace(/\s+/g, "-")}`,
}));

// const rezervniDelovi = [
//   { name: "Traktorski delovi", href: "/rezervni-delovi/traktorski" },
//   {
//     name: "Delovi za priključne mašine",
//     href: "/rezervni-delovi/prikljucne-masine",
//   },
//   { name: "Ostalo", href: "/rezervni-delovi/ostalo" },
// ];

const Sidemenu: React.FC<SidemenuProps> = ({ setOpen }) => {
  return (
    <motion.aside
      className="w-[100%] h-[100vh] fixed top-0 right-0 bottom-0 bg-white z-[150] md:w-[70vw] xl:w-[900px] overflow-y-scroll"
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <div className="wrapper py-6 relative px-4">
        <AiOutlineClose
          size={30}
          onClick={() => setOpen(false)}
          className="absolute top-6 right-2 cursor-pointer"
        />

        {/* Accordion meni */}
        <Accordion type="single" collapsible className="w-full mt-10">
          {/* Traktori */}
          <AccordionItem value="traktori">
            <AccordionTrigger className="text-[1.5rem]">
              Traktori
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {tractors.map((tractor) => (
                  <li key={tractor.name} className="py-2">
                    <Link href={tractor.href} className="hover:underline lg:text-[1.2rem]">
                      {tractor.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Priključne mašine */}
          <AccordionItem value="prikljucne-masine">
            <AccordionTrigger className="text-[1.5rem]">
              Priključne mašine
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {prikljucneMasine.map((item) => (
                  <li key={item.name} className="py-2">
                    <Link href={item.href} className="hover:underline lg:text-[1.2rem]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Rezervni delovi */}
          {/* <AccordionItem value="rezervni-delovi">
            <AccordionTrigger className="text-[1.5rem]">
              Rezervni delovi
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {rezervniDelovi.map((item) => (
                  <li key={item.name} className="py-2">
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>

        {/* Statika */}
        <ul className="mt-10">
          <li className="py-2 text-[1.5rem]">
            <Link href="/">Početna</Link>
          </li>
          <li className="py-2 text-[1.5rem]">
            <Link href="/o-nama">O nama</Link>
          </li>
          <li className="py-2 text-[1.5rem]">
            <Link href="/kontakt">Kontakt</Link>
          </li>
          <li className="py-2 text-[1.5rem]">
            <Link href="/servis">Servis</Link>
          </li>
          <li className="py-2 text-[1.5rem]">
            <Link href="/subvencije">Subvencije</Link>
          </li>
          <li className="py-2 text-[1.5rem]">
            <Link href="/akcije">Akcije</Link>
          </li>
        </ul>

        <ul className="mt-10">
          <li className="py-2 text-[1rem]">
            Telefon:{" "}
            <a href="tel:035312391" className="hover:underline">
              035/312-391
            </a>
          </li>
          <li className="py-2 text-[1rem]">
            E-mejl:{" "}
            <a href="mailto:info@jugometal.co.rs" className="hover:underline">
              info@jugometal.co.rs
            </a>
          </li>
          <li className="py-2 text-[1rem]">
            Adresa:{" "}
            <a
              href="https://www.google.com/maps/place/JUGOMETAL+d.o.o.+Svilajnac/@44.2320431,21.1865375,16z/data=!4m6!3m5!1s0x47512aebab5d1887:0xf407f690f9310426!8m2!3d44.2286941!4d21.1757255!16s%2Fg%2F1hc14d76j?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Kneza Miloša 81, 35210, Svilajnac 586423
            </a>
          </li>
        </ul>
      </div>
    </motion.aside>
  );
};

export default Sidemenu;
