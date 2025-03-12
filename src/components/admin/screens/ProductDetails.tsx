"use client";
import React, { ReactNode, useState } from "react";
import Header from "../Header";
import Back from "../Back";
import { Product, useAdminContext } from "@/context/adminContext";

import { CiCirclePlus } from "react-icons/ci";
import Image from "next/image";

import { MdDelete } from "react-icons/md";
import { supabase } from "@/lib/supabase";
import NextButton from "../NextButton";

export const slugify = (text:string) => {
  return text
    .toLowerCase()
    .replace(/č/g, "c")
    .replace(/ć/g, "c")
    .replace(/š/g, "s")
    .replace(/đ/g, "dj")
    .replace(/ž/g, "z")
    .replace(/[^\w\s-]/g, "") // Uklanja specijalne karaktere osim slova, brojeva i crtica
    .replace(/\s+/g, "-") // Zamenjuje razmake crticama
    .replace(/-+/g, "-") // Uklanja višestruke crtice
    .trim(); // Uklanja nepotrebne praznine sa krajeva
};

const ProductDetails: React.FC = () => {
  const {
    setSelectScreen,
    selectCategories,
    category,
    subcategory,
    setFeedback,
    selectBrand,
    resetState,
    setData
  } = useAdminContext();

  // PRAVI STATE
  const [name, setName] = useState("");

  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const [f5, setF5] = useState("");
  const [f6, setF6] = useState("");

  const [price, setPrice] = useState("");
  const [action, setAction] = useState("");

  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const allow =
    name && f1 && f2 && f3 && f4 && f5 && f6 && d1 && d2 && imageFile !== null;

  const uploadPdf = async (file: File) => {
    const filePath = `products/${file.name}`; // Putanja u Storage-u za PDF fajlove

    const { error } = await supabase.storage
      .from("pdfs")
      .upload(filePath, file);

    if (error) {
      console.error("Greška pri uploadu PDF-a:", error);
      return null;
    }

    // Dobijanje URL-a PDF-a
    const { data } = supabase.storage.from("pdfs").getPublicUrl(filePath);
    return data.publicUrl; // Vraća tačan URL PDF-a
  };

  const uploadImage = async (file: File) => {
    const filePath = `products/${file.name}`; // Putanja u Storage-u

    const { error } = await supabase.storage
      .from("images")
      .upload(filePath, file);

    if (error) {
      console.error("Greška pri uploadu slike:", error);
      return null;
    }

    // Dobijanje URL-a slike
    const { data } = supabase.storage.from("images").getPublicUrl(filePath);
    return data.publicUrl; // Vraća tačan URL slike
  };

  const onSubmit = async () => {
    if (!allow) {
      setFeedback(true, {
        title: "Obavezna polja moraju biti popunjena!",
        subtitle: "Popunite obavezna polja i probajte ponovo.",
        action: () => setFeedback(false),
      });
      return;
    }
  
    // 1️⃣ Prvo uploadujemo sliku u Storage
    if (!imageFile) {
      console.error("No image selected");
      return;
    }
  
    const imageUrl = await uploadImage(imageFile);
    if (!imageUrl) {
      console.error("Greška: Slika nije uspešno sačuvana.");
      return;
    }
  
    // 2️⃣ Proveravamo da li postoji PDF fajl u contextu
    let pdfUrl = null;
    if (pdfFile) {
      pdfUrl = await uploadPdf(pdfFile);
      if (!pdfUrl) {
        console.error("Greška: PDF nije uspešno sačuvan.");
        return;
      }
    }
  
    // 3️⃣ Sastavljamo podatke proizvoda
    const product = {
      name,
      description_one: d1,
      description_two: d2,
      category,
      subcategory,
      regular_price: price,
      action_price: action,
      image: imageUrl,
      pdf_file: pdfUrl || null,
      brand: selectBrand,
      features: [f1, f2, f3, f4, f5, f6],
      url: slugify(name)
    };
  
    // 4️⃣ Dodajemo proizvod u bazu i odmah ga dohvatamo
    const { data, error } = await supabase
      .from("products")
      .insert([product])
      .select("*")
      .single();
  
    if (error) {
      console.error("❌ Greška pri dodavanju proizvoda:", error);
      setFeedback(true, {
        title: "Greška pri dodavanju proizvoda",
        subtitle: "Popunite obavezna polja i probajte ponovo.",
        action: () => setFeedback(false),
      });
    } else if (data) {
      console.log("✅ Uspešno dodat proizvod:", data);
  
      // 5️⃣ Dodajemo novi proizvod u lokalni state da se odmah prikaže
      setData((prev: Product[]) => [...prev, data]);
  
      setFeedback(true, {
        title: "Uspešno dodat proizvod",
        subtitle: "Proizvod je uspešno postavljen na bazu podataka.",
        action: () => {
          setFeedback(false);
          setSelectScreen("AddNew");
          resetState();
        },
      });
    }
  };
  

  return (
    <div className="pb-10">
      <Header
        title="Popunite detalje i dodajte proizvod"
        subtitle="Unesite potrebne informacije za proizvod."
      />
      <Back click={() => setSelectScreen(selectCategories)} />

      <div className="mx-8 my-4 flex justify-between">
        <LeftContainer
          f1={f1}
          f2={f2}
          f3={f3}
          f4={f4}
          f5={f5}
          f6={f6}
          name={name}
          price={price}
          action={action}
          d1={d1}
          d2={d2}
          setF1={setF1}
          setF2={setF2}
          setF3={setF3}
          setF4={setF4}
          setF5={setF5}
          setF6={setF6}
          setName={setName}
          setPrice={setPrice}
          setAction={setAction}
          setD1={setD1}
          setD2={setD2}
        />
        <RightContainer
          pdfFile={pdfFile}
          setPdfFile={setPdfFile}
          setImageFile={setImageFile}
          imageFile={imageFile}
        />
      </div>

      <NextButton
        btnText="Dalje"
        span="Ukoliko ste uneli sve informacije, pritisnite dalje."
        selected={allow ? "yes" : ""}
        click={() => onSubmit()}
      />
    </div>
  );
};

