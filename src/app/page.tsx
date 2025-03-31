import AccordionSection from "@/components/frontend/AccordionSection";
import Baner from "@/components/frontend/Baner";
import CarouselContainer from "@/components/frontend/CarouselContainer";
import EntrySection from "@/components/frontend/EntrySection";
import Featured from "@/components/frontend/Featured";
import NavigationList from "@/components/frontend/NavigationList";
import Partners from "@/components/frontend/Partners";
import FrontLayout from "@/components/layouts/FrontLayout";
import {
  landingBaner,
  masineAccordion,
  meta,
  // rezervniAccordion,
  // rezervniBaner,
  tractorAccordion,
  tractorSection,
} from "@/data";
import { supabase } from "@/lib/supabase";

export const fetchCache = "force-no-store";

export default async function Home() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("featuredProduct", true);

  return (
    <FrontLayout>
      <NavigationList />
      <CarouselContainer items={landingBaner} />

      <div className="my-32">
        <EntrySection
          title="Izdvajamo iz ponude"
          subtitle="35 godina u poslu."
          text="Izdvajamo iz ponude vrhunsku mehanizaciju koja kombinuje snagu, dugotrajnost i savremenu tehnologiju, obezbeđujući maksimalnu efikasnost i pouzdanost u radu."
          wrapper={true}
        />
        <Featured products={products} />
      </div>

      <CarouselContainer items={tractorSection} />

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

      <Baner
        title="Priključne mašine - Kvalitet i pouzdanost"
        subtitle="Naša ponuda priključnih mašina obuhvata širok spektar opreme koja poboljšava produktivnost i olakšava rad u poljoprivredi."
        alt={meta}
        imgSrc="/banners/masine2.jpg"
        href="/prikljucne-masine"
      />

      <div className="wrapper xl:grid xl:grid-cols-2 xl:gap-10 xl:py-20 xl:justify-between">
        <div>
          <EntrySection
            title="Snaga i pouzdanost "
            subtitle="Priključne mašine"
            text="Izdvajamo iz ponude vrhunsku mehanizaciju koja kombinuje snagu, dugotrajnost i savremenu tehnologiju, obezbeđujući maksimalnu efikasnost i pouzdanost u radu."
            wrapper={false}
          />
        </div>

        <AccordionSection data={masineAccordion} />
      </div>

      {/* <CarouselContainer items={rezervniBaner} />

      <div className="wrapper xl:grid xl:grid-cols-2 xl:gap-10 xl:py-20 xl:justify-between">
        <div>
          <EntrySection
            title="Snaga i pouzdanost "
            subtitle="Traktori"
            text="Izdvajamo iz ponude vrhunsku mehanizaciju koja kombinuje snagu, dugotrajnost i savremenu tehnologiju, obezbeđujući maksimalnu efikasnost i pouzdanost u radu."
            wrapper={false}
          />
        </div>

        <AccordionSection data={rezervniAccordion} />
      </div> */}

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
