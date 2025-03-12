"use client";
import { useAdminContext } from "@/context/adminContext";
import React from "react";

interface ImageInputProps {
    label:string
}

const ImageInput: React.FC<ImageInputProps> = ({label}) => {
  const { setImage } = useAdminContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="w-fit flex flex-col p-2">
      <label className="mb-2 font-bold text-[1.2rem]">{label}</label>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        className="mb-2"
        placeholder="Izaberite sliku"
      />
    </div>
  );
};

export default ImageInput;
