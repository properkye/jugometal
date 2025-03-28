import FrontLayout from "@/components/layouts/FrontLayout";
import CatBaner from "@/components/frontend/CatBaner";
import { meta } from "@/data";
import EntrySection from "@/components/frontend/EntrySection";

import { TractorAccordionProps } from "@/models/types";
import { ProductQuestion } from "../traktori/[brand]/[product]/page";
import ContactForm from "@/components/admin/screens/ContactForm";
import { Metadata } from "next";
import AccordionLinks from "@/components/frontend/AccordionLinks";

export const metadata:Metadata = {
  title:'Kontakt'
}

export const accordionData: TractorAccordionProps[] = [
  {
    title: 'Jugometal Svilajnac',
    subtitle: 'Servis i prodaja poljoprivredne mehanizacije u Svilajncu',
    items: [
      {
        name: 'Kontakt telefon',
        list: [
          {
            itemName: 'Delovi: 035/311-137',
            itemHref: 'tel:035311137',
          },
          {
            itemName: 'Fax: 035/312-331',
            itemHref: 'tel:035312331',
          },
        ],
      },
      {
        name: 'Adresa',
        list: [
          {
            itemName: 'ul. Kneza Miloša 81 35210, Svilajnac Srbija',
            itemHref: 'https://www.google.com/maps/search/?api=1&query=Kneza+Miloša+81+35210+Svilajnac+586423',
          },
        ],
      },
      {
        name: 'E-mejl',
        list: [
          {
            itemName: 'info@jugometal.co.rs',
            itemHref: 'mailto:info@jugometal.co.rs',
          },
        ],
      },
    ],
  },
  {
    title: 'Jugometal Temerin',
    subtitle: 'Servis i prodaja poljoprivredne mehanizacije u Temerinu',
    items: [
      {
        name: 'Kontakt telefon',
        list: [
          {
            itemName: 'Telefon: 021/840-038',
            itemHref: 'tel:021840038',
          },
          {
            itemName: 'Fax: 021/840-505',
            itemHref: 'tel:021840505',
          },
          {
            itemName: 'Mobilni: 063/10-58-705',
            itemHref: 'tel:0631058705',
          },
        ],
      },
      {
        name: 'Adresa',
        list: [
          {
            itemName: 'Novosadska 634 21235, Temerin Srbija',
            itemHref: 'https://www.google.com/maps/search/?api=1&query=Novosadska+634+21235+Temerin',
          },
        ],
      },
      {
        name: 'E-mejl',
        list: [
          {
            itemName: 'info@jugometal.co.rs',
            itemHref: 'mailto:info@jugometal.co.rs',
          },
        ],
      },
    ],
  },
  {
    title: 'Jugometal Požarevac',
    subtitle: 'Servis i prodaja poljoprivredne mehanizacije u Požarevcu',
    items: [
      {
        name: 'Kontakt telefon',
        list: [
          {
            itemName: 'Telefon: 012/665-544',
            itemHref: 'tel:012665544',
          },
          {
            itemName: 'Mobilni: 063/10-58-762',
            itemHref: 'tel:0631058762',
          },
        ],
      },
      {
        name: 'Adresa',
        list: [
          {
            itemName: 'Beogradski put 17/A 12000, Požarevac',
            itemHref: 'https://www.google.com/maps/search/?api=1&query=Beogradski+put+17A+12000+Požarevac',
          },
        ],
      },
      {
        name: 'E-mejl',
        list: [
          {
            itemName: 'info@jugometal.co.rs',
            itemHref: 'mailto:info@jugometal.co.rs',
          },
        ],
      },
    ],
  },
];

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
        <ContactForm />
      </div>
    </FrontLayout>
  );
}
