"use client";
import { Product, useAdminContext } from "@/context/adminContext";
import React from "react";

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
    <>
      {/* Desktop View - Grid */}
      <div
        className="hidden lg:grid bg-white grid-cols-[2fr_1fr_1.2fr_1fr_120px_120px] items-center py-6 px-6 text-sm text-gray-700 cursor-pointer transition-all duration-200 hover:bg-gray-50"
        onClick={() => {
          setSelectScreen("EditProduct");
          setFrom(`${category}-list`);
          setProduct(item)
        }}
      >
        <span className="font-medium text-gray-900 pr-4 overflow-hidden text-ellipsis whitespace-nowrap" title={name}>{name}</span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap" title={capitalizeFirstLetter(category)}>{capitalizeFirstLetter(category)}</span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap" title={capitalizeFirstLetter(subcategory)}>{capitalizeFirstLetter(subcategory)}</span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap" title={capitalizeFirstLetter(brand)}>{capitalizeFirstLetter(brand)}</span>
        <span className="font-medium text-left">{price !== "" ? price : "---"}</span>
        <span className="font-medium text-left">{rabat !== "" ? rabat : "---"}</span>
      </div>

      {/* Mobile/Tablet View - Card */}
      <div
        className="lg:hidden bg-white border-b border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-all duration-200"
        onClick={() => {
          setSelectScreen("EditProduct");
          setFrom(`${category}-list`);
          setProduct(item)
        }}
      >
        <h3 className="font-medium text-gray-900 mb-3 text-sm">{name}</h3>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
          <div>
            <span className="font-semibold">Kategorija:</span> {capitalizeFirstLetter(category)}
          </div>
          <div>
            <span className="font-semibold">Potkategorija:</span> {capitalizeFirstLetter(subcategory)}
          </div>
          <div>
            <span className="font-semibold">Brend:</span> {capitalizeFirstLetter(brand)}
          </div>
          <div>
            <span className="font-semibold">Cena:</span> {price !== "" ? price : "---"}
          </div>
          {rabat && rabat !== "" && (
            <div>
              <span className="font-semibold">Akcijska cena:</span> {rabat}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ListItem;
