import FrontLayout from "@/components/layouts/FrontLayout";
import CatBaner from "@/components/frontend/CatBaner";
import { meta } from "@/data";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:'Subvencije'
}


export default function Subvencije() {
  return (
    <FrontLayout>
      <CatBaner
        title="Subvencioni programi."
        subtitle="Kontaktirajte nas za više informacija."
        alt={meta}
        imgSrc="/banners/subv.jpg"
        href="/prikljucne-masine"
      />


    </FrontLayout>
  );
}
