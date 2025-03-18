import FrontLayout from "@/components/layouts/FrontLayout";
import CatBaner from "@/components/frontend/CatBaner";
import { meta } from "@/data";
import EntrySection from "@/components/frontend/EntrySection";
import AccordionSection from "@/components/frontend/AccordionSection";
import { TractorAccordionProps } from "@/models/types";
import { ProductQuestion } from "../traktori/[brand]/[product]/page";
import ContactForm from "@/components/admin/screens/ContactForm";

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
