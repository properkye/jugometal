import CategoryItemBox from "@/components/frontend/CategoryItemBox";
import ProductsIntro from "@/components/frontend/ProductsIntro";
import FrontLayout from "@/components/layouts/FrontLayout";
import { deloviZaMasineCategories } from "@/data";

export default function Delovizaprikljucnemasine() {
  return (
    <FrontLayout>
      <ProductsIntro
        s1T={"Početna"}
        s1L={"/"}
        s2T={"Rezervni delovi"}
        s2L={"/rezervni-delovi"}
        s3T={"Delovi za prikljucne masine"}
      />

      <div className="bg-[#fafafa] w-full h-full">
        <div className="wrapper py-10 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {deloviZaMasineCategories.map((item, i) => (
              <CategoryItemBox
                quantity={item.quantity}
                alt={item.alt}
                image={item.image}
                link={item.link}
                key={i}
              />
            ))}
        </div>
      </div>
    </FrontLayout>
  );
}