export default ProductDetails;

interface LeftContainerProps {
  name: string;
  setName: (value: string) => void;

  f1: string;
  setF1: (value: string) => void;
  f2: string;
  setF2: (value: string) => void;
  f3: string;
  setF3: (value: string) => void;
  f4: string;
  setF4: (value: string) => void;
  f5: string;
  setF5: (value: string) => void;
  f6: string;
  setF6: (value: string) => void;

  price: string;
  setPrice: (value: string) => void;
  action: string;
  setAction: (value: string) => void;

  d1: string;
  setD1: (value: string) => void;
  d2: string;
  setD2: (value: string) => void;
}
const LeftContainer: React.FC<LeftContainerProps> = ({
  name,
  setName,
  f1,
  setF1,
  f2,
  setF2,
  f3,
  setF3,
  f4,
  setF4,
  f5,
  setF5,
  f6,
  setF6,
  price,
  setPrice,
  action,
  setAction,
  d1,
  setD1,
  d2,
  setD2,
}) => {
  return (
    <div className="w-[60%]">
      <InputWrapper title="Generalne informacije" margin={false}>
        <RegularInput
          placeholder="Ime proizvoda"
          label="Ime proizvoda *"
          value={name}
          onChange={setName}
        />

        {/* textarea */}
        <Textarea
          height="100px"
          onChange={setD1}
          value={d1}
          placeholder="Manji opis do 10 reči"
          label="Manji opis proizvoda ( do 10 reči ) *"
        />
        <Textarea
          height="100px"
          onChange={setD2}
          value={d2}
          placeholder="Veći opis do 20 reči"
          label="Veći opis proizvoda ( do 20 reči ) *"
        />
      </InputWrapper>

      <InputWrapper title={"Karakteristike proizvoda."} margin={true}>
        <FeatureItemWrapper>
          <FeatureItem
            label="Karakteristika #1 *"
            placeholder="Karakteristika #1"
            value={f1}
            onChange={setF1}
          />
          <FeatureItem
            label="Karakteristika #2 *"
            placeholder="Karakteristika #2"
            value={f2}
            onChange={setF2}
          />
        </FeatureItemWrapper>

        <FeatureItemWrapper>
          <FeatureItem
            label="Karakteristika #3 *"
            placeholder="Karakteristika #3"
            value={f3}
            onChange={setF3}
          />
          <FeatureItem
            label="Karakteristika #4 *"
            placeholder="Karakteristika #4"
            value={f4}
            onChange={setF4}
          />
        </FeatureItemWrapper>

        <FeatureItemWrapper>
          <FeatureItem
            label="Karakteristika #5 *"
            placeholder="Karakteristika #5"
            value={f5}
            onChange={setF5}
          />
          <FeatureItem
            label="Karakteristika #6 *"
            placeholder="Karakteristika #6"
            value={f6}
            onChange={setF6}
          />
        </FeatureItemWrapper>
      </InputWrapper>

      <InputWrapper title={"Cena proizvoda"} margin={false}>
        <FeatureItemWrapper>
          <FeatureItem
            label="Regularna cena"
            placeholder="Regularna cena"
            value={price}
            onChange={setPrice}
          />
          <FeatureItem
            label="Akcijska cena"
            placeholder="Akcijska cena"
            value={action}
            onChange={setAction}
          />
        </FeatureItemWrapper>
      </InputWrapper>
    </div>
  );
};

