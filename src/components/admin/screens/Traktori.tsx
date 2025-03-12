"use client";
import React, { useState } from "react";
import Header from "../Header";

import ListContainer from "../ListContainer";
import Filter from "../Filter";
import { useAdminContext } from "@/context/adminContext";

const Traktori: React.FC = () => {
  const { data } = useAdminContext();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = data
    .filter((product) => product.category === "traktori")
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <Header title="Traktori" subtitle="Lista svih traktora." />
      <div className="py-4 px-8">
        <Filter setSearchTerm={setSearchTerm} />
        <ListContainer items={filteredItems} />
      </div>
    </div>
  );
};

export default Traktori;
