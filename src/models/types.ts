import { ReactNode } from "react";

export interface FrontLayoutProps {
  children: ReactNode;
}

export interface EntrySectionProps {
  title: string;
  subtitle: string;
  text: string;
  wrapper: boolean;
}

export interface SecNavigationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}


export interface HeroSectionProps {
  title:string;
  subtitle:string;
  href:string
}


export interface CarouselItemProps {
  title: string;
  subtitle: string;
  imgSrc: string;
  alt: string;
  href: string;
}

export interface CarouselContainerProps {
  items: CarouselItemProps[]; 
}

interface TractorAccordionListItem {
  itemName: string;
  itemHref: string;
}

interface TractorAccordionItem {
  name: string;
  list: TractorAccordionListItem[]; // Ispravljeno - dodata struktura liste
}

export interface TractorAccordionProps {
  title: string;
  subtitle: string;
  items: TractorAccordionItem[];
}

export interface BanerProps {
  imgSrc: string;
  alt: string;
  title: string;
  subtitle: string;
  href: string;
}

export interface PartnersProps {
  alt:string;
  image:string
}

export interface CategoryBoxProps {
  alt:string;
  link:string;
  image:string,
  quantity:string
}