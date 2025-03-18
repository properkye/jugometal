import PartProductBox from "@/components/frontend/PartProductBox";
import ProductsContainer from "@/components/frontend/ProductsContainer";
import ProductsIntro from "@/components/frontend/ProductsIntro";
import FrontLayout from "@/components/layouts/FrontLayout";
import { supabase } from "@/lib/supabase";

export default async function MasseyFerguson() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("brand", "massey-ferguson");

  if (error) {
    console.error("❌ Greška pri učitavanju proizvoda:", error);
    return (
      <FrontLayout>
        <h1>Proizvodi</h1>
        <p>Greška pri učitavanju podataka.</p>
      </FrontLayout>
    );
  }

  return (
    <FrontLayout>
      <ProductsIntro
        s1T={"Rezervni delovi"}
        s1L={"/rezervni-delovi"}
        s2T={"Traktorski delovi"}
        s2L={"/rezervni-delovi/traktorski-delovi"}
        s3T={"Massey Ferguson"}
      />
      <ProductsContainer>
        {products.map((product, i) => (
          <PartProductBox
            key={i}
            product={product}
            url={`/${"rezervni-delovi"}/${"traktorski-delovi"}/${"massey-ferguson"}`}
          />
        ))}
      </ProductsContainer>
    </FrontLayout>
  );
}