interface RightContainerProps {
  pdfFile: File | null;
  setPdfFile: (file: File | null) => void;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
}

const RightContainer: React.FC<RightContainerProps> = ({
  pdfFile,
  setPdfFile,
  setImageFile,
  imageFile,
}) => {
  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleDeleteImage = () => {
    setImageFile(null);
  };

  return (
    <div className="w-[39%]">
      <div className="rounded-lg p-4 bg-[#fcfcfc] h-[600px] mb-10">
        <h2 className="text-[1.5rem]">Postavite sliku *</h2>

        {/* Input koji će otvarati file picker */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="fileInput"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setImageFile(e.target.files[0]);
            }
          }}
        />

        {/* Ako slika ne postoji, prikazujemo label da može da se klikne */}
        {!imageFile ? (
          <label
            htmlFor="fileInput"
            className="h-[80%] w-[100%] mt-4 rounded-lg grid place-content-center bg-[#efefef] cursor-pointer overflow-hidden"
          >
            <CiCirclePlus size={100} color="green" />
          </label>
        ) : (
          <div className="h-[80%] w-[100%] mt-4 rounded-lg relative overflow-hidden z-10">
            <Image
              src={URL.createObjectURL(imageFile)}
              alt="Uploaded"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg z-10"
            />
          </div>
        )}

        {/* Dugme za brisanje slike */}
        {imageFile ? (
          <div
            className="mt-6 flex gap-2 items-center cursor-pointer"
            onClick={handleDeleteImage}
          >
            <MdDelete size={26} color="red" />
            <p>Obrišite sliku</p>
          </div>
        ) : (
          <div className="mt-6 flex gap-2 items-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="fileInput"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImageFile(e.target.files[0]);
                }
              }}
            />
            <label
              htmlFor="fileInput"
              className="rounded-lg flex cursor-pointer overflow-hidden gap-2 items-center"
            >
              <CiCirclePlus size={26} color="green" />
              <p>Dodajte sliku</p>
            </label>
          </div>
        )}
      </div>

      <div className="rounded-lg p-4 bg-[#fcfcfc] h-fit">
        <h2 className="text-[1.5rem]">Ubacite PDF fajl</h2>
        <input
          type="file"
          accept="application/pdf"
          onChange={handlePdfChange}
          className="mt-2 p-2 border rounded-lg w-full"
        />
        {pdfFile && (
          <p className="mt-2 text-sm">Odabrani fajl: {pdfFile.name}</p>
        )}
      </div>
    </div>
  );
};

interface FeatureItemProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div>
      <label className="block text-[1.2rem] mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={`w-full p-4 rounded-[10px] border-2 transition-all duration-400 ease-in-out outline-none text-[#1b243b] text-[1rem] ${
          value
            ? "bg-white border-[#1b243b]"
            : "bg-[rgba(217,217,217,0.25)] border-transparent"
        } placeholder:text-[#cecece]`}
        onChange={handleChange}
      />
    </div>
  );
};

interface FeatureItemWrapperProps {
  children: ReactNode;
}

export const FeatureItemWrapper: React.FC<FeatureItemWrapperProps> = ({
  children,
}) => {
  return <div className="my-4 grid grid-cols-2 gap-10">{children}</div>;
};

interface InputWrapperProps {
  children: ReactNode;
  margin?: boolean;
  title: string;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  margin,
  title,
}) => {
  return (
    <div
      className="bg-[#fcfcfc] rounded-lg p-4"
      style={{ margin: margin ? "2rem 0" : "" }}
    >
      <h2 className="text-[1.5rem]">{title}</h2>
      {children}
    </div>
  );
};

interface TextareaProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  height: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  height,
}) => {
  const [hasContent, setHasContent] = useState(value.length > 0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setHasContent(newValue.length > 0);
    onChange(newValue);
  };

  return (
    <div className="my-4">
      <label className="block text-[1.2rem] mb-2">{label}</label>
      <textarea
        placeholder={placeholder}
        className={`w-full p-4 rounded-[10px] border-2 transition-all duration-400 ease-in-out outline-none text-[#1b243b] text-[1rem] ${
          hasContent
            ? "bg-white border-[#1b243b]"
            : "bg-[rgba(217,217,217,0.25)] border-transparent"
        } placeholder:text-[#cecece] w-[100%] resize-none`}
        style={{
          height: height,
        }}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

interface RegularInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const RegularInput: React.FC<RegularInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="my-4">
      <label className="block text-[1.2rem] mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full p-4 rounded-[10px] border-2 transition-all duration-400 ease-in-out outline-none text-[#1b243b] text-[1rem] ${
          value
            ? "bg-white border-[#1b243b]"
            : "bg-[rgba(217,217,217,0.25)] border-transparent"
        } placeholder:text-[#cecece]`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
