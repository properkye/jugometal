import Link from "next/link";
import React from "react";

interface PrimNavigationProps {
  title: string;
  url: string;
}

const items: PrimNavigationProps[] = [
  {
    title: "Traktori",
    url: "traktori",
  },
  {
    title: "Priključne mašine",
    url: "prikljucne-masine",
  },
  {
    title: "Rezervni delovi",
    url: "rezervni-delovi",
  },
  {
    title: "O nama",
    url: "o-nama",
  },
  {
    title: "Kontakt",
    url: "kontakt",
  },
  {
    title: "Servis",
    url: "servis",
  },
  {
    title: "Subvencije i finansiranje",
    url: "subvencije",
  },
  {
    title: "Akcije",
    url: "akcije",
  },
];

const PrimNavigation: React.FC = () => {
  return (
    <div className="hidden xl:flex wrapper xl:justify-between py-6">
      {items.map((item, i) => (
        <Link href={`/${item.url}`} key={i}>
          <li className="list-none text-[1.2rem] tracking-tight cursor-pointer">
            {item.title}
          </li>
        </Link>
      ))}
    </div>
  );
};

export default PrimNavigation;
