"use client";
import React from "react";
import Traktori from "./screens/Traktori";
import PrikljucneMasine from "./screens/PrikljucneMasine";
import RezervniDelovi from "./screens/RezervniDelovi";
import AddNew from "./screens/AddNew";
import SelectTractors from "./screens/SelectTractors";
import { useAdminContext } from "@/context/adminContext";
import ProductDetails from "./screens/ProductDetails";
import SelectMachines from "./screens/SelectMachines";
import SelectPartCategory from "./screens/SelectPartCategory";
import SelectTractorsParts from "./screens/SelectTractorsParts";
import SelectMacineParts from "./screens/SelectMachineParts";
import Ostalo from "./screens/Ostalo";
import PartProductDetails from "./screens/PartProductDetails";
import SelectMachineBrand from "./screens/SelectMachineBrand";
import EditProduct from "./screens/EditProduct";

const Screens = {
  Traktori: "traktori-list",
  PrikljucneMasine: "prikljucne-masine-list",
  RezervniDelovi: "rezervni-delovi-list",
  AddNew: "AddNew",
  SelectTractors: "traktori",
  SelectMachines: "prikljucne-masine",
  SelectPartCategory: "rezervni-delovi",
  SelectPartTractors: "traktorski-delovi",
  SelectMacineParts: "delovi-za-masine",
  Ostalo: "ostalo",
  ProductDetails: "ProductDetails",
  PartProductDetails: "PartProductDetails",
  SelectMachineBrand: "SelectMachineBrand",
  EditProduct: "EditProduct",
};

const Content: React.FC = () => {
  const { selectScreen } = useAdminContext();

  const renderComponent = () => {
    switch (selectScreen) {
      case Screens.Traktori:
        return <Traktori />;
      case Screens.PrikljucneMasine:
        return <PrikljucneMasine />;
      case Screens.RezervniDelovi:
        return <RezervniDelovi />;
      case Screens.AddNew:
        return <AddNew />;
      case Screens.SelectTractors:
        return <SelectTractors />;
      case Screens.SelectMachines:
        return <SelectMachines />;
      case Screens.SelectPartCategory:
        return <SelectPartCategory />;
      case Screens.ProductDetails:
        return <ProductDetails />;
      case Screens.SelectPartTractors:
        return <SelectTractorsParts />;
      case Screens.SelectMacineParts:
        return <SelectMacineParts />;
      case Screens.SelectMachineBrand:
        return <SelectMachineBrand />;
      case Screens.Ostalo:
        return <Ostalo />;
      case Screens.PartProductDetails:
        return <PartProductDetails />;
      case Screens.EditProduct:
        return <EditProduct />;
      default:
        return <div>No Content Available</div>;
    }
  };

  return (
    <div className="flex-1 h-screen overflow-y-auto bg-white">
      {renderComponent()}
    </div>
  );
};

export default Content;
