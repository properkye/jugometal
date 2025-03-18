import FrontLayout from "@/components/layouts/FrontLayout";
import CatBaner from "@/components/frontend/CatBaner";
import { meta } from "@/data";


export default function Subvencije() {
  return (
    <FrontLayout>
      <CatBaner
        title="Subvencioni programi."
        subtitle="Vidi sta treba ovde da se s tavi."
        alt={meta}
        imgSrc="/banners/subv.jpg"
        href="/prikljucne-masine"
      />


    </FrontLayout>
  );
}
