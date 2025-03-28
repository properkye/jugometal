import { CarouselItemProps, CategoryBoxProps, PartnersProps, TractorAccordionProps } from "./models/types";

export const meta: string =
  "Jugometal – traktori, priključne mašine, IMT, Solis, rezervni delovi za traktore i poljoprivredna mehanizacija vrhunskog kvaliteta za pouzdan i efikasan rad na njivi.";

const tractorsMeta: string =
  "Jugometal – traktori, IMT, Solis, Belarus, Mahindra, Carraro, YTO, John Deere, rezervni delovi za traktore i poljoprivredna mehanizacija vrhunskog kvaliteta za pouzdan i efikasan rad na njivi.";

export const landingBaner: CarouselItemProps[] = [
  {
    title: "Traktori - snaga i pouzdanost za svaku njivu",
    subtitle:
      "Naši traktori kombinuju vrhunsku snagu, izdržljivost i inovativnu tehnologiju kako bi osigurali maksimalnu efikasnost na polju.",
    href: "/traktori",
    alt: meta,
    imgSrc: "/banners/traktori.jpg",
  },
  {
    title: "Priključne mašine - kvalitet i pouzdanost",
    subtitle:
      "Naša ponuda priključnih mašina obuhvata širok spektar proizvoda koji će zadovoljiti sve vaše potrebe na polju.",
    href: "/prikljucne-masine",
    alt: meta,
    imgSrc: "/banners/masine.jpg",
  },
  {
    title: "Rezervni delovi",
    subtitle:
      "U našoj ponudi možete pronaći rezervne delove za traktore i poljoprivrednu mehanizaciju vrhunskog kvaliteta.",
    href: "/rezervni-delovi",
    alt: meta,
    imgSrc: "/banners/delovi.jpg",
  },
];

export const rezervniBaner: CarouselItemProps[] = [
  {
    title: "Traktorski rezervni delovi",
    subtitle:
      "Naši traktori kombinuju vrhunsku snagu, izdržljivost i inovativnu tehnologiju kako bi osigurali maksimalnu efikasnost na polju.",
    href: "/traktorski-rezervni-delovi",
    alt: meta,
    imgSrc: "/banners/delovi.jpg",
  },
  {
    title: "Delovi za priključne mašine",
    subtitle:
      "Naša ponuda priključnih mašina obuhvata širok spektar proizvoda koji će zadovoljiti sve vaše potrebe na polju.",
    href: "/delovi-za-prikljucne-masine",
    alt: meta,
    imgSrc: "/banners/delovi2.jpg",
  },
  {
    title: "Ostalo",
    subtitle:
      "U našoj ponudi možete pronaći rezervne delove za traktore i poljoprivrednu mehanizaciju vrhunskog kvaliteta.",
    href: "/ostalo-delovi",
    alt: meta,
    imgSrc: "/banners/delovi3.jpg",
  },
];

export const tractorSection: CarouselItemProps[] = [
  {
    title: "Solis",
    subtitle: "Solis je najbrže rastući brend kompaktnih traktora u Evropi.",
    href: "traktori/solis",
    imgSrc: "/banners/traktori/solis.jpg",
    alt: tractorsMeta,
  },
  {
    title: "IMT / Tafe",
    subtitle:
      "IMT je pionir u mehanizaciji poljoprivrede i tehnologiji traktora.",
    href: "traktori/imt-tafe",
    imgSrc: "/banners/traktori/imt.webp",
    alt: tractorsMeta,
  },
  {
    title: "Belarus / Mahindra",
    subtitle:
      "Belarus je serija četvorotočkaških traktora koji se proizvode od 1950. godine u fabrici Minsk Tractor Works (MTZ) u Minsku, Belorusija.",
    href: "traktori/belarus-mahindra",
    imgSrc: "/banners/traktori/belarus.webp",
    alt: tractorsMeta,
  },
  {
    title: "Carraro",
    subtitle: "Široka ponuda specijalizovanih traktora snage od 65 do 120 KS.",
    href: "traktori/carraro",
    imgSrc: "/banners/traktori/carraro.jpeg",
    alt: tractorsMeta,
  },
  {
    title: "YTO",
    subtitle: "YTO, vodeći dobavljač poljoprivredne mehanizacije u Kini.",
    href: "traktori/yto",
    imgSrc: "/banners/traktori/yto.jpg",
    alt: tractorsMeta,
  },
  {
    title: "John Deere",
    subtitle: "Svestrani, snažni i efikasni – John Deere.",
    href: "traktori/john-deere",
    imgSrc: "/banners/traktori/deere.jpg",
    alt: tractorsMeta,
  },
];

