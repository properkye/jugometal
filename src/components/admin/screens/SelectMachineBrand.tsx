"use client";
import React from "react";
import Header from "../Header";
import { useAdminContext } from "@/context/adminContext";
import SelectSection from "../SelectSection";
import RadioInputs from "../RadioInputs";
import RadioInput from "../RadioInput";
import NextButton from "../NextButton";

interface Selection {
  title: string;
  state: string;
}

const SelectMachineBrand: React.FC = () => {
  const { setSelectScreen, subcategory, selectBrand, setSelectBrand } =
    useAdminContext();

  const getSelections = (subcategory: string): Selection[] => {
    const categories: Record<string, Selection[]> = {
      balirke: [
        { title: "Metal-Fach", state: "metal-fach" },
        { title: "Ursus", state: "ursus" },
      ],
      utovarivaci: [{ title: "Ferocoop", state: "ferocoop" }],
      kosacice: [
        { title: "Čelmak", state: "celmak" },
        { title: "Minos Agri", state: "minos-agri" },
        { title: "FPM Agromehanika", state: "fpm-agromehanika" },
      ],
      sakupljaci: [{ title: "Termometal", state: "termometal" }],
      freze: [{ title: "FPM Agromehanika", state: "fpm-agromehanika" }],
      plugovi: [{ title: "Bell Impex", state: "bell-impex" }],
      sejalice: [{ title: "Majevica", state: "majevica" }],
      prskalice: [
        { title: "Agromehanika Kranj", state: "agromehanika-kranj" },
        { title: "Majevica", state: "majevica" },
        { title: "Gumaplast Rau", state: "gumaplast-rau" },
      ],
      rasipaci: [
        { title: "Minos Agri", state: "minos-agri" },
        { title: "Majevica", state: "majevica" },
        { title: "Ferocoop", state: "ferocoop" },
      ],
      setvospremaci: [
        { title: "Gorenc", state: "gorenc" },
        { title: "Majevica", state: "majevica" },
      ],
      atomizeri: [
        { title: "Agromehanika Kranj", state: "agromehanika-kranj" },
        { title: "Morava", state: "morava" },
      ],
      mulcari: [
        { title: "INO Brežice", state: "ino-brezice" },
        { title: "Mega Metal", state: "mega-metal" },
        { title: "FPM Agromehanika", state: "fpm-agromehanika" },
      ],
      cisterne: [{ title: "Majevica", state: "majevica" }],
      rasturaci: [{ title: "Majevica", state: "majevica" }],
      prikolice: [
        { title: "Majevica", state: "majevica" },
        { title: "Čelmak", state: "celmak" },
      ],
    };

    return categories[subcategory] || [];
  };

  const selections: Selection[] = getSelections(subcategory);

  return (
    <div>
      <Header
        title={`Izaberite proizvodjača priključnih mašina - ${subcategory.toUpperCase()}`}
        subtitle="Unesite potrebne informacije."
        onBack={() => setSelectScreen("prikljucne-masine")}
      />

      <SelectSection
        num="1"
        label={`Izaberite proizvodjača - ${subcategory.toUpperCase()}`}
        description="Izaberite polje kako bi nastavili dalje."
      >
        <RadioInputs>
          {selections.map((selection, i) => (
            <RadioInput
              title={selection.title}
              option={selection.state}
              key={i}
              value={selectBrand}
              onChange={() => {
                setSelectBrand(selection.state);
              }}
            />
          ))}
        </RadioInputs>
      </SelectSection>

      <NextButton
        btnText="Dalje"
        span="Ukoliko ste izabrali kategoriju, pritisnite dalje."
        selected={selectBrand}
        click={() => setSelectScreen("ProductDetails")}
      />
    </div>
  );
};

export default SelectMachineBrand;
