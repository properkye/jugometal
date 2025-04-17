import PartProductBox from "@/components/frontend/PartProductBox";
import ProductsContainer from "@/components/frontend/ProductsContainer";
import ProductsIntro from "@/components/frontend/ProductsIntro";
import FrontLayout from "@/components/layouts/FrontLayout";
import { supabase } from "@/lib/supabase";

export const fetchCache = "force-no-store";

export default async function MasseyFerguson() {
    const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("brand", "rotaciona-kosa-poljska")

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
        s2T={"Delovi za prikljucne masine"}
        s2L={"/rezervni-delovi/delovi-za-prikljucne-masine"}
        s3T={"Rotaciona Kosa"}
      />
      <ProductsContainer>
        {products.map((product, i) => (
          <PartProductBox
            key={i}
            product={product}
            url={`/${"rezervni-delovi"}/${"delovi-za-prikljucne-masine"}/${"rotaciona-kosa-poljska"}`}
          />
        ))}
      </ProductsContainer>
    </FrontLayout>
  );
}





