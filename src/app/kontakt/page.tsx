import FrontLayout from "@/components/layouts/FrontLayout";
import CatBaner from "@/components/frontend/CatBaner";
import { meta } from "@/data";
import EntrySection from "@/components/frontend/EntrySection";
import AccordionSection from "@/components/frontend/AccordionSection";
import { TractorAccordionProps } from "@/models/types";
import { ProductQuestion } from "../traktori/[brand]/[product]/page";
import ContactForm from "@/components/admin/screens/ContactForm";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:'Kontakt'
}

const accordion:TractorAccordionProps[] = [
  {
    title:'Jugometal Svilajnac',
    subtitle:'Servis i prodaja poljoprivredne mehanizacije u Svilajncu',
    items: [
      {
        name:'Kontakt telefon',
        list: [
          {
            itemName:'Delovi: 035/311-137',
            itemHref:''
          },
          {
            itemName:'Fax: 035/312-331',
            itemHref:''
          },
        ]
      },
      {
        name:'Adresa',
        list: [
          {
            itemName:'ul. Kneza Miloša 81 35210, Svilajnac Srbija',
            itemHref:''
          },
        ]
      },
      {
        name:'E-mejl',
        list: [
          {
            itemName:'info@jugometal.co.rs',
            itemHref:''
          },
        ]
      }
    ]
  },
  {
    title:'Jugometal Temerin',
    subtitle:'Servis i prodaja poljoprivredne mehanizacije u Temerinu',
    items: [
      {
        name:'Kontakt telefon',
        list: [
          {
            itemName:'Telefon: 021/840-038',
            itemHref:''
          },
          {
            itemName:'Fax: 021/840-505',
            itemHref:''
          },
          {
            itemName:'Mobilni: 063/10-58-705',
            itemHref:''
          },
        ]
      },
      {
        name:'Adresa',
        list: [
          {
            itemName:'Novosadska 634 21235, Temerin Srbija',
            itemHref:''
          },
        ]
      },
      {
        name:'E-mejl',
        list: [
          {
            itemName:'info@jugometal.co.rs',
            itemHref:''
          },
        ]
      }
    ]
  },
  {
    title:'Jugometal Požarevac',
    subtitle:'Servis i prodaja poljoprivredne mehanizacije u Požarevcu',
    items: [
      {
        name:'Kontakt telefon',
        list: [
          {
            itemName:'Telefon: 012/665-544',
            itemHref:''
          },
          {
            itemName:'Mobilni: 063/10-58-762',
            itemHref:''
          },
        ]
      },
      {
        name:'Adresa',
        list: [
          {
            itemName:'Beogradski put 17/A 12000, Požarevac',
            itemHref:''
          },
        ]
      },
      {
        name:'E-mejl',
        list: [
          {
            itemName:'info@jugometal.co.rs',
            itemHref:''
          },
        ]
      }
    ]
  }
]

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

        <AccordionSection data={accordion} />
      </div>

     
      <div className="wrapper">
        <ProductQuestion />
        <ContactForm />
      </div>
    </FrontLayout>
  );
}
