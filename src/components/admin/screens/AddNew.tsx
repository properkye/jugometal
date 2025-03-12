"use client";
import React from "react";
import Header from "../Header";
import NextButton from "../NextButton";
import { useAdminContext } from "@/context/adminContext";
import SelectSection from "../SelectSection";
import RadioInputs from "../RadioInputs";
import RadioInput from "../RadioInput";

const selections = [
  {
    title: "Traktori",
    state: "SelectTractors",
    category: "traktori",
  },
  {
    title: "Priključne mašine",
    state: "SelectMachines",
    category: "prikljucne-masine",
  },
  {
    title: "Rezervni delovi",
    state: "SelectPartCategory",
    category: "rezervni-delovi",
  },
];

const AddNew: React.FC = () => {
  const {
    selectCategories,
    setSelectCategories,
    setSelectScreen,
    setCategory,
  } = useAdminContext();

  return (
    <div>
      <Header
        title="Dodajte nov proizvod"
        subtitle="Unesite potrebne informacije."
      />

      <div className="my-[4rem]" />

      <SelectSection
        num="1"
        label="Izaberite kategoriju proizvoda."
        description="Izaberite polje kako bi nastavili dalje."
      >
        <RadioInputs>
          {selections.map((selection, i) => (
            <RadioInput
              title={selection.title}
              option={selection.category}
              key={i}
              value={selectCategories}
              onChange={() => {
                setSelectCategories(selection.category)
                setCategory(selection.category)
              }}
            />
          ))}
        </RadioInputs>
      </SelectSection>

      <NextButton
        btnText="Dalje"
        span="Ukoliko ste izabrali kategoriju, pritisnite dalje."
        selected={selectCategories}
        click={() => setSelectScreen(selectCategories)}
      />
    </div>
  );
};

export default AddNew;
