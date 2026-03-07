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
import { Metadata } from "next";

export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Jugometal – IMT, Solis, John Deere, YTO, Mahindra Traktori i Rezervni Delovi",
  description: "Jugometal Svilajnac – prodaja traktora (IMT, Solis, John Deere, YTO, Mahindra, Carraro, Belarus), rezervnih delova za traktore, poljoprivrednih mašina i opreme širom Srbije. Rezervni delovi za traktor uvek dostupni.",
  keywords: ["Jugometal", "IMT", "Solis", "John Deere", "YTO", "Mahindra", "Carraro", "Belarus", "Rezervni delovi za traktor"],
};

export default async function Home() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("featuredProduct", true);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jugometal",
    "image": "https://jugometal.co.rs/logo.png",
    "description": "Prodaja traktora (IMT, Solis, John Deere, YTO, Mahindra, Carraro, Belarus), rezervnih delova za traktore i poljoprivrednih mašina.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Svilajnac",
      "addressCountry": "RS"
    },
    "url": "https://jugometal.co.rs",
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Traktori i Rezervni Delovi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "IMT Traktori"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Solis Traktori"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "John Deere Traktori"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "YTO Traktori"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Mahindra Traktori"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Carraro Traktori"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Belarus Traktori"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Rezervni delovi za traktor"
          }
        }
      ]
    }
  };

  return (
    <FrontLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
