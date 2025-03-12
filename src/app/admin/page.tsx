import AdminLayout from "@/components/layouts/AdminLayout";
import { AdminContextProvider } from "@/context/adminContext";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jugometal - Admin",
    description: "Jugometal traktori i poljoprivredne mašine",
  };

export default function Admin() {
    return (
       <AdminContextProvider>
        <AdminLayout />
       </AdminContextProvider>
    )
}