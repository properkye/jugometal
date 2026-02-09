"use client";

import { useCart } from "@/context/cartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  city: string;
  postalCode: string;
  address: string;
  phone: string;
};

type CheckoutFormProps = {
  onSuccess: () => void;
};

export default function CheckoutForm({ onSuccess }: CheckoutFormProps) {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    city: "",
    postalCode: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const { cart, resetCart } = useCart();

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\s+/g, "");
    const regex = /^(?:\+?\d{7,}|0\d{6,})$/;
    return regex.test(cleaned);
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!form.fullName) newErrors.fullName = "Ime i prezime je obavezno.";
    if (!form.email) newErrors.email = "Email je obavezan.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email nije validan.";
    if (!form.phone) newErrors.phone = "Broj telefona je obavezan.";
    else if (!validatePhone(form.phone))
      newErrors.phone = "Unesite ispravan broj telefona.";
    if (!form.city) newErrors.city = "Grad je obavezan.";
    if (!form.postalCode) newErrors.postalCode = "Poštanski broj je obavezan.";
    if (!form.address) newErrors.address = "Adresa je obavezna.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    if (!validate()) return;

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: form,
          items: cart,
        }),
      });

      if (!response.ok) throw new Error("Neuspešno slanje");

      setStatus("success");

      setTimeout(() => {
        onSuccess(); // prvo zatvori formu
        resetCart(); // pa tek onda očisti cart
        router.push('/')

      }, 2500);
    } catch (err) {
      setStatus("error");
      console.error("Greška prilikom slanja:", err);
    }
  };

  return (
    <div className=" mt-8 mb-8 p-6 border rounded-xl shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4">Podaci za dostavu</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Ime i prezime */}
        <div>
          <label className="block text-sm font-medium">Ime i prezime</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Broj telefona */}
        <div>
          <label className="block text-sm font-medium">Broj telefona</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+381 64 123 4567"
            className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Grad */}
        <div>
          <label className="block text-sm font-medium">Grad</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city}</p>
          )}
        </div>

        {/* Poštanski broj */}
        <div>
          <label className="block text-sm font-medium">Poštanski broj</label>
          <input
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
          />
          {errors.postalCode && (
            <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
          )}
        </div>

        {/* Adresa */}
        <div>
          <label className="block text-sm font-medium">Adresa</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Pošalji narudžbinu
        </button>
      </form>

      {status === "error" && (
        <div className="relative mt-6 p-4 rounded-lg bg-red-100 border border-red-300 text-red-800 text-sm">
          ❌ Došlo je do greške prilikom slanja. Pokušajte ponovo.
          <button
            onClick={() => setStatus("idle")}
            className="absolute top-2 right-2 text-red-700 hover:text-red-900 text-xs"
          >
            Zatvori
          </button>
        </div>
      )}
    </div>
  );
}
