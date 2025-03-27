import CatBaner from "@/components/frontend/CatBaner";
import CategoryItemBox from "@/components/frontend/CategoryItemBox";
// import NavigationList from "@/components/frontend/NavigationList";
import FrontLayout from "@/components/layouts/FrontLayout";
import { machinesCategories, meta } from "@/data";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:'Priključne mašine',
  description: "Širok asortiman poljoprivrednih mašina: balirke, kosačice, sakupljači, utovarivači, freze, plugovi, sejalice, prskalice, rasipači, setvospremači, atomizeri, mulčari, prikolice, cisterne i rasturači. Kvalitetna mehanizacija za modernu poljoprivredu u Srbiji."

}

export default function PrikljucneMasine() {
  return (
    <FrontLayout>
      {/* <NavigationList /> */}
      <CatBaner
        title="Priključne mašine - Kvalitet i pouzdanost"
        subtitle="Naša ponuda priključnih mašina obuhvata širok spektar opreme koja poboljšava produktivnost i olakšava rad u poljoprivredi."
        alt={meta}
        imgSrc="/banners/masine2.jpg"
        href="/prikljucne-masine"
      />

      <div className="bg-[#fafafa] w-full h-full">
        <div className="wrapper py-10 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {machinesCategories.map((item, i) => (
            <CategoryItemBox
              quantity={item.quantity}
              alt={item.alt}
              image={item.image}
              link={item.link}
              key={i}
            />
          ))}
        </div>
      </div>
    </FrontLayout>
  );
}
