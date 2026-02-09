import FrontLayout from "@/components/layouts/FrontLayout";
import CatBaner from "@/components/frontend/CatBaner";
import { accordionData, meta } from "@/data";
import EntrySection from "@/components/frontend/EntrySection";
import { ProductQuestion } from "../traktori/[brand]/[product]/page";
// import ContactForm from "@/components/admin/screens/ContactForm";
import { Metadata } from "next";
import AccordionLinks from "@/components/frontend/AccordionLinks";

export const metadata:Metadata = {
  title:'Kontakt'
}


export default function Kontakt() {
  return (
    <FrontLayout>
      <CatBaner
        title="Kontakt informacije."
        subtitle="Kontaktirajte nas za uspešno poljoprivredno poslovanje."
        alt={meta}
        imgSrc="/banners/jugo2.jpg"
        href="/prikljucne-masine"
      />

      <div className="wrapper xl:grid xl:grid-cols-2 xl:gap-10 xl:py-20 xl:justify-between">
        <div>
          <EntrySection
            title="Kontakt informacije."
            subtitle="Jugometal Svilajnac, Temerin, Požarevac"
            text="Budite slobodni da nas kontaktirate za svako pitanje koje imate."
            wrapper={false}
          />
        </div>

        <AccordionLinks data={accordionData} />
      </div>

     
      <div className="wrapper">
        <ProductQuestion />
        {/* <ContactForm /> */}
      </div>
    </FrontLayout>
  );
}
