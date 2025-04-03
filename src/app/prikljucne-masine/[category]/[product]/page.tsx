import {
  ProductAbout,
  ProductAspects,
  ProductImage,
  ProductQuestion,
} from "@/app/traktori/[brand]/[product]/page";
// import ContactForm from "@/components/admin/screens/ContactForm";
import FrontLayout from "@/components/layouts/FrontLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { brandLogo } from "@/data2";
import { supabase } from "@/lib/supabase";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { category, product } = await params;

  const { data, error } = await supabase
    .from("products")
    .select("name, description_two, images")
    .eq("url", product)
    .single();

    console.log(data)

  if (error || !data) {
    return {
      title: "Proizvod – Jugometal Svilajnac",
      description: "Detalji o proizvodu iz asortimana Jugometal Svilajnac.",
    };
  }

  return {
    title: `${data.name} – Jugometal Svilajnac`,
    description:
      data.description_two || "Detalji o proizvodu iz ponude Jugometal.",
    openGraph: {
      title: `${data.name} – Jugometal Svilajnac`,
      description: data.description_two || "",
      url: `https://jugometal.co.rs/prikljucne-masine/${category}/${product}`,
      images: data.images[0]
        ? [
            {
              url: data.images[0],
              width: 1200,
              height: 630,
              alt: data.name,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.name,
      description: data.description_two || "",
      images: data.images ? [data.images[0]] : [],
    },
  };
}

export default async function Product({
  params,
}: {
  params: Promise<{ product: string; category: string }>;
}) {
  const { product, category } = await params;

  console.log(product);
  console.log(category);

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
                  <BreadcrumbLink href={`/${single.category}/${category}`}>
                    {category}
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
            </div>
          </div>

          <ProductQuestion />
          {/* <ContactForm /> */}
        </div>
      </div>
    </FrontLayout>
  );
}
