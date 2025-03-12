"use client";
import React from "react";
import Header from "../Header";
import NextButton from "../NextButton";
import Back from "../Back";
import { useAdminContext } from "@/context/adminContext";
import SelectSection from "../SelectSection";
import RadioInputs from "../RadioInputs";
import RadioInput from "../RadioInput";


  const deloviZaMasine = [
    { title: "SIP Šempeter Slovenija", state: "sip-sempeter-slovenija" },
    { title: "Rotaciona kosa Poljska", state: "rotaciona-kosa-poljska" },
    { title: "Agromehanika Kranj", state: "agromehanika-kranj-slovenija" },
    { title: "Majevica", state: "majevica"},
    { title: "FPM Agromehanika", state: "fpm-agromehanika"},
    { title: "INO Brežice Slovenija", state: "ino-brezice-slovenija"},
  ]
  

const SelectMacineParts: React.FC = () => {
  const {
    setSelectScreen,
    selectMachinePartsCategories,
    setSelectMachinePartCategories,
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
          {deloviZaMasine.map((selection, i) => (
            <RadioInput
              title={selection.title}
              option={selection.state}
              key={i}
              value={selectMachinePartsCategories}
              onChange={() => {
                setSelectMachinePartCategories(selection.state);
                setSelectBrand(selection.state)
              }}
            />
          ))}
        </RadioInputs>
      </SelectSection>

      <NextButton
        btnText="Dalje"
        span="Ukoliko ste izabrali kategoriju, pritisnite dalje."
        selected={selectMachinePartsCategories}
        click={() => setSelectScreen("PartProductDetails")}
      />
    </div>
  );
};

export default SelectMacineParts;
