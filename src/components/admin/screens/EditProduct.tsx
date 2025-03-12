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
    changeF6 !== (product?.features?.[5] ?? "");

  const deleteProduct = async () => {
    if (!product?.id || !product?.image) {
      console.error("Greška: Nedostaje ID proizvoda ili URL slike.");
      return;
    }

    try {
      // 1️⃣ Dobijamo tačnu putanju fajla u storage-u
      const storagePrefix =
        "https://hbimjllhujrqysckvtkw.supabase.co/storage/v1/object/public/";
      if (!product.image.startsWith(storagePrefix)) {
        console.error("Greška: URL slike nije validan.");
        return;
      }

      const imagePath = product.image.replace(storagePrefix, ""); // Uklanja nepotreban deo URL-a
      const bucketName = imagePath.split("/")[0]; // Uzimamo bucket name
      const filePath = imagePath.substring(bucketName.length + 1); // Uklanjamo bucket iz putanje

      // 2️⃣ Brisanje slike iz Supabase Storage-a
      const { error: storageError } = await supabase.storage
        .from(bucketName)
        .remove([filePath]);

      if (storageError) {
        console.error("Greška pri brisanju slike:", storageError.message);
      } else {
        console.log("✅ Slika uspešno obrisana!");
      }

      // 3️⃣ Brisanje proizvoda iz baze
      const { error: dbError } = await supabase
        .from("products")
        .delete()
        .match({ id: product.id });

      if (dbError) {
        console.error("❌ Greška pri brisanju proizvoda:", dbError.message);
      } else {
        console.log("✅ Proizvod uspešno obrisan!");

        // 4️⃣ Odmah brišemo proizvod iz lokalnog state-a
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

  const editProduct = async () => {
    if (!isChanged) return; // Ako nema promena, ne radi ništa

    const updatedProduct = {
      name: changeName,
      description_one: changeD1,
      description_two: changeD2,
      regular_price: changePrice,
      action_price: changeAction,
      features: [changeF1, changeF2, changeF3, changeF4, changeF5, changeF6],
    };

    const { data,error } = await supabase
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
          setFeedback(false)
          setSelectScreen(from)
        },
      });
    }
  };

  // edit product

  return (
    <div className="pb-10">
      <Header
        title="Izaberite kategoriju traktora"
        subtitle="Unesite potrebne informacije."
      />

      <Back click={() => setSelectScreen(from)} />
      <div className="mx-8 my-4 flex justify-between">
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
        <RightContainerEdit imageFile={product?.image} />
      </div>

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
        />
      )}
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
  category?:string
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
  category
}) => {
  return (
    <div className="w-[60%]">
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



      {category !== 'rezervni-delovi' && (
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

      <InputWrapper title="Cena proizvoda" margin={false}>
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
  imageFile?: string;
}

const RightContainerEdit: React.FC<RightContainerProps> = ({ imageFile }) => {
  return (
    <div className="w-[39%]">
      <div className="rounded-lg p-4 bg-[#fcfcfc] h-[600px] mb-10">
        <h2 className="text-[1.5rem]">Slika proizvoda</h2>

        <div className="h-[80%] w-[100%] mt-4 rounded-lg relative overflow-hidden z-10">
          <Image
            src={imageFile ?? ""}
            alt="Uploaded"
            sizes="500px"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg z-10"
          />
        </div>

        {/* Input koji će otvarati file picker */}
        {/* <input
              type="file"
              accept="image/*"
              className="hidden"
              id="fileInput"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImageFile(e.target.files[0]);
                }
              }}
            /> */}

        {/* Ako slika ne postoji, prikazujemo label da može da se klikne */}
        {/* {!imageFile ? (
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
            )} */}

        {/* Dugme za brisanje slike */}
        {/* {imageFile ? (
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
            )} */}
      </div>

      {/* <div className="rounded-lg p-4 bg-[#fcfcfc] h-fit">
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
          </div> */}
    </div>
  );
};
