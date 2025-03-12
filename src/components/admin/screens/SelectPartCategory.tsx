"use client";
import React from "react";
import Header from "../Header";
import NextButton from "../NextButton";
import Back from "../Back";
import { useAdminContext } from "@/context/adminContext";
import SelectSection from "../SelectSection";
import RadioInputs from "../RadioInputs";
import RadioInput from "../RadioInput";



const selections = [
  {title:"Traktorski delovi", state:'traktorski-delovi'},
  {title:"Delovi za mašine", state:'delovi-za-masine'},
  {title:"Ostalo", state:'ostalo'}
]

const SelectPartCategory: React.FC = () => {
  const { setSelectScreen, selectPartCategories, setSelectPartCategories, setSubcategory } =
    useAdminContext();

  return (
    <div>
      <Header
        title="Izaberite kategoriju rezervnih delova"
        subtitle="Unesite potrebne informacije."
      />

      <Back click={() => setSelectScreen("AddNew")} />

      <SelectSection
        num="1"
        label="Izaberite kategoriju rezervnih delova."
        description="Izaberite polje kako bi nastavili dalje."
      >
        <RadioInputs>
          {selections.map((selection, i) => (
            <RadioInput
              title={selection.title}
              option={selection.state}
              key={i}
              value={selectPartCategories}
              onChange={() => {
                setSelectPartCategories(selection.state);
                setSubcategory(selection.state);
              }}
            />
          ))}
        </RadioInputs>
      </SelectSection>


      <NextButton
        btnText="Dalje"
        span="Ukoliko ste izabrali kategoriju, pritisnite dalje."
        selected={selectPartCategories}
        click={() => setSelectScreen(selectPartCategories === 'ostalo' ? 'ostalo' : selectPartCategories === 'delovi-za-masine' ? 'delovi-za-masine' : 'traktorski-delovi')}
      />
    </div>
  );
};

export default SelectPartCategory;
