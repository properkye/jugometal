
import CatBaner from "@/components/frontend/CatBaner";
import CategoryItemBox from "@/components/frontend/CategoryItemBox";
// import NavigationList from "@/components/frontend/NavigationList";
import FrontLayout from "@/components/layouts/FrontLayout";
import { meta, traktoriBrands } from "@/data";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:'Traktori',
  description:'Prodaja traktora brendova IMT, John Deere, Belarus, Solis, YTO, Mahindra, Carraro i Zetor. Veliki izbor novih i polovnih traktora za sve vrste poljoprivrednih potreba u Srbiji.'
}


export default function Traktori() {
  return (
    <FrontLayout>
      {/* <NavigationList /> */}
      <CatBaner
        title="Traktori - snaga i pouzdanost."
        subtitle="Naša ponuda priključnih mašina obuhvata širok spektar opreme koja poboljšava produktivnost i olakšava rad u poljoprivredi."
        alt={meta}
        imgSrc="/banners/traktori.jpg"
        href="/prikljucne-masine"
      />

      <div className="bg-[#fafafa] w-full h-full">
      <div className="wrapper py-10 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {traktoriBrands.map((item,i) => (
            <CategoryItemBox quantity={item.quantity} alt={item.alt} image={item.image} link={`${item.link}`} key={i} />
        ))}
      </div>
      </div>
    </FrontLayout>
  );
}