export const tractorAccordion: TractorAccordionProps[] = [
  {
    title: "Solis",
    subtitle: "Solis traktori serije N i S kombinuju snagu, efikasnost i naprednu tehnologiju, pružajući optimalna rešenja za različite poljoprivredne potrebe. Pogledajte našu ponudu i pronađite model koji vam najbolje odgovara.",
    items: [
      {
        name: "Solis N",
        list: [
          {
            itemName: "Solis 20",
            itemHref: "/traktori/solis/solis-20",
          },
          {
            itemName: "Solis 26",
            itemHref: "/traktori/solis/solis-26",
          },
          {
            itemName: "Solis 50",
            itemHref: "/traktori/solis/solis-50",
          },
          {
            itemName: "Solis 60",
            itemHref: "/traktori/solis/solis-60",
          },
          {
            itemName: "Solis 75",
            itemHref: "/traktori/solis/solis-75",
          },
          {
            itemName: "Solis 90",
            itemHref: "/traktori/solis/solis-90",
          },
        ],
      },
      {
        name: "Solis S",
        list: [
          {
            itemName: "Solis 60 NT",
            itemHref: "/traktori/solis/solis-60nt",
          },
          {
            itemName: "Solis 75 NT",
            itemHref: "/traktori/solis/solis-75nt",
          },
          {
            itemName: "Solis 90 NT",
            itemHref: "/traktori/solis/solis-90nt",
          },
        ],
      },
    ],
  },
  {
    title: "IMT",
    subtitle: "tražite našu ponudu IMT traktora i pronađite model koji odgovara vašim potrebama. Kvalitet, izdržljivost i pouzdanost za svaku vrstu poljoprivrednog rada.",
    items: [
      {
        name: "IMT 539",
        list: [
          {
            itemName: "IMT 539.2 DI",
            itemHref: "/traktori/imt/imt-539-2-di",
          },
          {
            itemName: "IMT 539.3 DI",
            itemHref: "/traktori/imt/imt-539-3-di",
          },
        ],
      },
      {
        name: "IMT 549",
        list: [
          {
            itemName: "IMT 549.3 DI",
            itemHref: "/traktori/imt/imt-549-3-di",
          },
        ],
      },
      {
        name: "IMT 565",
        list: [
          {
            itemName: "IMT 565.2 DI",
            itemHref: "/traktori/imt/imt-565-2-di",
          },
        ],
      },
    ],
  },
  {
    title: "YTO",
    subtitle: "YTO traktori X serije donose snagu, pouzdanost i naprednu tehnologiju za efikasan rad u poljoprivredi. Istražite našu ponudu i pronađite idealan model za vaše potrebe.",
    items: [
      {
        name: "YTO",
        list: [
          {
            itemName: "YTO 354",
            itemHref: "/traktori/yto/yto-354",
          },
          {
            itemName: "IMT 504",
            itemHref: "/traktori/yto/yto-504",
          },
        ],
      },
      {
        name: "YTO X",
        list: [
          {
            itemName: "YTO X804",
            itemHref: "/traktori/yto/yto-x-804",
          },
          {
            itemName: "YTO X904",
            itemHref: "/traktori/yto/yto-x-904",
          },
          {
            itemName: "YTO X1204",
            itemHref: "/traktori/yto/yto-x-1204",
          },
          {
            itemName: "YTO X1304",
            itemHref: "/traktori/yto/yto-x-1304",
          },
        ],
      },
    ],
  },
  {
    title: "Belarus",
    subtitle:
      "Belarus traktori serije RM poznati su po svojoj pouzdanosti, snazi i prilagodljivosti različitim poljoprivrednim poslovima. Istražite našu ponudu i pronađite model koji odgovara vašim potrebama.",
    items: [
      {
        name: "Belarus",
        list: [
          {
            itemName: "Belarus 952",
            itemHref: "/traktori/belarus/belarus-952",
          },
          {
            itemName: "Belarus 82.1",
            itemHref: "/traktori/belarus/belarus-82-1",
          },
          {
            itemName: "Belarus 1021.3",
            itemHref: "/traktori/belarus/belarus-1021-3",
          },
          {
            itemName: "Belarus 1221.3",
            itemHref: "/traktori/belarus/belarus-1221-3",
          },
        ],
      },
      {
        name: "Belarus RM",
        list: [
          {
            itemName: "Belarus 820 RM",
            itemHref: "/traktori/belarus/belarus-820-rm",
          },
          {
            itemName: "Belarus 892 RM",
            itemHref: "/traktori/belarus/belarus-892-rm",
          },
        ],
      },
    ],
  },
  {
    title: "John Deere",
    subtitle:
      "John Deere traktori serije M i D kombinuju vrhunsku snagu, izdržljivost i naprednu tehnologiju, pružajući optimalne performanse i efikasnost za sve vrste poljoprivrednih radova.",
    items: [
      {
        name: "John Deere M",
        list: [
          {
            itemName: "John Deere 5075M",
            itemHref: "/traktori/john-deere/john-deere-5075-m",
          },
        ],
      },
      {
        name: "John Deere D",
        list: [
            {
                itemName: "John Deere 5045D",
                itemHref: "/traktori/john-deere/john-deere-5045-d",
              },
        ],
      },
    ],
  },
  {
    title: "Mahindra",
    subtitle:
      "Mahindra traktori serije DI donose snagu, pouzdanost i inovativnu tehnologiju, osiguravajući visoke performanse i efikasnost u poljoprivredi. Pogledajte dostupne modele i pronađite idealan traktor za vaše potrebe.",
    items: [
      {
        name: "Mahindra DI",
        list: [
          {
            itemName: "7030 DI",
            itemHref: "/traktori/mahindra/mahindra-7030-di",
          },
          {
            itemName: "595 DI TURBO MKM",
            itemHref: "/traktori/mahindra/mahindra-595-di-turbo-mkm",
          },
          {
            itemName: "475 DI MKM",
            itemHref: "/traktori/mahindra/mahindra-475-di-mkm",
          },
        ],
      },
    ],
  },
  {
    title: "Zetor",
    subtitle:
      "Zetor traktori serije Proxima Power i Major kombinuju robusnu konstrukciju, pouzdanu snagu i naprednu tehnologiju, pružajući visoku efikasnost i dugotrajnost u radu.",
    items: [
      {
        name: "Proxima Power",
        list: [
          {
            itemName: "Proxima Power 80",
            itemHref: "/traktori/zetor/proxima-power-80",
          },
          {
            itemName: "Proxima Power 100",
            itemHref: "/traktori/zetor/proxima-power-100",
          },
          {
            itemName: "Proxima Power 120",
            itemHref: "/traktori/zetor/proxima-power-120",
          },
        ],
      },
      {
        name: "Major Zetor",
        list: [
          {
            itemName: "Major 80",
            itemHref: "/traktori/zetor/major-80",
          }
        ],
      },
    ],
  },
  {
    title: "Carraro",
    subtitle:
      "Zetor traktori serije Proxima Power i Major kombinuju robusnu konstrukciju, pouzdanu snagu i naprednu tehnologiju, pružajući visoku efikasnost i dugotrajnost u radu.",
    items: [
      {
        name: "Carraro Agricube",
        list: [
          {
            itemName: "Agricube Frutteto",
            itemHref: "/traktori/carraro/agricube-frutteto",
          },
          {
            itemName: "Agricube Vigneto",
            itemHref: "/traktori/carraro/agricube-vigneto",
          },
          {
            itemName: "Agricube Basso 80FB",
            itemHref: "/traktori/carraro/agricube-basso-80fb",
          },
          {
            itemName: "Agricube Basso 90FB",
            itemHref: "/traktori/carraro/agricube-basso-90fb",
          },
        ],
      },
    ],
  },
];

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


