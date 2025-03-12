import React, { useState } from "react";
import Header from "../Header";
import Filter from "../Filter";
import ListContainer from "../ListContainer";
import { useAdminContext } from "@/context/adminContext";

const PrikljucneMasine: React.FC = () => {
  const { data } = useAdminContext();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = data
    .filter((product) => product.category === "prikljucne-masine")
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <Header title="Priključne mašine" subtitle="Lista svih mašina." />
      <div className="py-4 px-8">
        <Filter setSearchTerm={setSearchTerm} />
        <ListContainer items={filteredItems} />
      </div>
    </div>
  );
};

export default PrikljucneMasine;
