"use client";

import Image from "next/image";

import { useCart } from "@/context/cartContext";
import FrontLayout from "@/components/layouts/FrontLayout";
import CheckoutForm from "@/components/frontend/CheckoutForm";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cart() {
  const { cart, cartTotalAmount, removeFromCart, decreaseQty, addToCart } = useCart();
  const router = useRouter();

  const [showForm, setShowForm] = useState(true);

  return (
    <FrontLayout>
      <div className="wrapper w-full mx-auto py-10 grid gap-8 md:grid-cols-2 px-4">
        {/* LEFT - CART ITEMS */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Tvoja korpa</h2>

          {cart.length === 0 ? (
            <div className="text-center border rounded-xl p-8">
              <p className="text-gray-600 mb-4">Korpa je trenutno prazna.</p>
              <button
                onClick={() => router.back()}
                className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Nazad na proizvode
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 border p-4 rounded-lg shadow-sm"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                      width={80}
                      height={80}
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.qty} kom x {item.priceData.price} RSD
                      </p>

                      {/* Kontrola količine */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decreaseQty(item._id)}
                          className="w-6 h-6 border rounded text-center text-sm font-bold hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="w-6 text-center">{item.qty}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-6 h-6 border rounded text-center text-sm font-bold hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="mt-2 text-sm text-red-600 hover:underline"
                      >
                        Ukloni
                      </button>
                    </div>
                    <span className="font-semibold">
                      {item.qty * item.priceData.price} RSD
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t mt-6 pt-4 flex justify-between text-lg font-bold">
                <span>Ukupno:</span>
                <span>{cartTotalAmount} RSD</span>
              </div>
            </>
          )}
        </div>

        {/* RIGHT - CHECKOUT FORM */}
        {showForm && <CheckoutForm onSuccess={() => setShowForm(false)} />}
      </div>
    </FrontLayout>
  );
}