export const masineAccordion: TractorAccordionProps[] = [
  {
    title: "Ratarstvo",
    subtitle: "Solis traktori serije N i S kombinuju snagu, efikasnost i naprednu tehnologiju, pružajući optimalna rešenja za različite poljoprivredne potrebe. Pogledajte našu ponudu i pronađite model koji vam najbolje odgovara.",
    items: [
      {
        name: "Mašine za ratarstvo",
        list: [
          {
            itemName: "Plugovi",
            itemHref: "/prikljucne-masine/plugovi",
          },
          {
            itemName: "Freze",
            itemHref: "/prikljucne-masine/freze",
          },
          {
            itemName: "Sejalice",
            itemHref: "/prikljucne-masine/sejalice",
          },
          {
            itemName: "Prskalice",
            itemHref: "/prikljucne-masine/prskalice",
          },
          {
            itemName: "Rasipači đubriva",
            itemHref: "/prikljucne-masine/rasipaci-dubriva",
          },
          {
            itemName: "Setvospremači",
            itemHref: "/prikljucne-masine/ratarstvo/setvospremaci",
          },
        ],
      },
    ],
  },
  {
    title: "Stočarstvo",
    subtitle: "Solis traktori serije N i S kombinuju snagu, efikasnost i naprednu tehnologiju, pružajući optimalna rešenja za različite poljoprivredne potrebe. Pogledajte našu ponudu i pronađite model koji vam najbolje odgovara.",
    items: [
      {
        name: "Mašine za stočarstvo",
        list: [
          {
            itemName: "Balirke",
            itemHref: "/prikljucne-masine/balirke",
          },
          {
            itemName: "Kosačice",
            itemHref: "/prikljucne-masine/kosacice",
          },
          {
            itemName: "Sakupljači",
            itemHref: "/prikljucne-masine/sakupljaci",
          },
          {
            itemName: "Utovarivači",
            itemHref: "/prikljucne-masine/utovarivaci",
          },
        ],
      },
    ],
  },
  {
    title: "Voćarstvo",
    subtitle: "Solis traktori serije N i S kombinuju snagu, efikasnost i naprednu tehnologiju, pružajući optimalna rešenja za različite poljoprivredne potrebe. Pogledajte našu ponudu i pronađite model koji vam najbolje odgovara.",
    items: [
      {
        name: "Mašine za voćarstvo",
        list: [
          {
            itemName: "Atomizeri",
            itemHref: "/prikljucne-masine/atomizeri",
          },
          {
            itemName: "Mulčari",
            itemHref: "/prikljucne-masine/mulcari",
          },
        ],
      },
    ],
  },
  {
    title: "Transport",
    subtitle: "Solis traktori serije N i S kombinuju snagu, efikasnost i naprednu tehnologiju, pružajući optimalna rešenja za različite poljoprivredne potrebe. Pogledajte našu ponudu i pronađite model koji vam najbolje odgovara.",
    items: [
      {
        name: "Mašine za transport",
        list: [
          {
            itemName: "Cisterne",
            itemHref: "/prikljucne-masine/cisterne",
          },
          {
            itemName: "Prikolice",
            itemHref: "/prikljucne-masine/prikolice",
          },

          {
            itemName: "Rasturači",
            itemHref: "/prikljucne-masine/rasturaci",
          },
        ],
      },
    ],
  },
]

