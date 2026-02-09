import React, { useState } from "react";
import Header from "../Header";
import Back from "../Back";
import { Product, useAdminContext } from "@/context/adminContext";
import { supabase } from "@/lib/supabase";
import {
  FeatureItem,
  FeatureItemWrapper,
  ImageGallery,
  InputWrapper,
  RegularInput,
  slugify,
  Textarea,
} from "./ProductDetails";
import NextButton from "../NextButton";

export const cleanFileName = (fileName: string) => {
  return fileName.replace(/\s+/g, "-"); // Zamena svih razmaka sa "-"
};

const PartProductDetails: React.FC = () => {
  const {
    setSelectScreen,
    setFeedback,
    category,
    subcategory,
    resetState,
    selectBrand,
    setData,
  } = useAdminContext();

  const [name, setName] = useState("");

  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");

  const [images, setImages] = useState<File[]>([]);

  const [price, setPrice] = useState("");
  const [action, setAction] = useState("");

  const allow = name && d1 && d2 && images[0] && price !== null;

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
        action: () => {
          // zatvoriti modal
          setFeedback(false);
        },
      });
      return;
    }

    // 1️⃣ Prvo uploadujemo sliku u Storage

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

    // 2️⃣ Sada šaljemo podatke u bazu sa URL-om slike
    const product = {
      name,
      description_one: d1,
      description_two: d2,
      category,
      subcategory,
      regular_price: price,
      action_price: action,
      images: imageUrls,
      brand: selectBrand,
      url: slugify(name),
    };

    const { data, error } = await supabase
      .from("products")
      .insert([product])
      .select("*")
      .single();

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
    <div className="h-screen flex flex-col bg-white">
      <Header
        title="Popunite detalje i dodajte proizvod"
        subtitle="Unesite potrebne informacije za proizvod."
        onBack={() => setSelectScreen(subcategory)}
      />

      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
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
        <RightContainer setImages={setImages} images={images} />
        </div>

        <div className="mt-6">
          <NextButton
            btnText="Dalje"
            span="Ukoliko ste uneli sve informacije, pritisnite dalje."
            selected={allow ? "yes" : ""}
            click={() => onSubmit()}
          />
        </div>
      </div>
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
    <div className="w-full lg:w-[60%]">
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

      <InputWrapper title={"Cena proizvoda"} margin={true}>
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
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const RightContainer: React.FC<RightContainerProps> = ({
  images,
  setImages,
}) => {
  return (
    <div className="w-full lg:w-[39%]">
      <ImageGallery images={images} setImages={setImages} />
    </div>
  );
};
