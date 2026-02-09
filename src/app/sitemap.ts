import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://jugometal.vercel.app").replace(/\/$/, "");

  // Statičke rute
  const staticPaths = [
    "/",
    "/akcije",
    "/kontakt",
    "/o-nama",
    "/prikljucne-masine",
    "/rezervni-delovi",
    "/rezervni-delovi/delovi-za-prikljucne-masine",
    "/rezervni-delovi/traktorski-delovi",
    "/rezervni-delovi/ostalo",
    "/servis",
    "/subvencije",
    "/traktori",
  ];

  const staticRoutes = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // Traktori
  const { data: tractors } = await supabase
    .from("products")
    .select("brand, url, updated_at")
    .eq("category", "traktori");

  const uniqueBrands = Array.from(new Set(tractors?.map((item) => item.brand)));

  const tractorBrandRoutes = uniqueBrands.map((brand) => ({
    url: `${baseUrl}/traktori/${brand}`,
    lastModified: new Date(),
  }));

  const tractorProductRoutes = tractors?.map((item) => ({
    url: `${baseUrl}/traktori/${item.brand}/${item.url}`,
    lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
  })) || [];

  // Priključne mašine
  const { data: machines } = await supabase
    .from("products")
    .select("subcategory, url, updated_at")
    .eq("category", "prikljucne-masine");

  const uniqueCategories = Array.from(
    new Set(machines?.map((item) => item.subcategory))
  );

  const machineCategoryRoutes = uniqueCategories.map((category) => ({
    url: `${baseUrl}/prikljucne-masine/${category}`,
    lastModified: new Date(),
  }));

  const machineProductRoutes = machines?.map((item) => ({
    url: `${baseUrl}/prikljucne-masine/${item.subcategory}/${item.url}`,
    lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
  })) || [];

  return [
    ...staticRoutes,
    ...tractorBrandRoutes,
    ...tractorProductRoutes,
    ...machineCategoryRoutes,
    ...machineProductRoutes,
  ];
}
