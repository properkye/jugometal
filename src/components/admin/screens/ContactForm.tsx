"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [adress, setAdress] = useState("");

  return (
    <div className="my-20">
      <h3 className="text-[1.5rem] tracking-[-0.5px] mb-4 text-dark md:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.8rem] 2xl:text-[2rem]">
        Unesite vaše informacije
      </h3>
      <p className="text-[16px] text-light-dark tracking-[-0.03rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] lg:w-[700px]">
        Popunite formu informacijama kako biste poslali svoje podatke.
      </p>
      <div className="mt-10 md:grid md:grid-cols-2 md:justify-between md:gap-10">
        <FormInput value={name} placeholder={"Ime"} onChange={setName} />
        <FormInput
          value={surname}
          placeholder={"Prezime"}
          onChange={setSurname}
        />
        <FormInput
          value={email}
          placeholder={"E-mejl adresa"}
          onChange={setEmail}
        />
        <FormInput value={num} placeholder={"Telefon"} onChange={setNum} />
        <FormInput
          value={adress}
          placeholder={"Adresa i poštanski broj"}
          onChange={setAdress}
        />
      </div>

      <span className="text-red-500 block mb-4 text-[.8rem]">
        Sva polja moraju biti popunjena *
      </span>
      <button
        onClick={() => console.log("Odradi feedback i ovde")}
        className="border border-black py-2 px-20 transition duration-300 hover:bg-black hover:text-white rounded-md"
      >
        Posaljite
      </button>
    </div>
  );
};

export default ContactForm;

interface FormInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  onChange,
  value,
}) => {
  return (
    <input
      type="text"
      className="block w-full mb-12 border-0 border-b border-gray-300 py-2 text-[1.6rem] outline-none text-gray-800 tracking-[-0.5px] transition-all duration-400 ease-in-out"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};