export const rezervniAccordion: TractorAccordionProps[] = [
  {
    title: "Traktorski rezervni delovi",
    subtitle: "Solis traktori serije N i S kombinuju snagu, efikasnost i naprednu tehnologiju, pružajući optimalna rešenja za različite poljoprivredne potrebe. Pogledajte našu ponudu i pronađite model koji vam najbolje odgovara.",
    items: [
      {
        name: "Delovi za traktore",
        list: [
          {
            itemName: "Jinma",
            itemHref: "/rezervni-delovi/traktorski-rezervni-delovi/jinma",
          },
          {
            itemName: "Landini",
            itemHref: "/rezervni-delovi/traktorski-rezervni-delovi/landini",
          },
          {
            itemName: "Massey Ferguson",
            itemHref: "/rezervni-delovi/traktorski-rezervni-delovi/massey-ferguson",
          },
          {
            itemName: "IMT / Tafe",
            itemHref: "/rezervni-delovi/traktorski-rezervni-delovi/imt-tafe",
          },
          {
            itemName: "Solis",
            itemHref: "/rezervni-delovi/traktorski-rezervni-delovi/solis",
          },
          {
            itemName: "YTO",
            itemHref: "/rezervni-delovi/traktorski-rezervni-delovi/yto",
          },
        ],
      },
    ],
  },
  {
    title: "Delovi za priključne mašine",
    subtitle: "Solis traktori serije N i S kombinuju snagu, efikasnost i naprednu tehnologiju, pružajući optimalna rešenja za različite poljoprivredne potrebe. Pogledajte našu ponudu i pronađite model koji vam najbolje odgovara.",
    items: [
      {
        name: "Delovi",
        list: [
          {
            itemName: "SIP Šempeter Slovenija",
            itemHref: "/rezervni-delovi/delovi-za-prikljucne-masine/sip-sempeter-slovenija",
          },
          {
            itemName: "Rotaciona kosa Poljska",
            itemHref: "/rezervni-delovi/delovi-za-prikljucne-masine/rotaciona-kosa-poljska",
          },
          {
            itemName: "Agromehanika Kranj Slovenija",
            itemHref: "/rezervni-delovi/delovi-za-prikljucne-masine/agromehanika-kranj-slovenija",
          },
          {
            itemName: "Majevica",
            itemHref: "/rezervni-delovi/delovi-za-prikljucne-masine/majevica",
          },
          {
            itemName: "FPM Agromehanika",
            itemHref: "/rezervni-delovi/delovi-za-prikljucne-masine/fpm-agromehanika",
          },
          {
            itemName: "INO Brežice Slovenija",
            itemHref: "/rezervni-delovi-delovi-za-prikljucne-masine/ino-brezice-slovenija",
          },
        ],
      },
    ],
  },
  {
    title: "Ostalo",
    subtitle: "Solis traktori serije N i S kombinuju snagu, efikasnost i naprednu tehnologiju, pružajući optimalna rešenja za različite poljoprivredne potrebe. Pogledajte našu ponudu i pronađite model koji vam najbolje odgovara.",
    items: [
      {
        name: "Razno - delovi",
        list: [
          {
            itemName: "Kardani",
            itemHref: "/rezervni-delovi/ostalo/kardani",
          },
          {
            itemName: "Ulja i maziva",
            itemHref: "/rezervni-delovi/ostalo/ulja-i-maziva",
          },
          {
            itemName: "Hladnjaci",
            itemHref: "/rezervni-delovi/ostalo/hladnjaci",
          },
          {
            itemName: "Trimeri",
            itemHref: "/rezervni-delovi/ostalo/trimeri",
          },
          {
            itemName: "Spoljnje gume",
            itemHref: "/rezervni-delovi/ostalo/spoljne-gume",
          },
          {
            itemName: "Razno",
            itemHref: "/rezervni-delovi/ostalo/razno",
          },
        ],
      },
    ],
  },
]

