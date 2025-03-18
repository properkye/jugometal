"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";

interface FeedbackState {
  state: boolean;
  title?: string;
  subtitle?: string;
  action?: () => void;
}

export interface Product {
  id:number;
  name: string;
  description_one: string;
  description_two: string;
  category: string;
  subcategory: string;
  regular_price?: string;
  action_price?: string;
  images: string[];
  pdf_file?: string | null;
  brand: string;
  features?: string[];
  url:string
}


interface AdminContextType {
  selectScreen:string;
  setSelectScreen: (screen: string) => void;
  selectCategories: string;
  setSelectCategories: (categories: string) => void;

  selectTractorCategories: string;
  setSelectTractorCategories: (categories: string) => void;
  selectMachineCategories: string;
  setSelectMachineCategories: (categories: string) => void;
  selectPartCategories: string;
  setSelectPartCategories: (categories: string) => void;
  category:string;
  setCategory: (categories: string) => void;
  subcategory: string;
  setSubcategory:  (categories: string) => void;

  selectBrand: string;
  setSelectBrand:  (categories: string) => void;


  feedback: FeedbackState;
  setFeedback: (state: boolean, options?: Omit<FeedbackState, "state">) => void;

  selectTractorsPartsCategories: string;
  setSelectTractorsPartCategories:(cat:string) => void

  selectMachinePartsCategories:string;
  setSelectMachinePartCategories:(cat:string) => void

  selectOstaloPartsCategories:string;
  setSelectOstaloPartCategories:(cat:string) => void

  resetState:() => void,
  
  data:Product[],
  setData: React.Dispatch<React.SetStateAction<Product[]>>;

  from:string,
  setFrom:(from:string) => void

  product:Product | undefined,
  setProduct:(product:Product) => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

interface AdminContextProviderProps {
  children: ReactNode;
}

const AdminContextProvider: React.FC<AdminContextProviderProps> = ({ children }) => {

  // products list
  const [selectScreen, setSelectScreen] = useState<string>('traktori-list');

  const [from, setFrom] = useState<string>('')

  // tractors, machines, parts
  const [selectCategories, setSelectCategories] = useState<string>('');
  
  // solis,yto..
  const [selectTractorCategories, setSelectTractorCategories] = useState<string>('');
  // atomizeri, mulcari..
  const [selectMachineCategories, setSelectMachineCategories] = useState<string>('');

  // traktroski delovi, delovi za masine, ostalo
  const [selectPartCategories, setSelectPartCategories] = useState<string>('');

  const [selectTractorsPartsCategories, setSelectTractorsPartCategories] = useState<string>('');
  const [selectMachinePartsCategories, setSelectMachinePartCategories] = useState<string>('');
  const [selectOstaloPartsCategories, setSelectOstaloPartCategories] = useState<string>('');

  const [category, setCategory] = useState<string>('')
  const [subcategory, setSubcategory] = useState<string>('')


  const [selectBrand, setSelectBrand] = useState('')

  
  const [feedback, setFeedbackState] = useState<FeedbackState>({
    state: false,
    title: '',
    subtitle: '',
    action: () => {},
  });

  const [data, setData] = useState<Product[]>([]);

  const [product,setProduct] = useState<Product | undefined>(undefined)


  const setFeedback = (state: boolean, options?: Omit<FeedbackState, "state">) => {
    setFeedbackState({ state, ...options });
  };

  const resetState = () => {
    setSelectCategories('');
    setSelectTractorCategories('');
    setSelectMachineCategories('');
    setSelectPartCategories('');
    setSelectTractorsPartCategories('');
    setSelectMachinePartCategories('');
    setSelectOstaloPartCategories('');
    setCategory('');
    setSubcategory('');
  };


  return (
    <AdminContext.Provider value={{
      selectScreen,
      setSelectScreen,
      setSelectCategories,
      selectCategories,
      selectTractorCategories,
      setSelectTractorCategories,
      selectMachineCategories,
      setSelectMachineCategories,
      selectPartCategories,
      setSelectPartCategories,
      category,
      setCategory,
      subcategory,
      selectBrand,
      setSelectBrand,
      setSubcategory,
      feedback,
      setFeedback,
      selectTractorsPartsCategories,
      setSelectTractorsPartCategories,
      selectMachinePartsCategories,
      setSelectMachinePartCategories,
      selectOstaloPartsCategories,
      setSelectOstaloPartCategories,
      resetState,
      data,
      setData,
      from,
      setFrom,
      product,
      setProduct
    }}>
      {children}
    </AdminContext.Provider>
  );
};

// Custom hook za korišćenje konteksta
const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext mora biti korišćen unutar AdminContextProvider");
  }
  return context;
};

export { AdminContextProvider, useAdminContext };
  