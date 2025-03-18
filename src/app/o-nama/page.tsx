import FrontLayout from "@/components/layouts/FrontLayout";
import CatBaner from "@/components/frontend/CatBaner";
import { meta} from "@/data";
import EntrySection from "@/components/frontend/EntrySection";

import Partners from "@/components/frontend/Partners";
import { AccordionProps } from "../servis/page";
import AccordionSectionSecond from "@/components/frontend/AccordionSectionSecond";


const accordion: AccordionProps[] = [
  {
    title: "Višegodišnji rad",
    content:
      "Višegodišnji rad, saradnja sa poljoprivrednicima, poslovnost i posvećenost potrebama kupaca, doprineli su da Jugometal postane lider u prodaji poljoprivredne mehenizacije.",
  },
  {
    title: "Široka Ponuda Traktora",
    content:
      "Specijalizovani smo za prodaju traktora i poljoprivredne mehanizacije vrhunskog kvaliteta koji su pouzdani, efikasni i napravljeni da se nose sa bilo kojim poljoprivrednim ili industrijskim zadatkom.",
  },
  {
    title: "Ponuda Poljoprivredne Mehanizacije",
    content:
      "Naša široka ponuda traktora obuhvata modele vodećih svetskih proizvođača poput YTO, John Deere, Solis, Zetor, Mahindra i Belarus. Podržavamo domaće proizvođače priključnih mašina kao što su FPM Agromehanika, Morava i Majevica, kao i proizvode renomiranih firmi iz regiona poput SIP Šempeter, INO Brežice, Gorenc Slovenija i Agromehanika Kranj Slovenija.",
  },
];

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
            title="Jugometal"
            subtitle="Since 1990."
            text="Preduzeće Jugometal d.o.o. Svilajnac osnovano je 1990. godine. Nakon uspešnih poslovanja možemo da se pohvalimo i sedištima u Temerinu i Požarevcu."
            wrapper={false}
          />
        </div>

        <AccordionSectionSecond data={accordion} />
      </div>

      <div className="wrapper">
        Slika firme
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
