import {
  ProductAbout,
  ProductImage,
  ProductQuestion,
} from "@/app/traktori/[brand]/[product]/page";
import ContactForm from "@/components/admin/screens/ContactForm";
import FrontLayout from "@/components/layouts/FrontLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { supabase } from "@/lib/supabase";

export default async function Product({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;

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
                  <BreadcrumbLink href={`/rezervni-delovi`}>
                    Rezervni delovi
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/rezervni-delovi/delovi-za-prikljucne-masine`}
                  >
                    Delovi za prikljucne masine
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/rezervni-delovi/delovi-za-prikljucne-masine/rotaciona-kosa-poljska`}
                  >
                    Rotaciona Kosa
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
              <ProductAbout
                title={single.name}
                a1={single.description_one}
                a2={single.description_two}
              />

              <div className="mt-4 text-[1.2rem]">
                {single.regular_price && (
                  <p
                    className={
                      single.action_price ? "line-through text-gray-500" : ""
                    }
                  >
                    Cena:{" "}
                    <span className="font-bold">
                      {single.regular_price} RSD
                    </span>
                  </p>
                )}

                {single.action_price && (
                  <p className="text-red-500 font-bold">
                    Akcija:{" "}
                    <span className="font-bold">{single.action_price} RSD</span>
                  </p>
                )}
              </div>

              <button className="w-full py-2 px-4 border  border-black mt-8 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                Dodajte u korpu
              </button>
            </div>
          </div>

          <ProductQuestion />
          <ContactForm />
        </div>
      </div>
    </FrontLayout>
  );
}
