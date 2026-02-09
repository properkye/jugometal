"use client";
import React from "react";
import Header from "../Header";
import { useAdminContext } from "@/context/adminContext";
import { FaTractor, FaTools, FaCogs } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const selections = [
  {
    title: "Traktori",
    state: "SelectTractors",
    category: "traktori",
    icon: FaTractor,
    description: "Dodajte novi traktor u katalog"
  },
  {
    title: "Priključne mašine",
    state: "SelectMachines",
    category: "prikljucne-masine",
    icon: FaTools,
    description: "Dodajte novu priključnu mašinu"
  },
  {
    title: "Rezervni delovi",
    state: "SelectPartCategory",
    category: "rezervni-delovi",
    icon: FaCogs,
    description: "Dodajte novi rezervni deo"
  },
];

const AddNew: React.FC = () => {
  const {
    selectCategories,
    setSelectCategories,
    setSelectScreen,
    setCategory,
  } = useAdminContext();

  const handleSelect = (category: string) => {
    setSelectCategories(category);
    setCategory(category);
    setSelectScreen(category);
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <Header
        title="Dodaj nov proizvod"
        subtitle="Kontrolna tabla / Dodaj proizvod"
      />

      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">Izaberite kategoriju proizvoda</h2>
            <p className="text-sm md:text-base text-gray-600">Kliknite na kategoriju kako biste nastavili sa dodavanjem proizvoda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">{selections.map((selection, i) => {
              const Icon = selection.icon;
              
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(selection.category)}
                  className="group p-6 md:p-8 rounded-xl border-2 border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-100 text-gray-600 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
                      <Icon size={28} className="md:w-8 md:h-8" />
                    </div>
                    
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                        {selection.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500">{selection.description}</p>
                    </div>

                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <HiArrowRight size={20} className="text-gray-400" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
