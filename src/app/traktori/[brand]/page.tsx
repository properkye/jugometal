import FrontLayout from "@/components/layouts/FrontLayout";
import { supabase } from "@/lib/supabase";

import ProductsContainer from "@/components/frontend/ProductsContainer";
import ProductBox from "@/components/frontend/ProductBox";
import ProductsIntro from "@/components/frontend/ProductsIntro";

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;

  if (!brand) {
    return (
      <FrontLayout>
        <h1>Proizvodi</h1>
        <p>Nedostaje parametar brenda.</p>
      </FrontLayout>
    );
  }

  // 🚀 Povlačenje podataka iz baze na osnovu brenda
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("brand", brand);

  if (error) {
    console.error("❌ Greška pri učitavanju proizvoda:", error);
    return (
      <FrontLayout>
        <h1>Proizvodi</h1>
        <p>Greška pri učitavanju podataka.</p>
      </FrontLayout>
    );
  }

  console.log(products);

  return (
    <FrontLayout>
      <ProductsIntro s1T={'Početna'} s1L={'/'} s2T={'Traktori'} s2L={'/traktori'} s3T={brand}  />
      <ProductsContainer>
        {products.map((product, i) => (
          <ProductBox key={i} product={product} url={`/${'traktori'}/${brand}`} />
        ))}
      </ProductsContainer>
    </FrontLayout>
  );
}







