import ProductBox from "@/components/frontend/ProductBox";
import ProductsContainer from "@/components/frontend/ProductsContainer";
import ProductsIntro from "@/components/frontend/ProductsIntro";
import FrontLayout from "@/components/layouts/FrontLayout";
import { supabase } from "@/lib/supabase";

export const fetchCache = "force-no-store";

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    balirke: "Balirke",
    kosacice: "Kosačice",
    sakupljaci: "Sakupljači",
    utovarivaci: "Utovarivači",
    freze: "Freze",
    plugovi: "Plugovi",
    sejalice: "Sejalice",
    prskalice: "Prskalice",
    rasipaci: "Rasipači",
    setvospremaci: "Setvospremači",
    atomizeri: "Atomizeri",
    mulcari: "Mulčari",
    prikolice: "Prikolice",
    cisterne: "Cisterne",
    rasturaci: "Rasturači",
  };

  return labels[category.toLowerCase()] || category;
}

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  const categoryLabel = getCategoryLabel(category);

  return {
    title: `${categoryLabel} – Priključne Mašine | Jugometal Svilajnac`,
    description: `Ponuda ${categoryLabel.toLowerCase()} u okviru asortimana priključnih mašina Jugometal Svilajnac. Kvalitetna oprema za sve potrebe poljoprivrede.`,
    keywords: [
      `${categoryLabel} priključne mašine`,
      "Poljoprivredne mašine Svilajnac Srbija",
      "Priključne mašine Srbija",
      "Jugometal Svilajnac Srbija",
      "Poljoprivredna oprema Srbija Svilajnac",
      "Poljoprivredne mašine Srbija Svilajnac",
      "Poljopriveda Srbija Svilajnac",
      "Mašine za poljoprivredu Srbija Svilajnac",
    ]
  };
}



export default async function BrandPage({
    params,
  }: {
    params: Promise<{ category: string }>;
  }) {
    const { category } = await params;

    const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("subcategory", category);

  if (error) {
    console.error("❌ Greška pri učitavanju proizvoda:", error);
    return (
      <FrontLayout>
        <h1>Proizvodi</h1>
        <p>Greška pri učitavanju podataka.</p>
      </FrontLayout>
    );
  }


  
    if (!category) {
      return (
        <FrontLayout>
          <h1>Proizvodi</h1>
          <p>Nedostaje parametar brenda.</p>
        </FrontLayout>
      );
    }

    return (
        <FrontLayout>
          <ProductsIntro s1T={'Početna'} s1L={'/'} s2T={'Priključne mašine'} s2L={'/prikljucne-masine'} s3T={category} />
          <ProductsContainer>
            {products.map((product, i) => (
              <ProductBox key={i} product={product} url={`/${'prikljucne-masine'}/${category}`} />
            ))}
          </ProductsContainer>
        </FrontLayout>
      );

}