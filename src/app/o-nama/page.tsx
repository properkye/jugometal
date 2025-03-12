import FrontLayout from "@/components/layouts/FrontLayout";
import CatBaner from "@/components/frontend/CatBaner";
import { meta, tractorAccordion } from "@/data";
import EntrySection from "@/components/frontend/EntrySection";
import AccordionSection from "@/components/frontend/AccordionSection";
import Partners from "@/components/frontend/Partners";

export default function ONama() {
  return (
    <FrontLayout>
      <CatBaner
        title="Jugometal - siguran partner."
        subtitle="Naša ponuda priključnih mašina obuhvata širok spektar opreme koja poboljšava produktivnost i olakšava rad u poljoprivredi."
        alt={meta}
        imgSrc="/banners/jugo.jpg"
        href="/prikljucne-masine"
      />

      <div className="wrapper xl:grid xl:grid-cols-2 xl:gap-10 xl:py-20 xl:justify-between">
        <div>
          <EntrySection
            title="Snaga i pouzdanost"
            subtitle="Traktori"
            text="Izdvajamo iz ponude vrhunsku mehanizaciju koja kombinuje snagu, dugotrajnost i savremenu tehnologiju, obezbeđujući maksimalnu efikasnost i pouzdanost u radu."
            wrapper={false}
          />
        </div>

        <AccordionSection data={tractorAccordion} />
      </div>

      <EntrySection
        title="Partneri"
        subtitle="35 godina u poslu."
        text="Izdvajamo iz ponude vrhunsku mehanizaciju koja kombinuje snagu, dugotrajnost i savremenu tehnologiju, obezbeđujući maksimalnu efikasnost i pouzdanost u radu."
        wrapper={true}
      />


      <Partners />
    </FrontLayout>
  );
}
