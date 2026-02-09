"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "../Header";
import { Product, useAdminContext } from "@/context/adminContext";

import { supabase } from "@/lib/supabase";
import NextButton from "../NextButton";
import { cleanFileName } from "./PartProductDetails";

export const slugify = (text: string) => {
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
    setData,
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

  const [images, setImages] = useState<File[]>([]);

  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const allow =
    name && f1 && f2 && f3 && f4 && f5 && f6 && d1 && d2 && images[0] !== null;

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

  const uploadImages = async (files: File[]) => {
    const uploadedUrls: string[] = [];

    for (const file of files) {
      const cleanedFileName = cleanFileName(file.name); // Očistimo naziv fajla
      const filePath = `products/${cleanedFileName}`; // Putanja u Storage-u

      const { error } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (error) {
        console.error("Greška pri uploadu slike:", error);
        continue; // Ako fail-uje, preskačemo tu sliku
      }

      // Dobijanje URL-a slike
      const { data } = supabase.storage.from("images").getPublicUrl(filePath);
      uploadedUrls.push(data.publicUrl);
    }

    return uploadedUrls; // Vraća niz URL-ova
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

    if (!images || images.length === 0) {
      console.error("❌ Nema izabranih slika.");
      return;
    }

    // 1️⃣ Upload svih slika i dobijanje URL-ova
    const imageUrls = await uploadImages(images);
    if (imageUrls.length === 0) {
      console.error("❌ Greška: Nijedna slika nije uspešno sačuvana.");
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

    // 3️⃣ Sastavljamo podatke proizvoda (moramo eksplicitno proslediti niz)
    const product = {
      name,
      description_one: d1,
      description_two: d2,
      category,
      subcategory,
      regular_price: price,
      action_price: action,
      images: imageUrls,
      pdf_file: pdfUrl || null,
      brand: selectBrand,
      features: [f1, f2, f3, f4, f5, f6],
      url: slugify(name),
    };

    // 4️⃣ Dodajemo proizvod u bazu
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
    <div className="h-screen flex flex-col bg-white">
      <Header
        title="Dodaj novi proizvod"
        subtitle="Kontrolna tabla / Dodaj proizvod"
        onBack={() => setSelectScreen(selectCategories)}
      />

      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
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
            setImages={setImages}
            images={images}
          />
        </div>

        <div className="mt-6">
          <NextButton
            btnText="Dodaj proizvod"
            span="Ukoliko ste uneli sve informacije, pritisnite dalje."
            selected={allow ? "yes" : ""}
            click={() => onSubmit()}
          />
        </div>
      </div>
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
    <div className="flex-1">
      <InputWrapper title="Generalne informacije" margin={false}>
        <RegularInput
          placeholder="Unesite ime proizvoda"
          label="Ime proizvoda"
          value={name}
          onChange={setName}
        />

        <Textarea
          height="80px"
          onChange={setD1}
          value={d1}
          placeholder="Kratki opis proizvoda"
          label="Kratak opis"
        />
        <Textarea
          height="100px"
          onChange={setD2}
          value={d2}
          placeholder="Detaljan opis proizvoda"
          label="Detaljan opis"
        />
      </InputWrapper>

      <InputWrapper title="Karakteristike proizvoda" margin={true}>
        <FeatureItemWrapper>
          <FeatureItem
            label="Karakteristika #1"
            placeholder="Npr. Motor: 75 KS"
            value={f1}
            onChange={setF1}
          />
          <FeatureItem
            label="Karakteristika #2"
            placeholder="Npr. Težina: 2700kg"
            value={f2}
            onChange={setF2}
          />
        </FeatureItemWrapper>

        <FeatureItemWrapper>
          <FeatureItem
            label="Karakteristika #3"
            placeholder="Npr. Gorivo: Dizel"
            value={f3}
            onChange={setF3}
          />
          <FeatureItem
            label="Karakteristika #4"
            placeholder="Npr. Transmisija: 12+12"
            value={f4}
            onChange={setF4}
          />
        </FeatureItemWrapper>

        <FeatureItemWrapper>
          <FeatureItem
            label="Karakteristika #5"
            placeholder="Npr. Hidraulika: 2500kg"
            value={f5}
            onChange={setF5}
          />
          <FeatureItem
            label="Karakteristika #6"
            placeholder="Npr. PTO: 540/1000"
            value={f6}
            onChange={setF6}
          />
        </FeatureItemWrapper>
      </InputWrapper>

      <div className="mt-8">
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
    </div>
  );
};

interface RightContainerProps {
  pdfFile: File | null;
  setPdfFile: (file: File | null) => void;
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const RightContainer: React.FC<RightContainerProps> = ({
  pdfFile,
  setPdfFile,
  setImages,
  images,
}) => {
  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full lg:w-[400px]">
      <ImageGallery images={images} setImages={setImages} />
      <div className="rounded-lg p-5 bg-white border border-gray-200 mt-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">PDF dokument (opciono)</h3>
        <input
          type="file"
          accept="application/pdf"
          onChange={handlePdfChange}
          id="pdfFileInputAdd"
          className="hidden"
        />
        <label
          htmlFor="pdfFileInputAdd"
          className="inline-block w-full py-2 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all cursor-pointer text-center"
        >
          Izaberite fajl
        </label>
        {pdfFile && (
          <p className="mt-3 text-sm text-gray-600">📄 {pdfFile.name}</p>
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
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all placeholder:text-gray-400"
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
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">{children}</div>;
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
      className="bg-white border border-gray-200 rounded-lg p-5"
      style={{ marginTop: margin ? "2rem" : "0" }}
    >
      <h3 className="text-base font-semibold text-gray-900 mb-4">{title}</h3>
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
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <textarea
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all placeholder:text-gray-400 resize-none"
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
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all placeholder:text-gray-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

interface ImageGalleryProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  setImages,
}) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]); // Čuva URL-ove za prikaz

  // Ažuriramo preview URL-ove kada se slike promene
  useEffect(() => {
    const urls = images.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url)); // Oslobađamo memoriju
    };
  }, [images]);

  // Funkcija za dodavanje slike
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && images.length < 4) {
      const file = e.target.files[0];
      setImages((prev) => [...prev, file]);
    }
  };

  // Funkcija za brisanje slike
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Slike proizvoda</h3>

      {/* Skriveni input za upload */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="fileInputMain"
        onChange={handleImageUpload}
      />

      {/* Glavna slika (ili `+` ako nema) */}
      <div
        className={`aspect-[4/3] w-full rounded-lg relative overflow-hidden flex items-center justify-center cursor-pointer border-2 border-dashed
          ${images.length > 0 ? "bg-cover bg-center border-gray-300" : "bg-gray-50 border-gray-300 hover:border-gray-400"}
        `}
        style={
          images.length > 0 && previewUrls[0]
            ? { backgroundImage: `url(${previewUrls[0]})` }
            : {}
        }
        onClick={() =>
          images.length === 0 &&
          document.getElementById("fileInputMain")?.click()
        } // Ručno otvaramo file picker
      >
        {images.length === 0 && <span className="text-4xl text-gray-400">+</span>}

        {/* Overlay za brisanje ako slika postoji */}
        {images.length > 0 && (
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.stopPropagation(); // 🚀 Sprečava otvaranje file pickera posle brisanja
              removeImage(0);
            }}
          >
            <span className="text-white font-bold">Obriši</span>
          </div>
        )}
      </div>

      {/* Grid layout */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {/* Skriveni input za upload (za grid) */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="fileInputGrid"
          onChange={handleImageUpload}
        />

        {/* Prikaz slika u gridu */}
        {images.slice(1).map((_, i) => (
          <div
            key={i}
            className="relative border-2 border-gray-300 aspect-square rounded-lg flex items-center justify-center bg-cover bg-center cursor-pointer group"
            style={
              previewUrls[i + 1]
                ? { backgroundImage: `url(${previewUrls[i + 1]})` }
                : {}
            }
          >
            {/* Overlay sa "Obriši" tekstom */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation(); // 🚀 Sprečava otvaranje file pickera posle brisanja
                removeImage(i + 1);
              }}
            >
              <span className="text-white font-bold">Obriši</span>
            </div>
          </div>
        ))}

        {/* Dugme za dodavanje nove slike (prikazuje se samo ako ima manje od 4 slike) */}
        {images.length < 4 && (
          <label htmlFor="fileInputGrid">
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 hover:border-gray-400 aspect-square rounded-lg flex items-center justify-center cursor-pointer transition-colors">
              <span className="text-2xl text-gray-400">+</span>
            </div>
          </label>
        )}
      </div>
    </div>
  );
};
