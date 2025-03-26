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

const rezervniDelovi = [
  { name: "Traktorski delovi", href: "/rezervni-delovi/traktorski" },
  {
    name: "Delovi za priključne mašine",
    href: "/rezervni-delovi/prikljucne-masine",
  },
  { name: "Ostalo", href: "/rezervni-delovi/ostalo" },
];

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
            <AccordionTrigger>Traktori</AccordionTrigger>
            <AccordionContent>
              <ul>
                {tractors.map((tractor) => (
                  <li key={tractor.name} className="py-2">
                    <Link href={tractor.href}>{tractor.name}</Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Priključne mašine */}
          <AccordionItem value="prikljucne-masine">
            <AccordionTrigger>Priključne mašine</AccordionTrigger>
            <AccordionContent>
              <ul>
                {prikljucneMasine.map((item) => (
                  <li key={item.name} className="py-2">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Rezervni delovi */}
          <AccordionItem value="rezervni-delovi">
            <AccordionTrigger>Rezervni delovi</AccordionTrigger>
            <AccordionContent>
              <ul>
                {rezervniDelovi.map((item) => (
                  <li key={item.name} className="py-2">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Statika */}
        <ul className="mt-10">
          <li className="py-2">
            <Link href="/">Početna</Link>
          </li>
          <li className="py-2">
            <Link href="/o-nama">O nama</Link>
          </li>
          <li className="py-2">
            <Link href="/kontakt">Kontakt</Link>
          </li>
          <li className="py-2">
            <Link href="/servis">Servis</Link>
          </li>
          <li className="py-2">
            <Link href="/subvencije">Subvencije</Link>
          </li>
          <li className="py-2">
            <Link href="/akcije">Akcije</Link>
          </li>
        </ul>

        <ul className="mt-10">
          <li className="py-2">Telefon: 035/312-391</li>
          <li className="py-2">E-mejl: info@jugometal.co.rs</li>
          <li className="py-2">Adresa: Kneza Miloša 51, 35210</li>
        </ul>
      </div>
    </motion.aside>
  );
};

export default Sidemenu;
