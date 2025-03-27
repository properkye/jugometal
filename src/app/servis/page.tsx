import FrontLayout from "@/components/layouts/FrontLayout";
import CatBaner from "@/components/frontend/CatBaner";
import { meta } from "@/data";
import EntrySection from "@/components/frontend/EntrySection";
import AccordionSectionSecond from "@/components/frontend/AccordionSectionSecond";
import ContactForm from "@/components/admin/screens/ContactForm";
import { ProductQuestion } from "../traktori/[brand]/[product]/page";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:'Servis'
}

export interface AccordionProps {
  title: string;
  content: string;
}

const accordion: AccordionProps[] = [
  {
    title: "IMT i IMR",
    content:
      "Kroz godine, snabdevali smo domaće tržište visokokvalitetnim delovima za traktore IMT i IMR, pružajući istovremeno vrhunsku uslugu servisiranja ovih mašina.",
  },
  {
    title: "Massey Ferguson",
    content:
      "Massey Ferguson su veoma značajni ukoliko želite da pravilno održavate i očuvate vaš traktor.",
  },
  {
    title: "Originalni rezervni delovi",
    content:
      "Ukoliko se snabdevate originalnim rezervnim delovima vaš zastoj u radu će biti minimalan.",
  },
];

export default function Servis() {
  return (
    <FrontLayout>
      <CatBaner
        title="Servis i prodaja poljoprivredne mehanizacije."
        subtitle="Naša firma se ponosi dugogodišnjim iskustvom u prodaji i servisiranju poljoprivredne mehanizacije."
        alt={meta}
        imgSrc="/banners/delovi3.jpg"
        href="/prikljucne-masine"
      />

      <div className="wrapper xl:grid xl:grid-cols-2 xl:gap-10 xl:py-20 xl:justify-between">
        <div>
          <EntrySection
            title="Jugometal Servis"
            subtitle="Servis i prodaja poljoprivredne mehanizacije"
            text="Fokusiramo se na pružanje vrhunskih post-prodajnih usluga kroz stručnu servisnu službu i dostupnost originalnih rezervnih delova."
            wrapper={false}
          />
        </div>

        <AccordionSectionSecond data={accordion} />
      </div>

      <div className="wrapper">
        <ProductQuestion />
        <ContactForm />
      </div>
    </FrontLayout>
  );
}
