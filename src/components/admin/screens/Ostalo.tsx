"use client";
import React from "react";
import Header from "../Header";
import NextButton from "../NextButton";
import Back from "../Back";
import { useAdminContext } from "@/context/adminContext";
import SelectSection from "../SelectSection";
import RadioInputs from "../RadioInputs";
import RadioInput from "../RadioInput";


const ostalo = [ 
    { title: "Kardani", state: "kardani", category:'kardani' },
    { title: "Ulja i maziva", state: "ulja-i-maziva"},
    { title: "Hladnjaci", state: "hladnjaci"},
    { title: "Trimeri", state: "trimeri"},
    { title: "Spoljne gume", state: "spoljne-gume"},
    { title: "Razno", state: "razno"}
  ]
  

const Ostalo: React.FC = () => {
  const {
    setSelectScreen,
    selectOstaloPartsCategories,
    setSelectOstaloPartCategories,
    setSelectBrand
  } = useAdminContext();

  return (
    <div>
      <Header
        title="Izaberite kategoriju delova za priključne mašine"
        subtitle="Unesite potrebne informacije."
      />

      <Back click={() => setSelectScreen("rezervni-delovi")} />
       <SelectSection
        num="1"
        label="Izaberite kategoriju delova za priključne mašine."
        description="Izaberite polje kako bi nastavili dalje."
      >
        <RadioInputs>
          {ostalo.map((selection, i) => (
            <RadioInput
              title={selection.title}
              option={selection.state}
              key={i}
              value={selectOstaloPartsCategories}
              onChange={() => {
                setSelectOstaloPartCategories(selection.state);
                setSelectBrand(selection.title)
              }}
            />
          ))}
        </RadioInputs>
      </SelectSection>

      <NextButton
        btnText="Dalje"
        span="Ukoliko ste izabrali kategoriju, pritisnite dalje."
        selected={selectOstaloPartsCategories}
        click={() => setSelectScreen("PartProductDetails")}
      />
    </div>
  );
};

export default Ostalo;
