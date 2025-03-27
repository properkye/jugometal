import CatBaner from "@/components/frontend/CatBaner";
import CategoryItemBox from "@/components/frontend/CategoryItemBox";
// import NavigationList from "@/components/frontend/NavigationList";
import FrontLayout from "@/components/layouts/FrontLayout";
import { deloviCategories, meta } from "@/data";
import { Metadata } from "next";


export const metadata:Metadata = {
  title:'Rezervni delovi'
}

export default function RezervniDelovi() {
  return (
    <FrontLayout>
      {/* <NavigationList /> */}
      <CatBaner
        title="Rezervni delovi - Sve na jednom mestu!"
        subtitle="Naša ponuda priključnih mašina obuhvata širok spektar opreme koja poboljšava produktivnost i olakšava rad u poljoprivredi."
        alt={meta}
        imgSrc="/banners/delovi.jpg"
        href="/prikljucne-masine"
      />

      <div className="bg-[#fafafa] w-full h-full">
        <div className="wrapper py-10 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {deloviCategories.map((item, i) => (
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