export const partneri:PartnersProps[] = [
  {
    alt:'Solis traktori, Solis Srbija, Solis masine',
    image:'/sponsors/solis.png'
  },
  {
    alt:'IMT traktori, IMT Srbija, IMT masine',
    image:'/sponsors/imt.png'
  },
  {
    alt:'John Deere traktori, John Deere Srbija, John Deere masine',
    image:'/sponsors/deere.png'
  },
  {
    alt:'YTO traktori, YTO Srbija, YTO masine',
    image:'/sponsors/yto.png'
  },
  {
    alt:'FPM traktori, FPM Srbija, FPM masine',
    image:'/sponsors/fpm.png'
  },
  {
    alt:'Mahindra traktori, Mahindra Srbija, Mahindra masine',
    image:'/sponsors/mahindra.png'
  },
  {
    alt:'Carraro traktori, Carraro Srbija, Carraro masine',
    image:'/sponsors/carraro.png'
  },
  {
    alt:'Celmak Čelmak traktori, Celmak Čelmak Srbija, Celmak Čelmak masine',
    image:'/sponsors/celmak.png'
  },
  {
    alt:'Massey Ferguson traktori, Massey Ferguson Srbija, Massey Ferguson masine',
    image:'/sponsors/massey.png'
  },
  {
    alt:'Belarus traktori, Belarus Srbija, Belarus masine',
    image:'/sponsors/belarus.png'
  },
  {
    alt:'INO Brežice Ino Brezice traktori, INO Brežice Ino Brezice Srbija, INO Brežice Ino Brezice masine',
    image:'/sponsors/ino.png'
  },
  {
    alt:'FMP Agromehanika Kranj traktori,FPM Agromehanika Kranj Srbija,FPM Agromehanika Kranj masine',
    image:'/sponsors/kranj.jpg'
  },
]



