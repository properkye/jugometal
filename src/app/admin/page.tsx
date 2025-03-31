import AdminLayout from "@/components/layouts/AdminLayout";
import { AdminContextProvider } from "@/context/adminContext";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin",
    description: "Jugometal traktori i poljoprivredne mašine",
  };

export default function Admin() {
    return (
       <AdminContextProvider>
        <AdminLayout />
       </AdminContextProvider>
    )
}

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Koristi useRouter za preusmeravanje

// export default function Admin() {
//   const router = useRouter();

//   useEffect(() => {
//     // Ako želite da svi koji pokušaju da uđu u admin budu preusmereni na login
//     router.push('/login');  // Ovdje stavljamo URL za login stranicu
//   }, [router]); // useEffect će se pozvati samo jednom kada se komponenta učita

//   return null; // Nema potrebe za renderovanjem ničega
// }