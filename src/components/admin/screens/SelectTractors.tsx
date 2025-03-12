"use client";
import React from "react";
import Header from "../Header";
import NextButton from "../NextButton";
import Back from "../Back";
import { useAdminContext } from "@/context/adminContext";
import RadioInputs from "../RadioInputs";
import RadioInput from "../RadioInput";
import SelectSection from "../SelectSection";

const selections = [
  {
    title: "IMT",
    state: "imt",
  },
  {
    title: "Solis",
    state: "solis",
  },
  {
    title: "Mahindra",
    state: "mahindra",
  },
  {
    title: "John Deere",
    state: "john-deere",
  },
  {
    title: "Carraro",
    state: "carraro",
  },
  {
    title: "YTO",
    state: "yto",
  },
  {
    title: "Belarus",
    state: "belarus",
  },
  {
    title: "Zetor",
    state: "zetor",
  },
];

const SelectTractors: React.FC = () => {
  const {
    setSelectScreen,
    selectTractorCategories,
    setSelectTractorCategories,
    setSubcategory,
    setSelectBrand
  } = useAdminContext();

  return (
    <div>
      <Header
        title="Izaberite kategoriju traktora"
        subtitle="Unesite potrebne informacije."
      />

      <Back click={() => setSelectScreen("AddNew")} />
      <SelectSection
        num="1"
        label="Izaberite kategoriju traktora."
        description="Izaberite polje kako bi nastavili dalje."
      >
        <RadioInputs>
          {selections.map((selection, i) => (
            <RadioInput
              title={selection.title}
              option={selection.state}
              key={i}
              value={selectTractorCategories}
              onChange={() => {
                setSelectTractorCategories(selection.state);
                setSubcategory(selection.state);
                setSelectBrand(selection.state)
              }}
            />
          ))}
        </RadioInputs>
      </SelectSection>

      <NextButton
        btnText="Dalje"
        span="Ukoliko ste izabrali kategoriju, pritisnite dalje."
        selected={selectTractorCategories}
        click={() => setSelectScreen("ProductDetails")}
      />
    </div>
  );
};

export default SelectTractors;
