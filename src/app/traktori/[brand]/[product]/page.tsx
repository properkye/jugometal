import FrontLayout from "@/components/layouts/FrontLayout";
import { brandLogo } from "@/data2";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { FaArrowsAlt } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
// import ContactForm from "@/components/admin/screens/ContactForm";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";

// PROUCI OVO OVDE ZATO STO CE 2X DA VRACA ISTI FETCH ZBOG SEO-a
export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product } = await params;

  const { data, error } = await supabase
    .from("products")
    .select("name, description_one") // minimum
    .eq("url", product)
    .single();

  if (error || !data) {
    return {
      title: "Proizvod – Jugometal Svilajnac",
      description: "Detalji o proizvodu iz asortimana Jugometal Svilajnac.",
    };
  }

  return {
    title: `${data.name} – Jugometal Svilajnac`,
    description:
      data.description_one || "Detalji o proizvodu iz ponude Jugometal.",
  };
}

export default async function Product({
  params,
}: {
  params: Promise<{ product: string; brand: string }>;
}) {
  const { product, brand } = await params;

  if (!product) {
    return (
      <FrontLayout>
        <p>Nedostaje parametar proizvoda.</p>
      </FrontLayout>
    );
  }

  const { data: prod, error } = await supabase
    .from("products")
    .select("*")
    .eq("url", product);

  if (error) {
    console.error("❌ Greška pri učitavanju proizvoda:", error);
    return (
      <FrontLayout>
        <h1>Proizvodi</h1>
        <p>Greška pri učitavanju podataka.</p>
      </FrontLayout>
    );
  }

  const single = prod[0];

  const b1: [string, string] = (single?.features?.[0]?.split(":") ?? [
    "",
    "",
  ]) as [string, string];
  const b2: [string, string] = (single?.features?.[1]?.split(":") ?? [
    "",
    "",
  ]) as [string, string];
  const b3: [string, string] = (single?.features?.[2]?.split(":") ?? [
    "",
    "",
  ]) as [string, string];
  const b4: [string, string] = (single?.features?.[3]?.split(":") ?? [
    "",
    "",
  ]) as [string, string];
  const b5: [string, string] = (single?.features?.[4]?.split(":") ?? [
    "",
    "",
  ]) as [string, string];
  const b6: [string, string] = (single?.features?.[5]?.split(":") ?? [
    "",
    "",
  ]) as [string, string];

  const breadcategory =
    single.category === "traktori"
      ? "Traktori"
      : single.category === "prikljucne-masine"
      ? "Priključne mašine"
      : "Rezervni Delovi";

  return (
    <FrontLayout>
      <div className="border-t border-gray-300">
        <div className="wrapper">
          <div className="my-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Početna</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${single.category}`}>
                    {breadcategory}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${single.category}/${brand}`}>
                    {brand}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{single.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="lg:grid lg:grid-cols-[49%_49%] lg:justify-between lg:items-center ">
            <ProductImage src={single.images[0]} alt={single.description_one} />
            <div className="">
              <div className="h-[auto] w-[100px] relative">
                <Image
                  src={brandLogo(single.brand)}
                  alt={single.description_one}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <ProductAbout
                title={single.name}
                a1={single.description_one}
                a2={single.description_two}
              />

              <ProductAspects
                bot1={b1}
                bot2={b2}
                bot3={b3}
                bot4={b4}
                bot5={b5}
                bot6={b6}
              />

              {single.pdf_file !== null && (
                <div className="my-10">
                  {/* Dugme za otvaranje PDF-a */}
                  <a
                    href={single.pdf_file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full py-4 rounded-lg bg-gray-700 text-white hover:bg-black transition-all duration-300">
                      Tehničke karakteristike
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>

          <ProductQuestion />
          {/* <ContactForm /> */}
        </div>
      </div>
    </FrontLayout>
  );
}

interface ProductImageProps {
  src: string;
  alt: string;
}
export const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[400px] 2xl:h-[500px]">
      <Image
        src={src}
        alt={alt}
        width={1500}
        height={1500}
        priority
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

interface ProductAboutProps {
  title: string;
  a1: string;
  a2: string;
}

export const ProductAbout: React.FC<ProductAboutProps> = ({
  title,
  a1,
  a2,
}) => {
  return (
    <div className="py-4 w-full md:w-[500px] lg:w-full">
      <h2 className="text-[30px] text-dark mb-8 tracking-[-0.03rem] font-semibold md:text-[36px] lg:text-[42px]">
        <span className="text-red-500">#</span>
        {title}
      </h2>
      <p className="text-[16px] text-light-dark tracking-[-0.03rem] leading-[21px] md:text-base lg:text-[1.2rem] lg:leading-[26px] mb-6">
        {a1}
      </p>
      <p className="text-[16px] text-light-dark tracking-[-0.03rem] leading-[21px] md:text-base lg:text-[1.2rem] lg:leading-[26px]">
        {a2}
      </p>
    </div>
  );
};

interface ProductAspectsProps {
  bot1: [string, string];
  bot2: [string, string];
  bot3: [string, string];
  bot4: [string, string];
  bot5: [string, string];
  bot6: [string, string];
}

export const ProductAspects: React.FC<ProductAspectsProps> = ({
  bot1,
  bot2,
  bot3,
  bot4,
  bot5,
  bot6,
}) => {
  return (
    <div className="mt-6 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-4">
      <div>
        <div className="flex items-center text-[0.9rem] my-[0.4rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem]">
          <IoCheckmarkDoneOutline size={20} />
          <h6 className="ml-1">
            {bot1[0]}: <span>{bot1[1]}</span>
          </h6>
        </div>
        <div className="flex items-center text-[0.9rem] my-[0.4rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem]">
          <IoCheckmarkDoneOutline size={20} />
          <h6 className="ml-1">
            {bot2[0]}: <span>{bot2[1]}</span>
          </h6>
        </div>
        <div className="flex items-center text-[0.9rem] my-[0.4rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem]">
          <IoCheckmarkDoneOutline size={20} />
          <h6 className="ml-1">
            {bot3[0]}: <span>{bot3[1]}</span>
          </h6>
        </div>
      </div>
      <div>
        <div className="flex items-center text-[0.9rem] my-[0.4rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem]">
          <FaArrowsAlt size={14} />
          <h6 className="ml-1">
            {bot4[0]}: <span>{bot4[1]}</span>
          </h6>
        </div>
        <div className="flex items-center text-[0.9rem] my-[0.4rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem]">
          <FaArrowsAlt size={14} />
          <h6 className="ml-1">
            {bot5[0]}: <span>{bot5[1]}</span>
          </h6>
        </div>
        <div className="flex items-center text-[0.9rem] my-[0.4rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem]">
          <FaArrowsAlt size={14} />
          <h6 className="ml-1">
            {bot6[0]}: <span>{bot6[1]}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export const ProductQuestion: React.FC = () => {
  return (
    <div className="mt-[5rem] mb-[5rem]">
      <h4 className="text-[1.5rem] tracking-[-0.5px] mb-4 text-dark md:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.8rem] 2xl:text-[2rem]">
        Imate pitanje vezano za proizvod?
      </h4>
      <p className="text-[16px] text-light-dark tracking-[-0.03rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] lg:w-[700px]">
        Ukoliko imate dodatnih pitanja o proizvodu, budite slobodni da nas
        kontaktirate putem email-a ili telefona za bržu i efikasniju podršku.
      </p>
    </div>
  );
};
