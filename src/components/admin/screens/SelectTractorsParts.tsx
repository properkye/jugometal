"use client";
import React from "react";
import Header from "../Header";
import NextButton from "../NextButton";
import { useAdminContext } from "@/context/adminContext";
import SelectSection from "../SelectSection";
import RadioInputs from "../RadioInputs";
import RadioInput from "../RadioInput";

const traktorskiDelovi = [
  { title: "Massey Ferguson", state: "massey-ferguson" },
  { title: "Jinma", state: "jinma" },
  { title: "Landini", state: "landini" },
  { title: "Tafe/IMT", state: "tafe-imt" },
  { title: "Solis", state: "solis" },
  { title: "YTO", state: "yto" },
];
const SelectTractorsParts: React.FC = () => {
  const {
    setSelectScreen,
    selectTractorsPartsCategories,
    setSelectTractorsPartCategories,
    setSelectBrand,
  } = useAdminContext();

  return (
    <div>
      <Header
        title="Izaberite kategoriju traktorskih delova"
        subtitle="Unesite potrebne informacije."
        onBack={() => setSelectScreen("rezervni-delovi")}
      />
      <SelectSection
        num="1"
        label="Izaberite kategoriju traktorskih delova."
        description="Izaberite polje kako bi nastavili dalje."
      >
        <RadioInputs>
          {traktorskiDelovi.map((selection, i) => (
            <RadioInput
              title={selection.title}
              option={selection.state}
              key={i}
              value={selectTractorsPartsCategories}
              onChange={() => {
                setSelectTractorsPartCategories(selection.state);
                setSelectBrand(selection.state);
              }}
            />
          ))}
        </RadioInputs>
      </SelectSection>

      <NextButton
        btnText="Dalje"
        span="Ukoliko ste izabrali kategoriju, pritisnite dalje."
        selected={selectTractorsPartsCategories}
        click={() => setSelectScreen("PartProductDetails")}
      />
    </div>
  );
};

export default SelectTractorsParts;
