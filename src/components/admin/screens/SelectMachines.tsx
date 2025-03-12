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
  { title: "Balirke", state: "balirke" },
  { title: "Kosačice", state: "kosacice" },
  { title: "Sakupljači", state: "sakupljaci" },
  { title: "Utovarivači", state: "utovarivaci" },
  { title: "Freze", state: "freze" },
  { title: "Plugovi", state: "plugovi" },
  { title: "Sejalice", state: "sejalice" },
  { title: "Prskalice", state: "prskalice" },
  { title: "Rasipači", state: "rasipaci" },
  { title: "Setvospremači", state: "setvospremaci" },
  { title: "Atomizeri", state: "atomizeri" },
  { title: "Mulčari", state: "mulcari" },
  { title: "Prikolice", state: "prikolice" },
  { title: "Cisterne", state: "cisterne" },
  { title: "Rasturači", state: "rasturaci" },
];

const SelectMachines: React.FC = () => {
  const {
    setSelectScreen,
    selectMachineCategories,
    setSelectMachineCategories,
    setSubcategory,
  } = useAdminContext();

  

  return (
    <div>
      <Header
        title="Izaberite kategoriju priključnih mašina"
        subtitle="Unesite potrebne informacije."
      />

      <Back click={() => setSelectScreen("AddNew")} />

      <SelectSection
        num="1"
        label="Izaberite kategoriju priključnih mašina"
        description="Izaberite polje kako bi nastavili dalje."
      >
        <RadioInputs>
          {selections.map((selection, i) => (
            <RadioInput
              title={selection.title}
              option={selection.state}
              key={i}
              value={selectMachineCategories}
              onChange={() => {
                setSelectMachineCategories(selection.state);
                setSubcategory(selection.state);
              }}
            />
          ))}
        </RadioInputs>
      </SelectSection>

      <NextButton
        btnText="Dalje"
        span="Ukoliko ste izabrali kategoriju, pritisnite dalje."
        selected={selectMachineCategories}
        click={() => setSelectScreen("SelectMachineBrand")}
      />
    </div>
  );
};

export default SelectMachines;
