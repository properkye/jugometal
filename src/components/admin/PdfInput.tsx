"use client";
import { useAdminContext } from "@/context/adminContext";
import React from "react";

interface PdfInputProps {
    label: string;
}

const PdfInput: React.FC<PdfInputProps> = ({ label }) => {
  const { setPdfFile } = useAdminContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPdfFile(file);
    }
  };

  return (
    <div className="w-fit flex flex-col p-2">
      <label className="mb-2 font-bold text-[1.2rem]">{label}</label>
      <input
        type="file"
        onChange={handleFileChange}
        accept="application/pdf"
        className="mb-2"
        placeholder="Izaberite PDF"
      />
    </div>
  );
};

export default PdfInput;