export const traktoriBrands:CategoryBoxProps[] = [
  {
    alt:'Solis traktori, Solis Srbija, Solis masine',
    image:'/sponsors/solis.png',
    link:'/traktori/solis',
    quantity:'Solis traktori'
  },
  {
    alt:'IMT traktori, IMT Srbija, IMT masine',
    image:'/sponsors/imt.png',
    link:'/traktori/imt',
    quantity:'IMT traktori'
  },
  {
    alt:'John Deere traktori, John Deere Srbija, John Deere masine',
    image:'/sponsors/deere.png',
    link:'/traktori/john-deere',
    quantity:'John Deere traktori'
  },
  {
    alt:'YTO traktori, YTO Srbija, YTO masine',
    image:'/sponsors/yto.png',
    link:'/traktori/yto',
    quantity:'YTO traktori'
  },
  {
    alt:'Mahindra traktori, Mahindra Srbija, Mahindra masine',
    image:'/sponsors/mahindra.png',
    link:'/traktori/mahindra',
    quantity:'Mahindra traktori'
  },
  {
    alt:'Carraro traktori, Carraro Srbija, Carraro masine',
    image:'/sponsors/carraro.png',
    link:'/traktori/carraro',
    quantity:'Carraro traktori'
  },  
  {
    alt:'Belarus traktori, Belarus Srbija, Belarus masine',
    image:'/sponsors/belarus.png',
    link:'/traktori/belarus',
    quantity:'Belarus traktori'
  },
]

export const machinesCategories: CategoryBoxProps[] = [
  {
    alt:'Balirke Srbija, Balirke Jugometal, Balirke MetalFach, Balirke Ursus',
    image:'/images/masine/balirke.webp',
    link:'/prikljucne-masine/balirke',
    quantity:'Balirke'
  },
  {
    alt:'Kosacice Srbija, Kosacice Jugometal, Kosačice ',
    image:'/images/masine/kosacice.webp',
    link:'/prikljucne-masine/kosacice',
    quantity:'Kosačice'
  },
  {
    alt:'Sakupljači Srbija, Sakupljači Jugometal, Sakupljaci, Sakupljači ',
    image:'/images/masine/sakupljaci.webp',
    link:'/prikljucne-masine/sakupljaci',
    quantity:'Sakupljači'
  },
  {
    alt:'Utovarivači Srbija, Utovarivači Jugometal, Utovarivaci, Utovarivači ',
    image:'/images/masine/utovarivaci.webp',
    link:'/prikljucne-masine/utovarivaci',
    quantity:'Utovarivači'
  },
  {
    alt:'Freze Srbija, Freze Jugometal, Freze Agromenahika FPM',
    image:'/images/masine/freze.webp',
    link:'/prikljucne-masine/freze',
    quantity:'Freze'
  },
  {
    alt:'Plugovi Srbija, Plugovi Jugometal, Plugovi, Bell Impex ',
    image:'/images/masine/plugovi.webp',
    link:'/prikljucne-masine/plugovi',
    quantity:'Plugovi'
  },
  {
    alt:'Sejalice Srbija, Sejalice Jugometal, Sejalice ',
    image:'/images/masine/sejalice.webp',
    link:'/prikljucne-masine/sejalice',
    quantity:'Sejalice'
  },
  {
    alt:'Prskalice Srbija, Prskalice Jugometal, Prskalice',
    image:'/images/masine/prskalice.webp',
    link:'/prikljucne-masine/prskalice',
    quantity:'Prskalice'
  },
  {
    alt:'Rasipači Srbija, Rasipači Jugometal, Rasipači',
    image:'/images/masine/rasipaci.webp',
    link:'/prikljucne-masine/rasipaci',
    quantity:'Rasipači'
  },
  {
    alt:'Setvospremači Srbija, Setvospremači Jugometal, Setvospremači',
    image:'/images/masine/setvospremaci.webp',
    link:'/prikljucne-masine/setvospremaci',
    quantity:'Setvospremači'
  },
  {
    alt:'Atomizeri Srbija, Atomizeri Jugometal, Atomizeri Agromenahika Kranj, Atomizeri Morava',
    image:'/images/masine/atomizeri.jpg',
    link:'/prikljucne-masine/atomizeri',
    quantity:'Atomizeri'
  },
  {
    alt:'Mulčari Srbija, Mulčari Jugometal, Mulcari Agromenahika FPM, Mulcari INO Brežice',
    image:'/images/masine/mulcari.webp',
    link:'/prikljucne-masine/mulcari',
    quantity:'Mulčari'
  },
  {
    alt:'Prikolice Srbija, Prikolice Jugometal, Prikolice',
    image:'/images/masine/prikolice.webp',
    link:'/prikljucne-masine/prikolice',
    quantity:'Prikolice'
  },
  {
    alt:'Cisterne Srbija, Cisterne Jugometal, Cisterne',
    image:'/images/masine/cisterne.webp',
    link:'/prikljucne-masine/cisterne',
    quantity:'Cisterne'
  },
  {
    alt:'Rasturači stajnaka Srbija, Rasturači stajnaka Jugometal, Rasturači stajnaka',
    image:'/images/masine/rasturaci.webp',
    link:'/prikljucne-masine/rasturaci',
    quantity:'Rasturači'
  },
];


