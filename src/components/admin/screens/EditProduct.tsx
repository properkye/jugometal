import React, { useState } from "react";
import Header from "../Header";
import Back from "../Back";
import { Product, useAdminContext } from "@/context/adminContext";
import {
  FeatureItem,
  FeatureItemWrapper,
  InputWrapper,
  RegularInput,
  Textarea,
} from "./ProductDetails";
import Image from "next/image";
import DeleteButton from "../DeleteButton";
import { supabase } from "@/lib/supabase";

const EditProduct: React.FC = () => {
  const { setSelectScreen, from, product, setFeedback, setData } =
    useAdminContext();

  const [changeName, setChangeName] = useState(product?.name ?? "");
  const [changeD1, setChangeD1] = useState(product?.description_one ?? "");
  const [changeD2, setChangeD2] = useState(product?.description_two ?? "");
  const [changePrice, setChangePrice] = useState(product?.regular_price ?? "");
  const [changeAction, setChangeAction] = useState(product?.action_price ?? "");

  // Features
  const [changeF1, setChangeF1] = useState(product?.features?.[0] ?? "");
  const [changeF2, setChangeF2] = useState(product?.features?.[1] ?? "");
  const [changeF3, setChangeF3] = useState(product?.features?.[2] ?? "");
  const [changeF4, setChangeF4] = useState(product?.features?.[3] ?? "");
  const [changeF5, setChangeF5] = useState(product?.features?.[4] ?? "");
  const [changeF6, setChangeF6] = useState(product?.features?.[5] ?? "");

  const [newPdfFile, setNewPdfFile] = useState<File | null>(null);

  const isChanged =
    changeName !== product?.name ||
    changeD1 !== product?.description_one ||
    changeD2 !== product?.description_two ||
    changePrice !== product?.regular_price ||
    changeAction !== product?.action_price ||
    changeF1 !== (product?.features?.[0] ?? "") ||
    changeF2 !== (product?.features?.[1] ?? "") ||
    changeF3 !== (product?.features?.[2] ?? "") ||
    changeF4 !== (product?.features?.[3] ?? "") ||
    changeF5 !== (product?.features?.[4] ?? "") ||
    changeF6 !== (product?.features?.[5] ?? "") ||
    newPdfFile !== null;

  const deleteProduct = async () => {
    if (!product?.id || !product?.images || product.images.length === 0) {
      console.error("Greška: Nedostaje ID proizvoda ili slike.");
      return;
    }

    try {
      const storagePrefix =
        "https://fyxbkkxntodbrhkzutxk.supabase.co/storage/v1/object/public/";

      // 1️⃣ Brisanje svih slika iz Storage-a
      const imagePaths = product.images
        .map((imageUrl) => {
          if (!imageUrl.startsWith(storagePrefix)) {
            console.error("Greška: URL slike nije validan.", imageUrl);
            return null;
          }
          return imageUrl.replace(storagePrefix, ""); // Uklanja nepotreban deo URL-a
        })
        .filter((path): path is string => !!path); // 🚀 Osiguravamo da `path` nije `null`

      if (imagePaths.length > 0) {
        const firstImagePath = imagePaths[0]; // Uzmi prvi validan path za bucket name
        if (!firstImagePath) {
          console.error("❌ Greška: Ne može se dobiti naziv bucket-a.");
          return;
        }

        const bucketName = firstImagePath.split("/")[0]; // Uzimamo bucket name (isti za sve slike)
        const filePaths = imagePaths.map((path) =>
          path.substring(bucketName.length + 1)
        ); // Uklanjamo bucket iz putanje

        const { error: storageError } = await supabase.storage
          .from(bucketName)
          .remove(filePaths);

        if (storageError) {
          console.error("❌ Greška pri brisanju slika:", storageError.message);
        } else {
          console.log("✅ Sve slike su uspešno obrisane iz Storage-a!");
        }
      }

      // 2️⃣ Brisanje proizvoda iz baze
      const { error: dbError } = await supabase
        .from("products")
        .delete()
        .match({ id: product.id });

      if (dbError) {
        console.error("❌ Greška pri brisanju proizvoda:", dbError.message);
      } else {
        console.log("✅ Proizvod uspešno obrisan!");

        // 3️⃣ Brišemo proizvod iz lokalnog state-a
        setData((prev: Product[]) => prev.filter((p) => p.id !== product.id));

        setFeedback(true, {
          title: "Proizvod uspešno obrisan.",
          subtitle: "Uspešno ste izbrisali proizvod iz baze i storage-a.",
          action: () => {
            setFeedback(false);
            setSelectScreen("traktori-list");
          },
        });
      }
    } catch (error) {
      console.error("❌ Neočekivana greška:", error);
    }
  };

  const uploadPdf = async (file: File) => {
    const filePath = `products/${file.name}`;

    const { error } = await supabase.storage
      .from("pdfs")
      .upload(filePath, file);

    if (error) {
      console.error("Greška pri uploadu PDF-a:", error);
      return null;
    }

    const { data } = supabase.storage.from("pdfs").getPublicUrl(filePath);
    return data.publicUrl;
  };

  const editProduct = async () => {
    if (!isChanged) return;

    let pdfUrl = product?.pdf_file;
    if (newPdfFile) {
      const uploadedPdfUrl = await uploadPdf(newPdfFile);
      if (uploadedPdfUrl) {
        pdfUrl = uploadedPdfUrl;
      } else {
        console.error("Greška pri uploadu PDF-a");
        return;
      }
    }

    const updatedProduct = {
      name: changeName,
      description_one: changeD1,
      description_two: changeD2,
      regular_price: changePrice,
      action_price: changeAction,
      features: [changeF1, changeF2, changeF3, changeF4, changeF5, changeF6],
      pdf_file: pdfUrl,
    };

    const { data, error } = await supabase
      .from("products")
      .update(updatedProduct) // Ažurira samo ono što je promenjeno
      .match({ id: product?.id })
      .select("*")
      .single();

    if (error) {
      console.error("❌ Greška pri ažuriranju proizvoda:", error);
    } else {
      console.log("✅ Proizvod uspešno ažuriran!");
      setData((prev: Product[]) =>
        prev.map((p) => (p.id === product?.id ? data : p))
      );
      setFeedback(true, {
        title: "Proizvod ažuriran",
        subtitle: "Podaci su uspešno ažurirani u bazi.",
        action: () => {
          setFeedback(false);
          setSelectScreen(from);
        },
      });
    }
  };

  // edit product

  return (
    <div className="h-screen flex flex-col bg-white">
      <Header
        title="Izaberite kategoriju traktora"
        subtitle="Unesite potrebne informacije."
        onBack={() => setSelectScreen(from)}
      />
      
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
        <LeftContainerEdit
          name={changeName}
          setChangeName={setChangeName}
          d1={changeD1}
          setD1={setChangeD1}
          d2={changeD2}
          setD2={setChangeD2}
          price={changePrice}
          setPrice={setChangePrice}
          action={changeAction}
          setAction={setChangeAction}
          f1={changeF1}
          setF1={setChangeF1}
          f2={changeF2}
          setF2={setChangeF2}
          f3={changeF3}
          setF3={setChangeF3}
          f4={changeF4}
          setF4={setChangeF4}
          f5={changeF5}
          setF5={setChangeF5}
          f6={changeF6}
          setF6={setChangeF6}
          category={product?.category}
        />
        <RightContainerEdit
          images={product?.images ?? []}
          pdf={product?.pdf_file}
          setPdfFile={setNewPdfFile}
          newPdfFile={newPdfFile}
        />
        </div>

        <div className="mt-6">
          {isChanged ? (
            <DeleteButton
              btnText="Sacuvajte promene."
              span="Sacuvajte promene na proizvodu."
              click={() => editProduct()}
            />
          ) : (
            <DeleteButton
              btnText="Izbrišite proizvod"
              span="Brisanje proizvoda."
              click={() => deleteProduct()}
              variant="danger"
              confirmTitle="Brisanje proizvoda"
              confirmMessage="Da li ste sigurni da želite da obrišete ovaj proizvod? Ova akcija ne može biti poništena."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

interface LeftContainerProps {
  name?: string;
  setChangeName: (name: string) => void;

  d1?: string;
  setD1: (desc: string) => void;

  d2?: string;
  setD2: (desc: string) => void;

  price?: string;
  setPrice: (price: string) => void;

  action?: string;
  setAction: (action: string) => void;

  f1?: string;
  setF1: (feature: string) => void;

  f2?: string;
  setF2: (feature: string) => void;

  f3?: string;
  setF3: (feature: string) => void;

  f4?: string;
  setF4: (feature: string) => void;

  f5?: string;
  setF5: (feature: string) => void;

  f6?: string;
  setF6: (feature: string) => void;
  category?: string;
}

const LeftContainerEdit: React.FC<LeftContainerProps> = ({
  name,
  setChangeName,
  d1,
  setD1,
  d2,
  setD2,
  price,
  setPrice,
  action,
  setAction,
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
  category,
}) => {
  return (
    <div className="w-full lg:w-[60%]">
      <InputWrapper title="Generalne informacije" margin={false}>
        <RegularInput
          placeholder="Ime proizvoda"
          label="Ime proizvoda"
          value={name ?? ""}
          onChange={setChangeName}
        />

        {/* textarea */}
        <Textarea
          height="100px"
          onChange={setD1}
          value={d1 ?? ""}
          placeholder="Manji opis"
          label="Manji opis proizvoda"
        />
        <Textarea
          height="100px"
          onChange={setD2}
          value={d2 ?? ""}
          placeholder="Veći opis"
          label="Veći opis proizvoda"
        />
      </InputWrapper>

      {category !== "rezervni-delovi" && (
        <InputWrapper title="Karakteristike proizvoda." margin={true}>
          <FeatureItemWrapper>
            <FeatureItem
              label="Karakteristika #1"
              placeholder="Karakteristika #1"
              value={f1 ?? ""}
              onChange={setF1}
            />
            <FeatureItem
              label="Karakteristika #2"
              placeholder="Karakteristika #2"
              value={f2 ?? ""}
              onChange={setF2}
            />
          </FeatureItemWrapper>

          <FeatureItemWrapper>
            <FeatureItem
              label="Karakteristika #3"
              placeholder="Karakteristika #3"
              value={f3 ?? ""}
              onChange={setF3}
            />
            <FeatureItem
              label="Karakteristika #4"
              placeholder="Karakteristika #4"
              value={f4 ?? ""}
              onChange={setF4}
            />
          </FeatureItemWrapper>

          <FeatureItemWrapper>
            <FeatureItem
              label="Karakteristika #5"
              placeholder="Karakteristika #5"
              value={f5 ?? ""}
              onChange={setF5}
            />
            <FeatureItem
              label="Karakteristika #6"
              placeholder="Karakteristika #6"
              value={f6 ?? ""}
              onChange={setF6}
            />
          </FeatureItemWrapper>
        </InputWrapper>
      )}

      <InputWrapper title="Cena proizvoda" margin={true}>
        <FeatureItemWrapper>
          <FeatureItem
            label="Regularna cena"
            placeholder="Regularna cena"
            value={price ?? ""}
            onChange={setPrice}
          />
          <FeatureItem
            label="Akcijska cena"
            placeholder="Akcijska cena"
            value={action ?? ""}
            onChange={setAction}
          />
        </FeatureItemWrapper>
      </InputWrapper>
    </div>
  );
};

interface RightContainerProps {
  images: string[];
  pdf: string | undefined | null;
  setPdfFile: (file: File | null) => void;
  newPdfFile: File | null;
}

const RightContainerEdit: React.FC<RightContainerProps> = ({ images, pdf, setPdfFile, newPdfFile }) => {
  const [selectedFileName, setSelectedFileName] = React.useState<string>("");
  
  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
      setSelectedFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="w-full lg:w-[39%]">
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Slike proizvoda</h3>

        <div className="w-full rounded-lg relative overflow-hidden">
          <Image
            src={images[0] ?? ""}
            alt="Uploaded"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, 500px"
            style={{ width: '100%', height: 'auto' }}
            className="rounded-lg"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {/* Prikaz slika u gridu */}
          {images.slice(1).map((imageUrl, i) => (
            <div
              key={i}
              className="relative border-2 border-gray-300 aspect-square rounded-lg flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5 mt-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">PDF dokument (opciono)</h3>
        
        {newPdfFile ? (
          <div>
            <p className="text-sm text-gray-600 mb-3">📄 Novi PDF: {newPdfFile.name}</p>
            <button
              onClick={() => setPdfFile(null)}
              className="w-full py-2 px-4 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all"
            >
              Ukloni novi PDF
            </button>
          </div>
        ) : (
          <>
            {pdf && (
              <div className="mb-3">
                <p className="text-sm text-gray-600 mb-3">📄 Trenutni PDF: {pdf.split('/').pop()}</p>
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full mb-2"
                >
                  <button className="w-full py-2 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all">
                    Pogledajte trenutni PDF
                  </button>
                </a>
              </div>
            )}
            
            <input
              type="file"
              accept="application/pdf"
              onChange={handlePdfChange}
              id="pdfFileInput"
              className="hidden"
            />
            <label
              htmlFor="pdfFileInput"
              className="inline-block w-full py-2 px-4 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all cursor-pointer text-center"
            >
              Izaberite fajl
            </label>
            {selectedFileName && (
              <p className="text-sm text-gray-600 mt-2">📄 {selectedFileName}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
