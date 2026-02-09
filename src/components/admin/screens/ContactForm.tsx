"use client";

import React, { useState } from "react";
// import { sendEmail } from "@/config/sendMail"; // pretpostavljam da već imaš ovo

const ContactForm: React.FC = () => {
  const [information, setInformation] = useState({
    name: { value: "", isValid: true },
    surname: { value: "", isValid: true },
    email: { value: "", isValid: true },
    phone: { value: "", isValid: true },
    adresa: { value: "", isValid: true },
  });

  const inputHandler = (
    identifier: keyof typeof information,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = event.target.value;

    setInformation((prev) => ({
      ...prev,
      [identifier]: { value: val, isValid: true },
    }));
  };

  const resetInformation = () => {
    setInformation({
      name: { value: "", isValid: true },
      surname: { value: "", isValid: true },
      email: { value: "", isValid: true },
      phone: { value: "", isValid: true },
      adresa: { value: "", isValid: true },
    });
  };

  const handleSubmit = async () => {
    const nameIsValid = information.name.value.trim().length > 0;
    const surnameIsValid = information.surname.value.trim().length > 0;
    const emailIsValid =
      information.email.value.trim().length > 0 &&
      information.email.value.includes("@");
    const phoneIsValid = information.phone.value.trim().length > 0;
    const adresaIsValid = information.adresa.value.trim().length > 0;

    if (
      !nameIsValid ||
      !surnameIsValid ||
      !emailIsValid ||
      !phoneIsValid ||
      !adresaIsValid
    ) {
      setInformation((prev) => ({
        name: { value: prev.name.value, isValid: nameIsValid },
        surname: { value: prev.surname.value, isValid: surnameIsValid },
        email: { value: prev.email.value, isValid: emailIsValid },
        phone: { value: prev.phone.value, isValid: phoneIsValid },
        adresa: { value: prev.adresa.value, isValid: adresaIsValid },
      }));
      return;
    }

    // const formData = {
    //   name: information.name.value,
    //   surname: information.surname.value,
    //   email: information.email.value,
    //   phone: information.phone.value,
    //   adresa: information.adresa.value,
    //   message: "Poruka sa kontakt forme",
    // };

    try {
      // await sendEmail(formData);
      alert("Poruka uspešno poslata!");
      resetInformation();
    } catch (error) {
      console.error("Greška pri slanju mejla:", error);
    }
  };

  return (
    <div className="my-20">
      <h3 className="text-[1.5rem] tracking-[-0.5px] mb-4 text-dark md:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.8rem] 2xl:text-[2rem]">
        Unesite vaše informacije
      </h3>
      <p className="text-[16px] text-light-dark tracking-[-0.03rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] lg:w-[700px]">
        Popunite formu informacijama kako biste poslali svoje podatke.
      </p>
      <div className="mt-10 md:grid md:grid-cols-2 md:justify-between md:gap-10">
        <FormInput
          placeholder="Ime"
          value={information.name.value}
          onChange={(e) => inputHandler("name", e)}
          isValid={information.name.isValid}
        />
        <FormInput
          placeholder="Prezime"
          value={information.surname.value}
          onChange={(e) => inputHandler("surname", e)}
          isValid={information.surname.isValid}
        />
        <FormInput
          placeholder="E-mejl adresa"
          value={information.email.value}
          onChange={(e) => inputHandler("email", e)}
          isValid={information.email.isValid}
          type="email"
        />
        <FormInput
          placeholder="Telefon"
          value={information.phone.value}
          onChange={(e) => inputHandler("phone", e)}
          isValid={information.phone.isValid}
        />
        <FormInput
          placeholder="Adresa i poštanski broj"
          value={information.adresa.value}
          onChange={(e) => inputHandler("adresa", e)}
          isValid={information.adresa.isValid}
        />
      </div>

      <span className="text-red-500 block mb-4 text-[.8rem]">
        Sva polja moraju biti popunjena *
      </span>
      <button
        onClick={handleSubmit}
        className="border border-black py-2 px-20 transition duration-300 hover:bg-black hover:text-white rounded-md"
      >
        Pošaljite
      </button>
    </div>
  );
};

export default ContactForm;

interface FormInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  onChange,
  isValid,
  type = "text",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`block w-full mb-12 border-0 border-b py-2 text-[1.6rem] outline-none tracking-[-0.5px] transition-all duration-400 ease-in-out
        ${isValid ? "border-gray-300 text-gray-800" : "border-red-500 text-red-500"}`}
    />
  );
};
