import React, { useState } from "react";
import Header from "../Header";
import Back from "../Back";
import { Product, useAdminContext } from "@/context/adminContext";
import { supabase } from "@/lib/supabase";
import {
  FeatureItem,
  FeatureItemWrapper,
  InputWrapper,
  RegularInput,
  Textarea,
} from "./ProductDetails";
import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import NextButton from "../NextButton";

const PartProductDetails: React.FC = () => {
  const {
    setSelectScreen,
    setFeedback,
    category,
    subcategory,
    resetState,
    selectBrand,
    setData
  } = useAdminContext();

  const [name, setName] = useState("");

  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [price, setPrice] = useState("");
  const [action, setAction] = useState("");

  const allow = name && d1 && d2 && imageFile && price !== null;

  console.log(category);
  console.log(subcategory);

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
        action: () => {
          // zatvoriti modal
          setFeedback(false);
        },
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

    // 2️⃣ Sada šaljemo podatke u bazu sa URL-om slike
    const product = {
      name,
      description_one: d1,
      description_two: d2,
      category,
      subcategory,
      regular_price: price,
      action_price: action,
      image: imageUrl,
      brand:selectBrand
    };

    const { data, error } = await supabase.from("products").insert([product]).select("*")
    .single();;

    if (error) {
      console.error("Greška pri dodavanju proizvoda:", error);
      setFeedback(true, {
        title: "Greška pri dodavanju proizvoda",
        subtitle: "Popunite obavezna polja i probajte ponovo.",
        action: () => {
          // zatvoriti modal
          setFeedback(false);
        },
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
      <Back click={() => setSelectScreen(subcategory)} />

      <div className="mx-8 my-4 flex justify-between">
        <LeftContainer
          name={name}
          price={price}
          action={action}
          d1={d1}
          d2={d2}
          setName={setName}
          setPrice={setPrice}
          setAction={setAction}
          setD1={setD1}
          setD2={setD2}
        />
        <RightContainer setImageFile={setImageFile} imageFile={imageFile} />
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

export default PartProductDetails;

interface LeftContainerProps {
  name: string;
  setName: (value: string) => void;

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
          height="60px"
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

      <InputWrapper title={"Cena proizvoda"} margin={false}>
        <FeatureItemWrapper>
          <FeatureItem
            label="Regularna cena *"
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
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
}

const RightContainer: React.FC<RightContainerProps> = ({
  setImageFile,
  imageFile,
}) => {
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
    </div>
  );
};