export const deloviCategories:CategoryBoxProps[] = [
  {
    alt:'Traktorski rezervni delovi Srbija, Traktorski rezervni delovi Jugometal, Traktorski rezervni delovi',
    image:'/images/masine/trdelovi.png',
    link:'/rezervni-delovi/traktorski-delovi',
    quantity:''
  },
  {
    alt:'Delovi za priključne mašine Srbija, Delovi za priključne mašine Jugometal, Delovi za priključne mašine',
    image:'/images/masine/delmasine.png',
    link:'/rezervni-delovi/delovi-za-prikljucne-masine',
    quantity:''
  },
  {
    alt:'Delovi za priključne mašine Srbija, Delovi za priključne mašine Jugometal, Delovi za priključne mašine',
    image:'/images/masine/ostalo.png',
    link:'/rezervni-delovi/ostalo',
    quantity:''
  },
]


export const traktorskiDeloviCategories:CategoryBoxProps[] = [
  {
    alt:'Massey Ferguson Traktorski rezervni delovi Srbija, Massey Ferguson  Traktorski rezervni delovi Jugometal, Traktorski rezervni delovi Massey Ferguson',
    image:'/images/masine/masey-delovi.png',
    link:'/rezervni-delovi/traktorski-delovi/massey-ferguson',
    quantity:''
  },
  {
    alt:'Landini Traktorski rezervni delovi Srbija, Landini  Traktorski rezervni delovi Jugometal, Traktorski rezervni delovi Landini',
    image:'/images/masine/landini-delovi.png',
    link:'/rezervni-delovi/traktorski-delovi/landini',
    quantity:''
  },
  {
    alt:'IMT Traktorski rezervni delovi Srbija, IMT  Traktorski rezervni delovi Jugometal, Traktorski rezervni delovi IMT',
    image:'/images/masine/imt-delovi.png',
    link:'/rezervni-delovi/traktorski-delovi/imt',
    quantity:''
  },
  {
    alt:'Solis Traktorski rezervni delovi Srbija, Solis  Traktorski rezervni delovi Jugometal, Traktorski rezervni delovi Solis',
    image:'/images/masine/solis-delovi.png',
    link:'/rezervni-delovi/traktorski-delovi/solis',
    quantity:''
  },
  {
    alt:'YTO Traktorski rezervni delovi Srbija, YTO  Traktorski rezervni delovi Jugometal, Traktorski rezervni delovi YTO',
    image:'/images/masine/yto-delovi.png',
    link:'/rezervni-delovi/traktorski-delovi/yto',
    quantity:''
  },
]

