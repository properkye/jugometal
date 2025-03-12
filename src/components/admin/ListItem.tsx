"use client";
import { Product, useAdminContext } from "@/context/adminContext";
import React from "react";
import { HiDotsVertical } from "react-icons/hi";

interface ListItemProps {
  name: string;
  category: string;
  subcategory: string;
  brand: string;
  price: string | undefined;
  rabat: string | undefined;
  id: number;
  item:Product
}

const capitalizeFirstLetter = (str: string): string => {
  if (!str) return str; // Ako je string prazan, vraća originalan string
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const ListItem: React.FC<ListItemProps> = ({
  name,
  brand,
  rabat,
  category,
  subcategory,
  price,
  item
}) => {
  const { setSelectScreen, setFrom, setProduct } = useAdminContext();

  return (
    <div
      className="border grid grid-cols-[repeat(6,_1fr)_20px] items-center justify-between py-6 px-4 text-[1rem] font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-200"
      onClick={() => {
        setSelectScreen("EditProduct");
        setFrom(`${category}-list`);
        setProduct(item)
      }}
    >
      <span>{name}</span>
      <span>{capitalizeFirstLetter(category)}</span>
      <span>{capitalizeFirstLetter(subcategory)}</span>
      <span>{capitalizeFirstLetter(brand)}</span>
      <span>{price !== "" ? price : "---"}</span>
      <span>{rabat !== "" ? rabat : "---"}</span>
      <HiDotsVertical />
    </div>
  );
};

export default ListItem;
