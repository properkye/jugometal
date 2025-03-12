import ProductBox from "@/components/frontend/ProductBox";
import ProductsContainer from "@/components/frontend/ProductsContainer";
import ProductsIntro from "@/components/frontend/ProductsIntro";
import FrontLayout from "@/components/layouts/FrontLayout";
import { supabase } from "@/lib/supabase";

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