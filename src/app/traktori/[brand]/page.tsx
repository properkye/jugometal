import FrontLayout from "@/components/layouts/FrontLayout";
import { supabase } from "@/lib/supabase";

import ProductsContainer from "@/components/frontend/ProductsContainer";
import ProductBox from "@/components/frontend/ProductBox";
import ProductsIntro from "@/components/frontend/ProductsIntro";
import { Metadata } from "next";

function getBrandLabel(brand: string): string {
  if (brand.toLowerCase() === "john-deere") return "John Deere";

  const brandNames: Record<string, string> = {
    imt: "IMT",
    yto: "YTO",
    solis: "Solis",
    belarus: "Belarus",
    mahindra: "Mahindra",
    zetor: "Zetor",
    carraro: "Carraro",
  };

  return brandNames[brand.toLowerCase()] || brand;
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }>; }): Promise<Metadata> {
  const { brand } = await params;
  
  if(!brand) {
    console.log('no brand')
  }

  const brandLabel = getBrandLabel(brand);

  return {
    title: `${brandLabel} Traktori – Jugometal Svilajnac`,
    description: `Ponuda ${brandLabel} traktora iz asortimana Jugometal Svilajnac. Provereni kvalitet, dostupnost delova i podrška širom Srbije.`,
    keywords: [
      `${brandLabel} Traktori`,
      "Traktori Srbija",
      "Prodaja traktora",
      "Poljoprivredne mašine",
      "Jugometal Svilajnac"
    ]
  };
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }>; }) {
  const { brand } = await params;

  if (!brand) {
    return (
      <FrontLayout>
        <h1>Proizvodi</h1>
        <p>Nedostaje parametar brenda.</p>
      </FrontLayout>
    );
  }

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("brand", brand);

  if (error) {
    console.error("Greška pri učitavanju proizvoda:", error);
    return (
      <FrontLayout>
        <h1>Proizvodi</h1>
        <p>Greška pri učitavanju podataka.</p>
      </FrontLayout>
    );
  }

  const brandLabel = getBrandLabel(brand);

  return (
    <FrontLayout>
      <ProductsIntro
        s1T="Početna"
        s1L="/"
        s2T="Traktori"
        s2L="/traktori"
        s3T={brandLabel}
      />
      <ProductsContainer>
        {products.map((product, i) => (
          <ProductBox key={i} product={product} url={`/traktori/${brand}`} />
        ))}
      </ProductsContainer>
    </FrontLayout>
  );
}
