"use client";

import AdminLayout from "@/components/layouts/AdminLayout";
import { AdminContextProvider } from "@/context/adminContext";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Admin() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
                <div className="text-xl text-gray-600 dark:text-gray-400">Učitavanje...</div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
       <AdminContextProvider>
        <AdminLayout />
       </AdminContextProvider>
    )
}