export const deloviZaMasineCategories:CategoryBoxProps[] = [
  {
    alt:'SIP Šempeter Slovenija delovi za mašine, SIP Šempeter Srbija Jugometal, SIP Šempeter Slovenija, delovi za priključne mašine',
    image:'/images/masine/sip-delovi.png',
    link:'/rezervni-delovi/delovi-za-prikljucne-masine/sip-sempeter',
    quantity:''
  },
  {
    alt:'Rotaciona kosa Poljska delovi za mašine, Rotaciona kosa Srbija Jugometal, Rotaciona kosa Poljska, delovi za priključne mašine',
    image:'/images/masine/rotaciona-delovi.png',
    link:'/rezervni-delovi/delovi-za-prikljucne-masine/rotaciona-kosa-poljska',
    quantity:''
  },
  {
    alt:'Agromehanika Kranj delovi za mašine, Agromehanika Kranj Srbija Jugometal, Agromehanika Kranj, delovi za priključne mašine',
    image:'/images/masine/agro-delovi.png',
    link:'/rezervni-delovi/delovi-za-prikljucne-masine/agromehanika-kranj',
    quantity:''
  },
  {
    alt:'Majevica delovi za mašine, Majevica Srbija Jugometal, Majevica, delovi za priključne mašine',
    image:'/images/masine/majevica-delovi.png',
    link:'/rezervni-delovi/delovi-za-prikljucne-masine/majevica',
    quantity:''
  },
  {
    alt:'FPM Agromehanika delovi za mašine, FPM Agromehanika Srbija Jugometal, FPM Agromehanika delovi za priključne mašine',
    image:'/images/masine/fpm-delovi.png',
    link:'/rezervni-delovi/delovi-za-prikljucne-masine/fpm-agromehanika',
    quantity:''
  },
  {
    alt:'INO Brežice delovi za mašine, INO Brežice Srbija Jugometal, INO Brežice delovi za priključne mašine',
    image:'/images/masine/ino-delovi.png',
    link:'/rezervni-delovi/delovi-za-prikljucne-masine/ino-brezice',
    quantity:''
  },
]

export const ostaloCategories:CategoryBoxProps[] = [
  {
    alt:'Kardani delovi za mašine, Kardani Srbija Jugometal, Kardani, delovi za priključne mašine',
    image:'/images/masine/kardani-delovi.png',
    link:'/rezervni-delovi/ostalo/kardani',
    quantity:''
  },
  {
    alt:'Ulja i maziva delovi za mašine, Ulja i maziva Srbija Jugometal, Ulja i maziva, delovi za priključne mašine',
    image:'/images/masine/ulja-delovi.png',
    link:'/rezervni-delovi/ostalo/ulja-i-maziva',
    quantity:''
  },
  {
    alt:'Hladnjaci delovi za mašine, Hladnjaci Srbija Jugometal, Hladnjaci, delovi za priključne mašine',
    image:'/images/masine/hladnjaci-delovi.png',
    link:'/rezervni-delovi/ostalo/hladnjaci',
    quantity:''
  },
  {
    alt:'Trimeri delovi za mašine, Trimeri Srbija Jugometal, Trimeri, delovi za priključne mašine',
    image:'/images/masine/trimeri-delovi.png',
    link:'/rezervni-delovi/ostalo/trimeri',
    quantity:''
  },
  {
    alt:'Spoljne gume delovi za mašine, Spoljne gume Srbija Jugometal, Spoljne gume, delovi za priključne mašine',
    image:'/images/masine/spoljne-delovi.png',
    link:'/rezervni-delovi/ostalo/spoljne-gume',
    quantity:''
  },
  {
    alt:'Razno delovi za mašine, Razno Srbija Jugometal, Razno, delovi za priključne mašine',
    image:'/images/masine/razno-delovi.png',
    link:'/rezervni-delovi/ostalo/razno',
    quantity:''
  },
]